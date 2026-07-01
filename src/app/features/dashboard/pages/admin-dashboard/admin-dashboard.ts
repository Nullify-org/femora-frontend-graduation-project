import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ApprovalService, PendingApproval } from '../../../../core/services/approval.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { SwitchRole } from '../../widgets/switch-role/switch-role';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [Sidebar, FormsModule, DatePipe, RouterLink, SwitchRole],
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboard implements OnInit {
  readonly approvalsApi  = inject(ApprovalService);
  private readonly notifications = inject(NotificationService);

  readonly pending        = signal<PendingApproval[]>([]);
  readonly loading        = signal(true);
  readonly errorMessage   = signal<string | null>(null);
  readonly rejectTargetId = signal<string | null>(null);
  readonly profileTarget  = signal<PendingApproval | null>(null);

  rejectNote = '';

  ngOnInit(): void {
    runInBrowser(() => this.loadPending());
  }

  loadPending(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.approvalsApi.getPending().subscribe({
      next: (items) => { this.pending.set(items ?? []); this.loading.set(false); },
      error: (err) => {
        this.pending.set([]);
        this.loading.set(false);
        this.errorMessage.set(`تعذّر تحميل الطلبات (${err?.status ?? 'خطأ'})`);
        this.notifications.error('تعذّر تحميل طلبات الموافقة');
      },
    });
  }

  // ── View ──────────────────────────────────────────────────────────────────
  openProfile(item: PendingApproval): void { this.profileTarget.set(item); }

  approveFromProfile(): void {
    const item = this.profileTarget();
    if (!item) return;
    this.profileTarget.set(null);
    this.approve(item.id);
  }

  rejectFromProfile(): void {
    const item = this.profileTarget();
    if (!item) return;
    this.profileTarget.set(null);
    this.openReject(item.id);
  }

  // ── Approve / Reject ──────────────────────────────────────────────────────
  approve(id: string): void {
    this.approvalsApi.review(id, { isApproved: true }).subscribe({
      next: () => { this.notifications.success('تمت الموافقة بنجاح'); this.loadPending(); },
      error: () => this.notifications.error('فشلت عملية الموافقة'),
    });
  }

  openReject(id: string): void { this.rejectTargetId.set(id); this.rejectNote = ''; }

  confirmReject(): void {
    const id = this.rejectTargetId();
    if (!id) return;
    this.approvalsApi.review(id, { isApproved: false, note: this.rejectNote || undefined }).subscribe({
      next: () => { this.notifications.success('تم رفض الطلب'); this.rejectTargetId.set(null); this.loadPending(); },
      error: () => this.notifications.error('فشلت عملية الرفض'),
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  isInstructor(type: string): boolean { return type === 'InstructorVerification'; }
  isSeller(type: string): boolean     { return type === 'SellerVerification'; }
  isCourse(type: string): boolean     { return type === 'CourseApproval'; }
  isProduct(type: string): boolean    { return type === 'ProductApproval'; }

  typeLabel(type: string): string {
    const labels: Record<string, string> = {
      Instructor: 'تحقق مدربة',
      Seller: 'تحقق بائعة',
      InstructorVerification: 'تحقق مدربة',
      SellerVerification: 'تحقق بائعة',
      CourseApproval: 'موافقة دورة',
      ProductApproval: 'موافقة منتج',
    };
    return labels[type] ?? type;
  }

  getUserName(item: PendingApproval): string {
    return this.approvalsApi.getDisplayName(item);
  }

  getCreatedAt(item: PendingApproval): string | null {
    return item.dateCreated ?? item.createdAt ?? null;
  }
}
