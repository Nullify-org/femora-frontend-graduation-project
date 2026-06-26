import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApprovalService } from '../../../../core/services/approval.service';
import { OrderService } from '../../../marketplace/services/order.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [Sidebar, FormsModule],
  templateUrl: './seller-dashboard.html',
})
export class SellerDashboard implements OnInit {
  readonly auth = inject(AuthService);
  private readonly approvalsApi = inject(ApprovalService);
  private readonly ordersApi = inject(OrderService);
  private readonly notifications = inject(NotificationService);

  readonly showApply = signal(false);
  readonly orders = signal<unknown[]>([]);
  applyShopName = '';
  applyDescription = '';

  ngOnInit(): void {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;
      if (userId) {
        this.ordersApi.myOrders(userId).subscribe({
          next: (items) => this.orders.set(items ?? []),
          error: () => this.orders.set([]),
        });
      }
    });
  }

  applySeller(): void {
    const shopName = this.applyShopName.trim();
    if (!shopName) {
      this.notifications.error('اسم المتجر مطلوب');
      return;
    }
    this.approvalsApi.applySeller(shopName, this.applyDescription || undefined).subscribe({
      next: () => {
        this.notifications.success('تم إرسال طلبك — قيد المراجعة');
        this.showApply.set(false);
      },
      error: () => this.notifications.error('فشل إرسال الطلب'),
    });
  }
}
