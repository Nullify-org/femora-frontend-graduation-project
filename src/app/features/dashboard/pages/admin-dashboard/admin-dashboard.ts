import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ApprovalService, PendingApproval } from '../../../../core/services/approval.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { AdminStatsService, AdminStats } from '../../../../core/services/admin-stats.service';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { SwitchRole } from '../../widgets/switch-role/switch-role';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [Sidebar, FormsModule, DatePipe, DecimalPipe, RouterLink, SwitchRole],
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboard implements OnInit {
  private readonly approvalsApi  = inject(ApprovalService);
  private readonly notifications = inject(NotificationService);
  private readonly statsApi      = inject(AdminStatsService);

  readonly pending      = signal<PendingApproval[]>([]);
  readonly loading      = signal(true);
  readonly errorMessage = signal<string | null>(null);

  readonly stats        = signal<AdminStats | null>(null);
  readonly statsLoading = signal(true);

  rejectNote = '';
  readonly rejectTargetId = signal<string | null>(null);
  readonly profileTarget  = signal<PendingApproval | null>(null);

  readonly quickActions = [
    { icon: '👥', label: 'إدارة المستخدمين' },
    { icon: '📚', label: 'إدارة الدورات' },
    { icon: '🛍️', label: 'إدارة المنتجات' },
    { icon: '📦', label: 'إدارة الطلبات' },
    { icon: '📊', label: 'التقارير' },
    { icon: '⚙️', label: 'إعدادات المنصة' },
    { icon: '📝', label: 'إدارة المحتوى' },
    { icon: '🛠️', label: 'الدعم الفني' },
  ];

  ngOnInit(): void {
    runInBrowser(() => {
      this.loadPending();
      this.loadStats();
    });
  }

  // ── Stats ───────────────────────────────────────────────────────────────

  loadStats(): void {
    this.statsLoading.set(true);
    this.statsApi.get().subscribe({
      next: (data) => { this.stats.set(data); this.statsLoading.set(false); },
      error: ()     => { this.statsLoading.set(false); },
    });
  }

  traineePercent(): number {
    const s = this.stats();
    return s?.totalUsers ? Math.round((s.totalTrainees / s.totalUsers) * 100) : 0;
  }

  instructorPercent(): number {
    const s = this.stats();
    return s?.totalUsers ? Math.round((s.totalInstructors / s.totalUsers) * 100) : 0;
  }

  sellerPercent(): number {
    const s = this.stats();
    return s?.totalUsers ? Math.round((s.totalSellers / s.totalUsers) * 100) : 0;
  }

  dashArray(percent: number): string  { return `${percent} 100`; }
  dashOffset(offset: number): string  { return `${-offset}`; }

  // ── Approvals ───────────────────────────────────────────────────────────

  loadPending(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.approvalsApi.getPending().subscribe({
      next: (items) => { this.pending.set(items ?? []); this.loading.set(false); },
      error: (err)  => {
        this.pending.set([]);
        this.loading.set(false);
        this.errorMessage.set(`تعذّر تحميل الطلبات (${err?.status ?? 'خطأ'})`);
        this.notifications.error('تعذّر تحميل طلبات الموافقة');
      },
    });
  }

  approve(id: string): void {
    this.approvalsApi.review(id, { isApproved: true }).subscribe({
      next: () => { this.notifications.success('تمت الموافقة بنجاح'); this.loadPending(); this.loadStats(); },
      error: () => this.notifications.error('فشلت عملية الموافقة'),
    });
  }

  openReject(id: string): void { this.rejectTargetId.set(id); this.rejectNote = ''; }

  confirmReject(): void {
    const id = this.rejectTargetId();
    if (!id) return;
    this.approvalsApi.review(id, { isApproved: false, note: this.rejectNote || undefined }).subscribe({
      next: () => {
        this.notifications.success('تم رفض الطلب');
        this.rejectTargetId.set(null);
        this.loadPending();
        this.loadStats();
      },
      error: () => this.notifications.error('فشلت عملية الرفض'),
    });
  }

  openProfile(item: PendingApproval): void  { this.profileTarget.set(item); }
  approveFromProfile(): void { const id = this.profileTarget()?.id; if (id) { this.profileTarget.set(null); this.approve(id); } }
  rejectFromProfile(): void  { const id = this.profileTarget()?.id; if (id) { this.profileTarget.set(null); this.openReject(id); } }

  typeLabel(type: string): string {
    const labels: Record<string, string> = {
      Instructor: 'تحقق مدربة', Seller: 'تحقق بائعة',
      InstructorVerification: 'تحقق مدربة', SellerVerification: 'تحقق بائعة',
      CourseApproval: 'موافقة دورة', ProductApproval: 'موافقة منتج',
    };
    return labels[type] ?? type;
  }

  isInstructor = (t: string) => t === 'Instructor' || t === 'InstructorVerification';
  isSeller     = (t: string) => t === 'Seller'     || t === 'SellerVerification';
  isCourse     = (t: string) => t === 'CourseApproval';
  isProduct    = (t: string) => t === 'ProductApproval';
}