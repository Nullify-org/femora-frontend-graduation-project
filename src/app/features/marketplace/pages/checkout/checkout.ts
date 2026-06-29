import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './checkout.html',
})
export class Checkout {
  private readonly ordersApi = inject(OrderService);
  private readonly auth      = inject(AuthService);
  private readonly router    = inject(Router);

  isPlacing    = signal(false);
  errorMessage = signal('');

  constructor() {
    runInBrowser(() => {
      if (!this.auth.user()) this.router.navigate(['/login']);
    });
  }

  /** Redirect to Stripe Checkout for cart products */
  placeOrder(): void {
    if (!this.auth.user()) { this.router.navigate(['/login']); return; }

    this.isPlacing.set(true);
    this.errorMessage.set('');

    this.ordersApi.createCartCheckout().subscribe({
      next: (res) => {
        // Redirect to Stripe — page leaves, no need to set isPlacing false
        if (res.sessionUrl) {
          window.location.href = res.sessionUrl;
        } else {
          this.isPlacing.set(false);
          this.errorMessage.set('لم يتم إنشاء جلسة الدفع. حاولي مرة أخرى.');
        }
      },
      error: (err) => {
        this.isPlacing.set(false);
        this.errorMessage.set(
          err?.error?.message ?? err?.error?.title ?? err?.error?.detail
          ?? 'تعذّر إتمام الطلب. يرجى المحاولة مرة أخرى.'
        );
      },
    });
  }
}
