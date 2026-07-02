import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { CartItem, Order } from '../../../core/models/api.model';
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

  /** Create a marketplace order from the current cart contents with a pending status. */
  placeOrder(userId?: string, items?: CartItem[]): Observable<Order> {
    const payload: Record<string, unknown> = { status: 'Pending' };
    if (userId) payload['userId'] = userId;
    if (items?.length) payload['items'] = items;

    return this.api.post<Order>(this.base, payload).pipe(map((res) => normalizeOrder(res as Order)));
  }

  /** Alias for the cart-based order creation flow used by checkout. */
  createOrderFromCart(userId?: string, items?: CartItem[]): Observable<Order> {
    return this.placeOrder(userId, items);
  }

  /** Create a Stripe Checkout session for an already-created order. */
  createOrderCheckout(
    orderId: string,
    successUrl = `${window.location.origin}/payment-success`,
    cancelUrl  = `${window.location.origin}/marketplace/checkout`,
  ): Observable<{ sessionId: string; sessionUrl: string }> {
    return this.api.post<{ sessionId: string; sessionUrl: string }>(
      '/api/payments/checkout',
      { orderId, successUrl, cancelUrl },
    );
  }

  /**
   * Submits a normal browser POST so the backend can redirect the user
   * directly to the Stripe hosted checkout page.
   */
  redirectToCheckoutSession(params: {
    orderId?: string;
    courseId?: string;
    successUrl?: string;
    cancelUrl?: string;
  }): void {
    // Use the ApiClient to POST so the JWT Authorization header (via the
    // jwtInterceptor) is included. The backend will return { sessionUrl }
    // for Ajax callers — redirect the browser to that URL.
    const body: any = {
      successUrl: params.successUrl ?? `${window.location.origin}/payment-success`,
      cancelUrl: params.cancelUrl ?? `${window.location.origin}/marketplace/checkout`,
    };
    if (params.orderId) body.orderId = params.orderId;
    if (params.courseId) body.courseId = params.courseId;

    this.api.post<{ sessionId?: string; sessionUrl?: string }>('/api/payments/checkout', body).subscribe({
      next: (res) => {
        if (res?.sessionUrl) {
          window.location.href = res.sessionUrl;
        }
      },
      error: (err) => {
        // If the user is unauthenticated, send them to the login page so they can re-authenticate.
        if (err?.status === 401) {
          console.warn('[OrderService] Unauthorized when creating checkout session — redirecting to login');
          window.location.href = '/login';
          return;
        }

        // For other errors, fall back to a browser form submission. This may
        // still 401 if the backend enforces Authorization on navigations.
        try {
          if (typeof document === 'undefined' || !document.body) return;
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = '/api/payments/checkout';
          form.style.display = 'none';

          const appendField = (name: string, value?: string): void => {
            if (!value) return;
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            form.appendChild(input);
          };

          appendField('orderId', params.orderId);
          appendField('courseId', params.courseId);
          appendField('successUrl', params.successUrl ?? `${window.location.origin}/payment-success`);
          appendField('cancelUrl', params.cancelUrl ?? `${window.location.origin}/marketplace/checkout`);

          document.body.appendChild(form);
          form.submit();
        } catch (e) {
          console.error('[OrderService] checkout redirect fallback failed', e);
        }
      },
    });
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