import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { PagedResult, ProductCategory, ProductDetailsDto, RecommendedProduct } from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly api = inject(ApiClient);
  // Real, public catalog endpoint (ProductsController.BrowseProducts) — no auth, no AI call.
  private readonly base = '/api/products';

  /**
   * Paged product browse — mirrors BrowseProductsQuery on the backend exactly
   * (PageNumber/PageSize/Search/CategoryId in, PagedResult<ProductSummaryDto> out).
   * Returns the full paging envelope so the UI can render page controls.
   */
  browse(pageNumber = 1, pageSize = 12, search?: string, categoryId?: string): Observable<PagedResult<RecommendedProduct>> {
    const params: Record<string, string> = {
      PageNumber: String(pageNumber),
      PageSize: String(pageSize),
    };
    if (search) params['Search'] = search;
    if (categoryId) params['CategoryId'] = categoryId;

    return this.api.get<PagedResult<RecommendedProduct>>(this.base, { params }).pipe(
      map((res) => ({
        ...res,
        items: (res.items ?? []).map((p) => this.normalizeProduct(p)),
      })),
    );
  }

  /** Convenience wrapper for callers that just want a flat list (e.g. "related products"). */
  list(pageSize = 20, search?: string): Observable<RecommendedProduct[]> {
    return this.browse(1, pageSize, search).pipe(map((res) => res.items));
  }

  /** Every product category (id, name, product count) — powers the catalog's category filter. */
  getCategories(): Observable<ProductCategory[]> {
    return this.api.get<ProductCategory[]>('/api/product-categories');
  }

  /**
   * Real product details — GET /api/products/{id} (GetProductDetailsQuery). Returns the
   * product's actual variants (id, name, price, stockQuantity), not a guess reconstructed
   * from the paged browse list.
   */
  getDetails(id: string): Observable<ProductDetailsDto> {
    return this.api.get<ProductDetailsDto>(`${this.base}/${id}`);
  }

  /**
   * Back-compat shape for the product-details page: the "primary" row (first variant,
   * min-priced) normalized into the same RecommendedProduct shape the rest of the app uses.
   */
  getById(id: string): Observable<RecommendedProduct | null> {
    return this.getDetails(id).pipe(
      map((details) => {
        if (!details) return null;
        const cheapest = [...details.variants].sort((a, b) => a.price - b.price)[0];
        return this.normalizeProduct({
          id: details.id,
          productId: details.id,
          productVariantId: cheapest?.id,
          name: details.name,
          price: cheapest?.price,
          category: details.categoryId ?? undefined,
          imageUrl: details.images?.[0] ?? undefined,
          imageUrls: details.images?.slice(0, 3) ?? [],
        });
      }),
    );
  }

  /** Every pickable variant for a product, straight from the real backend contract. */
  getVariantsForProduct(productId: string): Observable<RecommendedProduct[]> {
    return this.getDetails(productId).pipe(
      map((details) =>
        (details?.variants ?? []).map((v) =>
          this.normalizeProduct({
            id: v.id,
            productId: details.id,
            productVariantId: v.id,
            name: details.name,
            price: v.price,
            category: details.categoryId ?? undefined,
            imageUrl: details.images?.[0] ?? undefined,
            imageUrls: details.images?.slice(0, 3) ?? [],
            variantLabel: v.name,
            stock: v.stockQuantity,
          }),
        ),
      ),
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
