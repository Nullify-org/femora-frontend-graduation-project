import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChatService } from '../../../ai-assistant/services/chat.service';
import { RecommendedProduct } from '../../../../core/models/api.model';
import { formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

/**
 * "Recommended for you" strip for the marketplace catalog page.
 * Wires up GET /api/ai/recommendations/products, which previously had
 * no consumer anywhere in the frontend (the course-recommendation
 * equivalent already existed on the dashboard).
 */
@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recommended-products.html',
})
export class RecommendedProducts {
  private readonly chatApi = inject(ChatService);

  readonly products = signal<RecommendedProduct[]>([]);
  readonly isLoading = signal(true);
  readonly hasError = signal(false);

  readonly formatPrice = formatPrice;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      this.chatApi.recommendedProducts(8).subscribe({
        next: (products) => {
          this.products.set(products ?? []);
          this.isLoading.set(false);
        },
        error: () => {
          // Recommendations are a "nice to have" - never block the catalog page on this.
          this.hasError.set(true);
          this.isLoading.set(false);
        },
      });
    });
  }

  idOf(product: RecommendedProduct): string {
    return product.productId ?? product.id ?? '';
  }

  nameOf(product: RecommendedProduct): string {
    return product.name ?? product.title ?? '';
  }

  imageOf(product: RecommendedProduct): string | null {
    return product.primaryImageUrl ?? product.imageUrl ?? product.imageUrls?.[0] ?? null;
  }

  priceOf(product: RecommendedProduct): number | undefined {
    return product.minPrice ?? product.price;
  }

  categoryOf(product: RecommendedProduct): string {
    return product.categoryName ?? product.category ?? '';
  }
}
