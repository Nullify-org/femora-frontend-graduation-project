import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Order } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/orders';

  placeOrder(userId: string): Observable<unknown> {
    return this.api.post(this.base, { userId });
  }

  myOrders(userId?: string): Observable<Order[]> {
    const params = userId ? { UserId: userId } : undefined;
    return this.api
      .get<unknown>(`${this.base}/my-orders`, { params })
      .pipe(map((res) => unwrapList<Order>(res)));
  }
}
