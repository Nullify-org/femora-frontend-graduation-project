import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './checkout.html',
})
export class Checkout {
  private readonly ordersApi = inject(OrderService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  isPlacing = false;
  errorMessage = '';
  success = false;

  constructor() {
    runInBrowser(() => {
      if (!this.auth.user()) {
        this.router.navigate(['/login']);
      }
    });
  }

  placeOrder(): void {
    const user = this.auth.user();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.isPlacing = true;
    this.errorMessage = '';

    this.ordersApi.placeOrder(user.id).subscribe({
      next: () => {
        this.isPlacing = false;
        this.success = true;
        this.notifications.success('تم تأكيد طلبكِ بنجاح!');
      },
      error: (err) => {
        this.isPlacing = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? 'تعذّر إتمام الطلب';
      },
    });
  }
}
