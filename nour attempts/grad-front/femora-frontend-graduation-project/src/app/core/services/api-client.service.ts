import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NotificationService } from './notification.service';
import * as seed from '../utils/seed-data';

@Injectable({ providedIn: 'root' })
export class ApiClient {
  private readonly http = inject(HttpClient);
  private readonly notifications = inject(NotificationService);

  private getBaseUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const apiPrefix = environment.apiUrl || '';
    return `${apiPrefix}${url}`;
  }

  private getRequestOptions(options?: any): any {
    const opts = options || {};
    if (opts.withCredentials === undefined) {
      opts.withCredentials = true;
    }
    return opts;
  }

  get<T>(url: string, options?: any): Observable<T> {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);

    return (this.http.get(fullUrl, opts) as Observable<T>).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrorOrFallback<T>('GET', url, error, undefined, opts))
    );
  }

  post<T>(url: string, body: any, options?: any): Observable<T> {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);

    return (this.http.post(fullUrl, body, opts) as Observable<T>).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrorOrFallback<T>('POST', url, error, body, opts))
    );
  }

  put<T>(url: string, body: any, options?: any): Observable<T> {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);

    return (this.http.put(fullUrl, body, opts) as Observable<T>).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrorOrFallback<T>('PUT', url, error, body, opts))
    );
  }

  delete<T>(url: string, options?: any): Observable<T> {
    const fullUrl = this.getBaseUrl(url);
    const opts = this.getRequestOptions(options);

    return (this.http.delete(fullUrl, opts) as Observable<T>).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrorOrFallback<T>('DELETE', url, error, undefined, opts))
    );
  }

  /**
   * Handle network/HTTP errors or automatically fallback to local mock data if the backend is offline.
   */
  private handleErrorOrFallback<T>(
    method: string,
    url: string,
    error: HttpErrorResponse,
    body?: any,
    options?: any
  ): Observable<T> {
    // If status is 0 or 504, it means the API server is offline or unreachable.
    // In this case, we fallback to the mock seed data.
    const isOffline = error.status === 0 || error.status === 504 || error.status === 404;

    if (isOffline) {
      const mockResult = this.getMockResponse(method, url, body, options);
      if (mockResult !== undefined) {
        console.warn(`[ApiClient] Backend server offline. Serving fallback mock data for: ${method} ${url}`);
        return of(mockResult as T);
      }
    }

    // Display error notification
    const errorMsg = error.error?.message || error.message || 'حدث خطأ في الاتصال بالخادم';
    this.notifications.error(errorMsg);

    return throwError(() => error);
  }

  /**
   * Evaluates the requested endpoint and returns mock seed data.
   */
  private getMockResponse(method: string, url: string, body?: any, options?: any): any {
    const cleanUrl = url.split('?')[0] || '';

    // COURSES
    if (cleanUrl.match(/\/api\/courses$/)) {
      if (method === 'GET') {
        const search = options?.params?.Search || options?.params?.get?.('Search');
        if (search) {
          return seed.MOCK_COURSES.filter(c => c.title.includes(search) || (c.description && c.description.includes(search)));
        }
        return seed.MOCK_COURSES;
      }
      if (method === 'POST') {
        return 'new_course_id';
      }
    }

    const courseDetailMatch = cleanUrl.match(/\/api\/courses\/([^/]+)$/);
    if (courseDetailMatch) {
      const id = courseDetailMatch[1];
      if (method === 'GET') {
        const found = seed.MOCK_COURSES.find(c => c.id === id);
        return found || seed.MOCK_COURSES[0];
      }
      if (method === 'PUT') {
        return { success: true };
      }
    }

    if (cleanUrl.match(/\/api\/courses\/([^/]+)\/publish$/)) {
      return { success: true };
    }

    // PRODUCTS
    if (cleanUrl.endsWith('/products')) {
      if (method === 'GET') {
        return seed.MOCK_PRODUCTS;
      }
      if (method === 'POST') {
        return 'new_product_id';
      }
    }

    const productDetailMatch = cleanUrl.match(/\/api\/products\/([^/]+)$/);
    if (productDetailMatch) {
      const id = productDetailMatch[1];
      if (method === 'GET') {
        const found = seed.MOCK_PRODUCTS.find(p => p.id === id || p.productId === id);
        return found || seed.MOCK_PRODUCTS[0];
      }
    }

    // ENROLLMENTS
    if (cleanUrl.match(/\/api\/enrollments$/)) {
      return seed.MOCK_ENROLLMENTS;
    }

    // RECOMMENDATIONS
    if (cleanUrl.match(/\/api\/ai\/recommendations\/courses$/)) {
      return seed.MOCK_RECOMMENDED_COURSES;
    }

    // CHAT & CONVERSATIONS
    if (cleanUrl.match(/\/api\/ai\/conversations$/)) {
      return seed.MOCK_CONVERSATIONS;
    }

    const convDetailMatch = cleanUrl.match(/\/api\/ai\/conversations\/([^/]+)$/);
    if (convDetailMatch) {
      const id = convDetailMatch[1];
      return {
        conversationId: id,
        title: 'محادثة تجريبية',
        messages: seed.MOCK_CHAT_MESSAGES
      };
    }

    if (cleanUrl.match(/\/api\/ai\/chat$/)) {
      return {
        conversationId: body?.conversationId || 'mock_conv_id',
        reply: 'هذا رد تجريبي تلقائي من المساعد الذكي لـ Femora (وضع عدم الاتصال). يمكنك طرح أي سؤال!'
      };
    }

    if (cleanUrl.match(/\/api\/ai\/interests$/)) {
      return { success: true };
    }

    // APPROVALS
    if (cleanUrl.match(/\/api\/approvals\/instructors\/apply$/)) {
      return 'approval_inst_id';
    }
    if (cleanUrl.match(/\/api\/approvals\/sellers\/apply$/)) {
      return 'approval_sell_id';
    }
    if (cleanUrl.match(/\/api\/approvals\/admin\/approvals\/pending$/)) {
      return seed.MOCK_APPROVALS;
    }
    const reviewMatch = cleanUrl.match(/\/api\/approvals\/admin\/approvals\/([^/]+)\/review$/);
    if (reviewMatch) {
      return { success: true };
    }

    // SUBSCRIPTIONS
    if (cleanUrl.match(/\/api\/subscriptions\/status$/)) {
      return seed.MOCK_SUBSCRIPTION;
    }

    // CART & ORDERS
    if (cleanUrl.match(/\/api\/cart\/([^/]+)$/) || cleanUrl.match(/\/api\/cart$/)) {
      return {
        id: 'cart_1',
        cartId: 'cart_1',
        items: [],
        total: 0
      };
    }

    if (cleanUrl.match(/\/api\/orders$/)) {
      if (method === 'GET') {
        return seed.MOCK_ORDERS;
      }
      if (method === 'POST') {
        return seed.MOCK_ORDERS[0];
      }
    }

    return undefined;
  }
}
