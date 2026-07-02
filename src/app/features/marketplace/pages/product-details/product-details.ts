import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideMinus,
  LucidePlus,
  LucideShoppingBag,
  LucideBadgeCheck,
  LucideTag,
  LucideCircleCheck,
  LucideLoader2,
} from '@lucide/angular';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { RecommendedProduct } from '../../../../core/models/api.model';
import { formatPrice, productEmoji, displayLabel } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Sidebar,
    LucideArrowRight,
    LucideMinus,
    LucidePlus,
    LucideShoppingBag,
    LucideBadgeCheck,
    LucideTag,
    LucideCircleCheck,
    LucideLoader2,
  ],
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productsApi = inject(ProductService);
  private readonly cartApi = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  // Angular 21 is zoneless by default — plain field assignments inside
  // .subscribe() callbacks do NOT trigger a re-render on their own.
  // Signals are the supported way to get automatic UI updates here.

  /** The row originally resolved from the URL id — used as a fallback before variants load. */
  readonly product = signal<RecommendedProduct | null>(null);
  /** Every sibling variant sharing the same productId (color/size/etc options). Length 1 = no real choice to make. */
  readonly variants = signal<RecommendedProduct[]>([]);
  /** User's picks when variants expose structured `attributes` (e.g. { Color: 'Red' }). */
  readonly selectedAttributes = signal<Record<string, string>>({});
  /** User's pick when variants do NOT expose structured attributes — just a flat list to choose from. */
  readonly selectedVariantId = signal<string | null>(null);

  readonly isLoading = signal(true);
  readonly isAdding = signal(false);
  readonly errorMessage = signal('');
  readonly quantity = signal(1);
  readonly imageFailed = signal(false);

  readonly formatPrice = formatPrice;
  readonly productEmoji = productEmoji;

  /** Union of attribute keys (e.g. ["Color", "Size"]) across all variants, if the backend provides them. */
  readonly attributeKeys = computed(() => {
    const keys = new Set<string>();
    for (const v of this.variants()) {
      if (v.attributes) Object.keys(v.attributes).forEach((k) => keys.add(k));
    }
    return Array.from(keys);
  });

  readonly hasStructuredAttributes = computed(() => this.attributeKeys().length > 0);

  /** Distinct available values per attribute key, e.g. { Color: ['Red','Blue'], Size: ['S','M'] }. */
  readonly attributeOptions = computed(() => {
    const map: Record<string, string[]> = {};
    for (const key of this.attributeKeys()) {
      const values = new Set<string>();
      for (const v of this.variants()) {
        const val = v.attributes?.[key];
        if (val) values.add(val);
      }
      map[key] = Array.from(values);
    }
    return map;
  });

  /** The variant that fully matches the current selection, or null if the pick is incomplete/invalid. */
  readonly selectedVariant = computed<RecommendedProduct | null>(() => {
    const variants = this.variants();
    if (variants.length === 0) return this.product();
    if (variants.length === 1) return variants[0];

    if (this.hasStructuredAttributes()) {
      const selected = this.selectedAttributes();
      const keys = this.attributeKeys();
      if (keys.some((k) => !selected[k])) return null; // selection incomplete
      return variants.find((v) => keys.every((k) => v.attributes?.[k] === selected[k])) ?? null;
    }

    const id = this.selectedVariantId();
    if (!id) return null;
    return variants.find((v) => (v.productVariantId ?? v.id) === id) ?? null;
  });

  /** What the page actually displays (price/image/stock) — the selected variant, falling back to the base product. */
  readonly displayProduct = computed(() => this.selectedVariant() ?? this.product());

  readonly isOutOfStock = computed(() => {
    const stock = this.selectedVariant()?.stock;
    return stock !== undefined && stock <= 0;
  });

  /** Never render a raw database ID (e.g. a categoryId GUID) as if it were a category name. */
  readonly categoryLabel = computed(() => displayLabel(this.displayProduct()?.category));

  readonly stockLabel = computed(() => {
    const stock = this.selectedVariant()?.stock;
    if (stock === undefined) return null;
    if (stock <= 0) return 'غير متوفر';
    if (stock <= 5) return `متبقّى ${stock} فقط`;
    return 'متوفر';
  });

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id) {
        this.errorMessage.set('معرّف المنتج غير صالح');
        this.isLoading.set(false);
        return;
      }

      // Single call to GET /api/products/{id} — gets both the display fallback and the
      // real variant list in one round trip (was previously two separate list scans).
      this.productsApi.getDetails(id).subscribe({
        next: (details) => {
          this.isLoading.set(false);

          if (!details) {
            this.errorMessage.set('المنتج غير موجود');
            return;
          }

          const variants: RecommendedProduct[] = (details.variants ?? []).map((v) => ({
            id: v.id,
            productId: details.id,
            productVariantId: v.id,
            name: details.name,
            price: v.price,
            category: details.categoryId ?? undefined,
            imageUrl: details.images?.[0] ?? undefined,
            variantLabel: v.name,
            stock: v.stockQuantity,
          }));

          const fallback: RecommendedProduct = {
            id: details.id,
            productId: details.id,
            name: details.name,
            category: details.categoryId ?? undefined,
            imageUrl: details.images?.[0] ?? undefined,
            price: variants.length ? Math.min(...variants.map((v) => v.price ?? 0)) : undefined,
          };

          this.product.set(fallback);

          if (variants.length === 0) {
            this.errorMessage.set('هذا المنتج غير متاح حالياً (لا توجد خيارات شراء)');
            return;
          }

          this.variants.set(variants);
          if (variants.length === 1) {
            this.selectedVariantId.set(variants[0].productVariantId ?? variants[0].id ?? null);
          }
        },
        error: () => {
          this.errorMessage.set('تعذّر تحميل تفاصيل المنتج');
          this.isLoading.set(false);
        },
      });
    });
  }

  selectAttribute(key: string, value: string): void {
    this.selectedAttributes.update((cur) => ({ ...cur, [key]: value }));
  }

  isAttributeValueSelected(key: string, value: string): boolean {
    return this.selectedAttributes()[key] === value;
  }

  /** A value is pickable if some variant matches it plus every other attribute already chosen. */
  isAttributeValueAvailable(key: string, value: string): boolean {
    const others = { ...this.selectedAttributes() };
    delete others[key];
    return this.variants().some(
      (v) => v.attributes?.[key] === value && Object.entries(others).every(([k, val]) => v.attributes?.[k] === val),
    );
  }

  selectVariant(variantId: string | undefined): void {
    if (variantId) this.selectedVariantId.set(variantId);
  }

  variantLabel(variant: RecommendedProduct): string {
    return variant.variantLabel ?? formatPrice(variant.price ?? 0);
  }

  increaseQuantity(): void {
    const stock = this.selectedVariant()?.stock;
    this.quantity.update((q) => (stock !== undefined ? Math.min(q + 1, Math.max(stock, 1)) : q + 1));
  }

  decreaseQuantity(): void {
    this.quantity.update((q) => (q > 1 ? q - 1 : q));
  }

  onImageError(): void {
    this.imageFailed.set(true);
  }

  addToCart(): void {
    const variant = this.selectedVariant();
    if (!variant) {
      this.errorMessage.set('يرجى اختيار جميع الخصائص أولاً');
      return;
    }

    const user = this.auth.user();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }

    const variantId = variant.productVariantId ?? variant.productId ?? variant.id;
    if (!variantId) {
      this.errorMessage.set('لا يمكن إضافة هذا المنتج للسلة');
      return;
    }

    this.isAdding.set(true);
    this.cartApi.add(user.id, variantId, this.quantity()).subscribe({
      next: () => {
        this.isAdding.set(false);
        this.notifications.success('تمت الإضافة إلى السلة');
        this.router.navigate(['/marketplace/cart']);
      },
      error: (err) => {
        this.isAdding.set(false);
        this.errorMessage.set(err?.error?.title ?? err?.error?.detail ?? 'تعذّر الإضافة للسلة');
      },
    });
  }
}
