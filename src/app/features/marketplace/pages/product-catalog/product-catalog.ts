import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { RecommendedProducts } from '../../widgets/recommended-products/recommended-products';
import { ProductService } from '../../services/product.service';
import { ProductCategory, RecommendedProduct } from '../../../../core/models/api.model';
import { formatPrice, productEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

const PAGE_SIZE = 12;

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar, RecommendedProducts],
  templateUrl: './product-catalog.html',
})
export class ProductCatalog {
  private readonly productsApi = inject(ProductService);

  readonly products = signal<RecommendedProduct[]>([]);
  readonly currentPage = signal(1);
  readonly totalCount = signal(0);
  readonly pageSize = PAGE_SIZE;
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  readonly failedImageIds = signal<Set<string>>(new Set());

  readonly categories = signal<ProductCategory[]>([]);
  readonly selectedCategoryId = signal<string>('');
  readonly searchTerm = signal<string>('');
  private searchDebounceHandle: ReturnType<typeof setTimeout> | undefined;

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.totalCount() / this.pageSize)));

  readonly pageWindow = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const windowSize = 5;
    let start = Math.max(1, current - Math.floor(windowSize / 2));
    const end = Math.min(total, start + windowSize - 1);
    start = Math.max(1, end - windowSize + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  readonly formatPrice = formatPrice;
  readonly productEmoji = productEmoji;

  constructor() {
    runInBrowser(() => {
      this.loadCategories();
      this.loadPage(1);
    });
  }

  loadCategories(): void {
    this.productsApi.getCategories().subscribe({
      next: (categories) => this.categories.set(categories ?? []),
      error: () => this.categories.set([]),
    });
  }

  onCategoryChange(categoryId: string): void {
    this.selectedCategoryId.set(categoryId);
    this.loadPage(1);
  }

  onSearchInput(term: string): void {
    this.searchTerm.set(term);
    if (this.searchDebounceHandle) clearTimeout(this.searchDebounceHandle);
    this.searchDebounceHandle = setTimeout(() => this.loadPage(1), 350);
  }

  loadPage(page: number): void {
    if (page < 1) return;

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.productsApi
      .browse(page, this.pageSize, this.searchTerm().trim() || undefined, this.selectedCategoryId() || undefined)
      .subscribe({
      next: (result) => {
        this.products.set(result.items);
        this.totalCount.set(result.totalCount);
        this.currentPage.set(result.pageNumber);
        this.isLoading.set(false);
        if (page !== 1) window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل المنتجات');
        this.isLoading.set(false);
      },
    });
  }

  goToPage(page: number): void {
    if (page === this.currentPage()) return;
    this.loadPage(page);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) this.loadPage(this.currentPage() + 1);
  }

  previousPage(): void {
    if (this.currentPage() > 1) this.loadPage(this.currentPage() - 1);
  }

  onImageError(productId: string | undefined): void {
    if (!productId) return;
    this.failedImageIds.update((set) => new Set(set).add(productId));
  }

  imageFailed(productId: string | undefined): boolean {
    return !!productId && this.failedImageIds().has(productId);
  }

  productImages(product: RecommendedProduct): string[] {
    return (product.imageUrls?.length ? product.imageUrls : product.imageUrl ? [product.imageUrl] : []).slice(0, 3);
  }

  primaryImage(product: RecommendedProduct): string | null {
    return this.productImages(product)[0] ?? null;
  }
}