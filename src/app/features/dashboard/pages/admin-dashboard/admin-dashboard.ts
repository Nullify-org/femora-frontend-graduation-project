import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ApprovalService, PendingApproval } from '../../../../core/services/approval.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [Sidebar, FormsModule, DatePipe, RouterLink],
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboard implements OnInit {
  private readonly approvalsApi  = inject(ApprovalService);
  private readonly notifications = inject(NotificationService);

  readonly pending       = signal<PendingApproval[]>([]);
  readonly loading       = signal(true);
  readonly errorMessage  = signal<string | null>(null);
  rejectNote = '';
  readonly rejectTargetId = signal<string | null>(null);

  ngOnInit(): void {
    runInBrowser(() => this.loadPending());
  }

  loadPending(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.approvalsApi.getPending().subscribe({
      next: (items) => {
        this.pending.set(items ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('[AdminDashboard] getPending error:', err);
        this.pending.set([]);
        this.loading.set(false);
        this.errorMessage.set(`تعذّر تحميل الطلبات (${err?.status ?? 'خطأ'})`);
        this.notifications.error('تعذّر تحميل طلبات الموافقة');
      },
    });
  }

  approve(id: string): void {
    this.approvalsApi.review(id, { isApproved: true }).subscribe({
      next: () => {
        this.notifications.success('تمت الموافقة بنجاح');
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
    this.approvalsApi.review(id, { isApproved: false, note: this.rejectNote || undefined }).subscribe({
      next: () => {
        this.notifications.success('تم رفض الطلب');
        this.rejectTargetId.set(null);
        this.loadPending();
      },
      error: () => this.notifications.error('فشلت عملية الرفض'),
    });
  }

  typeLabel(type: string): string {
    const labels: Record<string, string> = {
      InstructorVerification: 'تحقق مدربة',
      SellerVerification:     'تحقق بائعة',
      CourseApproval:         'موافقة دورة',
      ProductApproval:        'موافقة منتج',
    };
    return labels[type] ?? type;
  }
}
