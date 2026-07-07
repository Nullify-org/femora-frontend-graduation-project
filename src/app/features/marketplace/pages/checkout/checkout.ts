import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { CartService } from '../../services/cart.service';
import { Order } from '../../../../core/models/api.model';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './checkout.html',
})
export class Checkout {
  private readonly ordersApi = inject(OrderService);
  private readonly cartApi   = inject(CartService);
  private readonly auth      = inject(AuthService);
  private readonly router    = inject(Router);
  private readonly notifications = inject(NotificationService);

  isPlacing    = signal(false);
  errorMessage = signal('');
  createdOrder = signal<Order | null>(null);

  constructor() {
    runInBrowser(() => {
      if (!this.auth.user()) this.router.navigate(['/login']);
    });
  }

  placeOrder(): void {
    const user = this.auth.user();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    this.isPlacing.set(true);
    this.errorMessage.set('');

    this.cartApi.getCart(user.id).subscribe({
      next: (cart) => {
        const items = (cart.items ?? []).map((item) => ({ ...item }));
        if (!items.length) {
          this.isPlacing.set(false);
          this.errorMessage.set('السلة فارغة حاليًا. أضيفى منتجات أولًا ثم حاولى مرة أخرى.');
          return;
        }

        this.ordersApi.placeOrder(user.id, items).subscribe({
          next: (order) => {
            console.log('[Checkout] Order response:', order);
            this.createdOrder.set(order);
            const orderId = order?.id ?? order?.orderId;
            console.log('[Checkout] Extracted orderId:', orderId, 'from order:', order);

            // If the backend returned an orderId, post it so the backend links the
            // payment to the existing order. If the order object lacks an ID (some
            // backends/mocks may omit it), submit a plain browser POST without
            // orderId so the backend can create the order server-side and redirect.
            if (orderId) {
              console.log('[Checkout] Proceeding to Stripe with orderId:', orderId);
              this.ordersApi.redirectToCheckoutSession({
                orderId,
                successUrl: `${window.location.origin}/payment-success`,
                cancelUrl: `${window.location.origin}/marketplace/checkout`,
              });
            } else {
              console.warn('[Checkout] Order has no ID; falling back to server-side checkout flow.');
              this.ordersApi.redirectToCheckoutSession({
                successUrl: `${window.location.origin}/payment-success`,
                cancelUrl: `${window.location.origin}/marketplace/checkout`,
              });
            }
          },
          error: (err) => {
            console.error('[Checkout] Order creation error:', err);
            this.isPlacing.set(false);
            this.errorMessage.set(
              err?.error?.message ?? err?.error?.title ?? err?.error?.detail
              ?? 'تعذّر إنشاء الطلب. يرجى المحاولة مرة أخرى.'
            );
          },
        });
      },
      error: (err) => {
        this.isPlacing.set(false);
        this.errorMessage.set(
          err?.error?.message ?? err?.error?.title ?? err?.error?.detail
          ?? 'تعذّر تحميل السلة. يرجى المحاولة مرة أخرى.'
        );
      },
    });
  }
}
