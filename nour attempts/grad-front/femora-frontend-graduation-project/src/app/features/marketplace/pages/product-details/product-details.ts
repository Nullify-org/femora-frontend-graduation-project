import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { RecommendedProduct } from '../../../../core/models/api.model';
import { formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productsApi = inject(ProductService);
  private readonly cartApi = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  product: RecommendedProduct | null = null;
  isLoading = true;
  isAdding = false;
  errorMessage = '';

  readonly formatPrice = formatPrice;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id) {
        this.errorMessage = 'معرّف المنتج غير صالح';
        this.isLoading = false;
        return;
      }

      this.productsApi.getById(id).subscribe({
        next: (product) => {
          this.product = product;
          this.isLoading = false;
          if (!product) this.errorMessage = 'المنتج غير موجود';
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل تفاصيل المنتج';
          this.isLoading = false;
        },
      });
    });
  }

  addToCart(): void {
    if (!this.product) return;

    const user = this.auth.user();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    const variantId = this.product.productVariantId ?? this.product.productId ?? this.product.id;
    if (!variantId) {
      this.errorMessage = 'لا يمكن إضافة هذا المنتج للسلة';
      return;
    }

    this.isAdding = true;
    this.cartApi.add(user.id, variantId).subscribe({
      next: () => {
        this.isAdding = false;
        this.notifications.success('تمت الإضافة إلى السلة');
        this.router.navigate(['/marketplace/cart']);
      },
      error: (err) => {
        this.isAdding = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? 'تعذّر الإضافة للسلة';
      },
    });
  }
}
