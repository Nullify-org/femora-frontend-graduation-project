import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ApprovalService, PendingApproval } from '../../../../core/services/approval.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, Sidebar],
  templateUrl: './admin-products.html',
})
export class AdminProducts implements OnInit {
  private readonly approvalApi = inject(ApprovalService);
  private readonly notifications = inject(NotificationService);

  readonly pending = signal<PendingApproval[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly rejectTargetId = signal<string | null>(null);
  rejectNote = '';

  readonly productApprovals = computed(() =>
    this.pending().filter((item) => item.type === 'ProductApproval'),
  );

  ngOnInit(): void {
    runInBrowser(() => this.loadPending());
  }

  loadPending(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.approvalApi.getPending().subscribe({
      next: (items) => {
        this.pending.set(items ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        this.pending.set([]);
        this.loading.set(false);
        this.errorMessage.set(`تعذّر تحميل طلبات النشر (${err?.status ?? 'خطأ'})`);
        this.notifications.error('تعذّر تحميل طلبات النشر');
      },
    });
  }

  approve(id: string): void {
    this.approvalApi.review(id, { isApproved: true }).subscribe({
      next: () => {
        this.notifications.success('تمت الموافقة على المنتج');
        this.loadPending();
      },
      error: () => this.notifications.error('فشلت عملية الموافقة'),
    });
  }

  openReject(id: string): void {
    this.rejectTargetId.set(id);
    this.rejectNote = '';
  }

  confirmReject(): void {
    const id = this.rejectTargetId();
    if (!id) return;

    this.approvalApi.review(id, { isApproved: false, note: this.rejectNote || undefined }).subscribe({
      next: () => {
        this.notifications.success('تم رفض المنتج');
        this.rejectTargetId.set(null);
        this.loadPending();
      },
      error: () => this.notifications.error('فشلت عملية الرفض'),
    });
  }

  typeLabel(type: string): string {
    return type === 'ProductApproval' ? 'نشر منتج' : type;
  }

  itemTitle(item: PendingApproval): string {
    return item.title || item.shopName || item.requesterName || item.userId;
  }
}
