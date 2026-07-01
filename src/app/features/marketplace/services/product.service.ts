import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { RecommendedProduct } from '../../../core/models/api.model';
import { unwrapList } from '../../../core/utils/api-response.util';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly api = inject(ApiClient);
  // Real, public catalog endpoint (ProductsController.BrowseProducts) — no auth, no AI call.
  private readonly base = '/api/products';

  list(pageSize = 20, search?: string): Observable<RecommendedProduct[]> {
    const params: Record<string, string> = { PageNumber: '1', PageSize: String(pageSize) };
    if (search) params['Search'] = search;

    return this.api
      .get<unknown>(this.base, { params })
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

  private normalizeProduct(product: RecommendedProduct & { minPrice?: number }): RecommendedProduct {
    const id = product.productId ?? product.id ?? product.productVariantId ?? '';
    return {
      ...product,
      id: String(id),
      productId: String(product.productId ?? product.id ?? id),
      name: product.name ?? product.title ?? 'منتج',
      price: product.price ?? product.minPrice,
    };
  }
}