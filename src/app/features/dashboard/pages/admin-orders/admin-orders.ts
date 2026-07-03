import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AdminService, AdminOrder, OrderStatus } from '../../../../core/services/admin.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

const PAGE_SIZE = 20;

const STATUSES: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

const STATUS_LABELS: Record<OrderStatus, string> = {
  Pending: 'قيد الانتظار',
  Processing: 'تم الدفع',
  Shipped: 'تم الشحن',
  Delivered: 'تم التسليم',
  Cancelled: 'ملغي',
};

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, Sidebar],
  templateUrl: './admin-orders.html',
})
export class AdminOrders {
  private readonly adminApi = inject(AdminService);
  private readonly notifications = inject(NotificationService);

  readonly orders = signal<AdminOrder[]>([]);
  readonly currentPage = signal(1);
  readonly totalCount = signal(0);
  readonly pageSize = PAGE_SIZE;
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  readonly updatingOrderId = signal<string | null>(null);

  statusFilter: OrderStatus | '' = '';

  readonly statuses = STATUSES;
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.totalCount() / this.pageSize)));
  readonly formatPrice = formatPrice;

  constructor() {
    runInBrowser(() => this.load(1));
  }

  load(page: number): void {
    if (page < 1) return;
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.adminApi.getOrders(page, this.pageSize, this.statusFilter || undefined).subscribe({
      next: (result) => {
        this.orders.set(result.items);
        this.totalCount.set(result.totalCount);
        this.currentPage.set(result.pageNumber);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل الطلبات');
        this.isLoading.set(false);
      },
    });
  }

  onFilterChange(): void {
    this.load(1);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) this.load(this.currentPage() + 1);
  }

  previousPage(): void {
    if (this.currentPage() > 1) this.load(this.currentPage() - 1);
  }

  changeStatus(order: AdminOrder, status: OrderStatus): void {
    if (status === order.status) return;

    const previous = order.status;
    this.updatingOrderId.set(order.id);

    // Optimistic update
    this.orders.update((list) => list.map((o) => (o.id === order.id ? { ...o, status } : o)));

    this.adminApi.updateOrderStatus(order.id, status).subscribe({
      next: () => {
        this.updatingOrderId.set(null);
        this.notifications.success('تم تحديث حالة الطلب');
      },
      error: () => {
        this.orders.update((list) => list.map((o) => (o.id === order.id ? { ...o, status: previous } : o)));
        this.updatingOrderId.set(null);
        this.notifications.error('تعذّر تحديث حالة الطلب');
      },
    });
  }

  statusLabel(status: OrderStatus): string {
    return STATUS_LABELS[status] ?? status;
  }
}
