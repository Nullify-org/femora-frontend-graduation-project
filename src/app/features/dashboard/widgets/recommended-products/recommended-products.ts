import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../../shared/components/card/card';
import { ProductService } from '../../../marketplace/services/product.service';
import { RecommendedProduct } from '../../../../core/models/api.model';
import { formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [RouterLink, Card],
  templateUrl: './recommended-products.html',
})
export class RecommendedProducts {
  private readonly productsApi = inject(ProductService);

  readonly products = signal<RecommendedProduct[]>([]);
  readonly isLoading = signal(true);

  readonly formatPrice = formatPrice;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      this.productsApi.list(4).subscribe({
        next: (products) => {
          this.products.set(products);
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
    });
  }
}
