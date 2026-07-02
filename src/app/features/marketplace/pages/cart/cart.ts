import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideMinus, LucidePlus, LucideTrash2, LucideShoppingBag, LucideArrowRight } from '@lucide/angular';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { CartItem } from '../../../../core/models/api.model';
import { formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar, LucideMinus, LucidePlus, LucideTrash2, LucideShoppingBag, LucideArrowRight],
  templateUrl: './cart.html',
})
export class Cart {
  private readonly cartApi = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  // Signals — Angular 21 is zoneless by default, so plain field mutations inside
  // .subscribe() callbacks would never trigger a re-render on their own.
  readonly items = signal<CartItem[]>([]);
  readonly total = signal(0);
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  /** cartItemId of the row currently being updated — disables its +/- buttons */
  readonly updatingItemId = signal<string | null>(null);

  readonly formatPrice = formatPrice;

  readonly itemCount = computed(() => this.items().reduce((sum, i) => sum + (i.quantity ?? 1), 0));

  constructor() {
    runInBrowser(() => this.loadCart());
  }

  loadCart(): void {
    this.isLoading.set(true);
    const userId = this.auth.user()?.id;
    this.cartApi.getCart(userId).subscribe({
      next: (cart) => {
        const items = cart.items ?? [];
        this.items.set(items);
        this.total.set(
          cart.total ??
            items.reduce(
              (sum, i) => sum + (i.lineTotal ?? (i.unitPrice ?? i.price ?? 0) * (i.quantity ?? 1)),
              0,
            ),
        );
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل السلة');
        this.isLoading.set(false);
      },
    });
  }

  removeItem(item: CartItem): void {
    const cartItemId = item.cartItemId ?? item.id;
    if (!cartItemId) return;

    this.cartApi.remove(cartItemId).subscribe({
      next: () => {
        this.notifications.success('تم حذف المنتج من السلة');
        this.loadCart();
      },
      error: () => this.notifications.error('تعذّر حذف المنتج'),
    });
  }

  increaseQuantity(item: CartItem): void {
    this.changeQuantity(item, (item.quantity ?? 1) + 1);
  }

  decreaseQuantity(item: CartItem): void {
    const current = item.quantity ?? 1;
    if (current <= 1) return; // use removeItem() to go below 1
    this.changeQuantity(item, current - 1);
  }

  private changeQuantity(item: CartItem, newQuantity: number): void {
    const cartItemId = item.cartItemId ?? item.id;
    if (!cartItemId || newQuantity < 1) return;

    const previousQuantity = item.quantity ?? 1;
    this.updatingItemId.set(cartItemId);

    // Optimistic update so the UI feels instant — rebuild the items array
    // (not mutate in place) so the `items` signal actually changes reference
    // and Angular knows to re-render.
    this.items.update((items) =>
      items.map((i) => ((i.cartItemId ?? i.id) === cartItemId ? { ...i, quantity: newQuantity } : i)),
    );
    this.recalculateTotal();

    this.cartApi.updateQuantity(cartItemId, newQuantity).subscribe({
      next: () => {
        this.updatingItemId.set(null);
        this.loadCart(); // resync with server (authoritative pricing/total)
      },
      error: () => {
        // roll back on failure
        this.items.update((items) =>
          items.map((i) => ((i.cartItemId ?? i.id) === cartItemId ? { ...i, quantity: previousQuantity } : i)),
        );
        this.recalculateTotal();
        this.updatingItemId.set(null);
        this.notifications.error('تعذّر تحديث الكمية');
      },
    });
  }

  private recalculateTotal(): void {
    this.total.set(
      this.items().reduce((sum, i) => sum + (i.unitPrice ?? i.price ?? 0) * (i.quantity ?? 1), 0),
    );
  }

  itemName(item: CartItem): string {
    return item.productName ?? item.name ?? 'منتج';
  }

  itemPrice(item: CartItem): number {
    // Always derive from unit price * quantity so the row updates instantly
    // when quantity changes, instead of showing a stale server-provided lineTotal.
    return (item.unitPrice ?? item.price ?? (item.lineTotal && item.quantity ? item.lineTotal / item.quantity : 0)) * (item.quantity ?? 1);
  }
}
