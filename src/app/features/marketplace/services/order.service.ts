import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Order } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly base = `${environment.apiUrl}/api/orders`;

  constructor(private readonly http: HttpClient) {}

  placeOrder(userId: string): Observable<unknown> {
    return this.http.post(this.base, { userId }, { withCredentials: true });
  }

  myOrders(userId?: string): Observable<Order[]> {
    const params = userId ? { UserId: userId } : undefined;
    return this.http
      .get<unknown>(`${this.base}/my-orders`, { params, withCredentials: true })
      .pipe(map((res) => unwrapList<Order>(res)));
  }
}
