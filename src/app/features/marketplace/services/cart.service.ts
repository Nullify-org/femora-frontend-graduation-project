import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Cart, CartItem } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/cart';

  getCart(userId?: string): Observable<Cart> {
    const params = userId ? { UserId: userId } : undefined;
    return this.api.get<Cart>(this.base, { params }).pipe(
      map((cart) => ({
        ...cart,
        items: cart.items ?? unwrapList<CartItem>(cart),
      })),
    );
  }

  add(userId: string, productVariantId: string, quantity = 1): Observable<unknown> {
    return this.api.post(
      `${this.base}/add`,
      { userId, productVariantId, quantity },
    );
  }

  remove(cartItemId: string): Observable<unknown> {
    return this.api.delete(`${this.base}/remove`, {
      params: { CartItemId: cartItemId },
    });
  }
}
