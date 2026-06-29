import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Order } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly api  = inject(ApiClient);
  private readonly base = '/api/orders';

  /** Legacy: direct order placement (no Stripe) */
  placeOrder(userId: string): Observable<unknown> {
    return this.api.post(this.base, { userId });
  }

  myOrders(userId?: string): Observable<Order[]> {
    const params = userId ? { UserId: userId } : undefined;
    return this.api
      .get<unknown>(`${this.base}/my-orders`, { params })
      .pipe(map((res) => unwrapList<Order>(res)));
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
