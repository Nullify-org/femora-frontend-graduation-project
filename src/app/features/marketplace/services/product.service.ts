import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RecommendedProduct } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly recommendationsBase = `${environment.apiUrl}/api/ai/recommendations/products`;

  constructor(private readonly http: HttpClient) {}

  list(top = 20): Observable<RecommendedProduct[]> {
    return this.http
      .get<unknown>(this.recommendationsBase, {
        params: { top: String(top) },
        withCredentials: true,
      })
      .pipe(map((res) => unwrapList<RecommendedProduct>(res).map((p) => this.normalizeProduct(p))));
  }

  getById(id: string, top = 50): Observable<RecommendedProduct | null> {
    return this.list(top).pipe(
      map((products) => {
        const match = products.find(
          (p) =>
            String(p.productId ?? p.id ?? '') === id ||
            String(p.productVariantId ?? '') === id,
        );
        return match ?? null;
      }),
    );
  }

  private normalizeProduct(product: RecommendedProduct): RecommendedProduct {
    const id = product.productId ?? product.id ?? product.productVariantId ?? '';
    return {
      ...product,
      id: String(id),
      productId: String(product.productId ?? product.id ?? id),
      name: product.name ?? product.title ?? 'منتج',
    };
  }
}
