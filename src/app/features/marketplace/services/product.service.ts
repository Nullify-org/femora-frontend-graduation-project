import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { RecommendedProduct } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly api = inject(ApiClient);
  private readonly recommendationsBase = '/api/ai/recommendations/products';

  list(top = 20): Observable<RecommendedProduct[]> {
    return this.api
      .get<unknown>(this.recommendationsBase, {
        params: { top: String(top) },
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
