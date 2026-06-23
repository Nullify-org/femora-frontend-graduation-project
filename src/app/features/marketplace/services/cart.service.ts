import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Cart, CartItem } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly base = `${environment.apiUrl}/api/cart`;

  constructor(private readonly http: HttpClient) {}

  getCart(userId?: string): Observable<Cart> {
    const params = userId ? { UserId: userId } : undefined;
    return this.http.get<Cart>(this.base, { params, withCredentials: true }).pipe(
      map((cart) => ({
        ...cart,
        items: cart.items ?? unwrapList<CartItem>(cart),
      })),
    );
  }

  add(userId: string, productVariantId: string, quantity = 1): Observable<unknown> {
    return this.http.post(
      `${this.base}/add`,
      { userId, productVariantId, quantity },
      { withCredentials: true },
    );
  }

  remove(cartItemId: string): Observable<unknown> {
    return this.http.delete(`${this.base}/remove`, {
      params: { CartItemId: cartItemId },
      withCredentials: true,
    });
  }
}
