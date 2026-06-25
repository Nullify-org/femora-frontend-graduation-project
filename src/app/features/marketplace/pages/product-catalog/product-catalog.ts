import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ProductService } from '../../services/product.service';
import { RecommendedProduct } from '../../../../core/models/api.model';
import { formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './product-catalog.html',
})
export class ProductCatalog {
  private readonly productsApi = inject(ProductService);

  products: RecommendedProduct[] = [];
  isLoading = true;
  errorMessage = '';

  readonly formatPrice = formatPrice;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      this.productsApi.list(24).subscribe({
        next: (products) => {
          this.products = products;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل المنتجات';
          this.isLoading = false;
        },
      });
    });
  }
}
