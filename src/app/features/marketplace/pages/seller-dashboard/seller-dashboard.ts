import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApprovalService } from '../../../../core/services/approval.service';
import { OrderService } from '../../../marketplace/services/order.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { SwitchRole } from '../../../dashboard/widgets/switch-role/switch-role';
import { Order } from '../../../../core/models/api.model';
import { formatPrice } from '../../../../core/utils/api-response.util';

const ORDER_STATUSES = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] as const;
export type OrderStatus = typeof ORDER_STATUSES[number];

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar, FormsModule, SwitchRole, DatePipe],
  templateUrl: './seller-dashboard.html',
})
export class SellerDashboard implements OnInit {
  readonly auth = inject(AuthService);
  private readonly approvalsApi = inject(ApprovalService);
  private readonly ordersApi = inject(OrderService);
  private readonly notifications = inject(NotificationService);

  readonly showApply = signal(false);
  readonly orders = signal<Order[]>([]);
  readonly orderStatuses = ORDER_STATUSES;
  readonly updatingOrderId = signal<string | null>(null);
  readonly formatPrice = formatPrice;
  applyShopName = '';
  applyDescription = '';

  ngOnInit(): void {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;
      if (userId) {
        this.ordersApi.myOrders(userId).subscribe({
          next: (items) => this.orders.set(items ?? []),
          error: () => this.orders.set([]),
        });
      }
    });
  }

  changeOrderStatus(order: Order, status: OrderStatus): void {
    if (status === order.status) return;
    const previous = order.status;
    const orderId = order.orderId ?? order.id;
    if (!orderId) return;

    this.updatingOrderId.set(orderId);
    this.orders.update((list) =>
      list.map((item) => (item.orderId === orderId || item.id === orderId ? { ...item, status } : item)),
    );

    this.ordersApi.updateOrderStatus(orderId, status).subscribe({
      next: () => {
        this.updatingOrderId.set(null);
        this.notifications.success('تم تحديث حالة الطلب');
      },
      error: () => {
        this.orders.update((list) =>
          list.map((item) =>
            item.orderId === orderId || item.id === orderId ? { ...item, status: previous } : item,
          ),
        );
        this.updatingOrderId.set(null);
        this.notifications.error('تعذّر تحديث حالة الطلب');
      },
    });
  }

  applySeller(): void {
    const shopName = this.applyShopName.trim();
    if (!shopName) {
      this.notifications.error('اسم المتجر مطلوب');
      return;
    }
    this.approvalsApi.applySeller(shopName, this.applyDescription || undefined).subscribe({
      next: () => {
        this.notifications.success('تم إرسال طلبك — قيد المراجعة');
        this.showApply.set(false);
      },
      error: () => this.notifications.error('فشل إرسال الطلب'),
    });
  }
}
