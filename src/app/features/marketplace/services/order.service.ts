import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Order } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

// All Order fields are optional in the type (to also accept the mock seed-data shape),
// so normalize both directions here: real backend orders get legacy aliases filled in,
// and mock/seed orders get the backend-shape fields filled in.
function normalizeOrder(o: Order): Order {
  return {
    ...o,
    id: o.id ?? o.orderId,
    orderId: o.orderId ?? o.id,
    totalAmount: o.totalAmount ?? o.total,
    total: o.total ?? o.totalAmount,
  };
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly api  = inject(ApiClient);
  private readonly base = '/api/orders';

  /** Legacy: direct order placement (no Stripe) */
  placeOrder(userId: string): Observable<unknown> {
    return this.api.post(this.base, { userId });
  }

  /** @deprecated the userId param is no longer used — backend derives the current user from the auth token */
  myOrders(_userId?: string): Observable<Order[]> {
    return this.api
      .get<unknown>(`${this.base}/my-orders`)
      .pipe(map((res) => unwrapList<Order>(res).map(normalizeOrder)));
  }

  // ── Stripe Checkout ──────────────────────────────────────────────────────

  /**
   * Creates a Stripe Checkout Session for cart products.
   * Returns { sessionId, sessionUrl } — redirect the user to sessionUrl.
   */
  createCartCheckout(
    successUrl = `${window.location.origin}/payment-success`,
    cancelUrl  = `${window.location.origin}/cart`,
  ): Observable<{ sessionId: string; sessionUrl: string }> {
    return this.api.post<{ sessionId: string; sessionUrl: string }>(
      '/api/payments/checkout',
      { successUrl, cancelUrl },
    );
  }

  /**
   * Creates a Stripe Checkout Session for a single course.
   * Returns { sessionId, sessionUrl } — redirect the user to sessionUrl.
   */
  createCourseCheckout(
    courseId: string,
    successUrl = `${window.location.origin}/payment-success`,
    cancelUrl  = `${window.location.origin}/lms/catalog`,
  ): Observable<{ sessionId: string; sessionUrl: string }> {
    return this.api.post<{ sessionId: string; sessionUrl: string }>(
      '/api/payments/checkout',
      { courseId, successUrl, cancelUrl },
    );
  }

  /** Redirects the browser to Stripe Checkout after creating a cart session */
  checkoutCart(): void {
    this.createCartCheckout().subscribe({
      next: (res) => {
        if (res.sessionUrl) window.location.href = res.sessionUrl;
      },
    });
  }

  /** Redirects the browser to Stripe Checkout after creating a course session */
  checkoutCourse(courseId: string): void {
    this.createCourseCheckout(courseId).subscribe({
      next: (res) => {
        if (res.sessionUrl) window.location.href = res.sessionUrl;
      },
    });
  }
}