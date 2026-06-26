import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './cart.html',
})
export class Cart {
  private readonly cartApi = inject(CartService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  items: CartItem[] = [];
  total = 0;
  isLoading = true;
  errorMessage = '';

  readonly formatPrice = formatPrice;

  constructor() {
    runInBrowser(() => this.loadCart());
  }

  loadCart(): void {
    this.isLoading = true;
    const userId = this.auth.user()?.id;
    this.cartApi.getCart(userId).subscribe({
      next: (cart) => {
        this.items = cart.items ?? [];
        this.total =
          cart.total ??
          this.items.reduce(
            (sum, i) => sum + (i.lineTotal ?? (i.unitPrice ?? i.price ?? 0) * (i.quantity ?? 1)),
            0,
          );
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'تعذّر تحميل السلة';
        this.isLoading = false;
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

  itemName(item: CartItem): string {
    return item.productName ?? item.name ?? 'منتج';
  }

  itemPrice(item: CartItem): number {
    return item.lineTotal ?? (item.unitPrice ?? item.price ?? 0) * (item.quantity ?? 1);
  }
}
