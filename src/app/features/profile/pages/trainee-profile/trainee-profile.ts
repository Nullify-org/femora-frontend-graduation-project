import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { EnrollmentService } from '../../../lms/services/enrollment.service';
import { OrderService } from '../../../marketplace/services/order.service';
import { Enrollment, Order } from '../../../../core/models/api.model';
import { formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-trainee-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './trainee-profile.html',
})
export class TraineeProfile {
  readonly auth = inject(AuthService);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly ordersApi = inject(OrderService);

  readonly enrollments = signal<Enrollment[]>([]);
  readonly orders = signal<Order[]>([]);
  readonly isLoading = signal(true);
  readonly isLoadingCourses = signal(true);

  readonly formatPrice = formatPrice;

  constructor() {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;

      this.enrollmentsApi.getMyEnrollments().subscribe({
        next: (response) => {
          this.enrollments.set(response.data);
          this.isLoadingCourses.set(false);
        },
        error: () => this.isLoadingCourses.set(false),
      });

      this.ordersApi.myOrders(userId).subscribe({
        next: (items) => {
          this.orders.set(items);
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
    });
  }

  /** Masks all but the first 2 characters of the email's local part, e.g. "no****@gmail.com" */
  maskedEmail(email: string | undefined | null): string {
    if (!email) return '';
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const visible = local.slice(0, 2);
    return `${visible}${'*'.repeat(Math.max(local.length - 2, 2))}@${domain}`;
  }

  orderItemsCount(order: Order): number {
    return order.orderItems?.length ?? order.items?.length ?? 0;
  }

  orderDate(order: Order): string {
    const raw = order.createdAt;
    if (!raw) return '';
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  orderStatusLabel(order: Order): string {
    const map: Record<string, string> = {
      Pending: 'قيد الانتظار',
      Processing: 'جارى التجهيز',
      Shipped: 'تم الشحن',
      Delivered: 'تم التسليم',
      Cancelled: 'ملغى',
    };
    return map[order.status ?? ''] ?? (order.status || 'غير معروف');
  }

  orderStatusClasses(order: Order): string {
    const map: Record<string, string> = {
      Pending: 'bg-amber-50 text-amber-700 border-amber-200',
      Processing: 'bg-blue-50 text-blue-700 border-blue-200',
      Shipped: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      Delivered: 'bg-sage/10 text-sage border-sage/30',
      Cancelled: 'bg-red-50 text-red-600 border-red-200',
    };
    return map[order.status ?? ''] ?? 'bg-stone-100 text-stone-600 border-stone-200';
  }
}
