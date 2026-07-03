import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AdminService, AdminUser } from '../../../../core/services/admin.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

const PAGE_SIZE = 20;

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, Sidebar],
  templateUrl: './admin-users.html',
})
export class AdminUsers {
  private readonly adminApi = inject(AdminService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  readonly users = signal<AdminUser[]>([]);
  readonly currentPage = signal(1);
  readonly totalCount = signal(0);
  readonly pageSize = PAGE_SIZE;
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  /** userId currently being activated/deactivated — disables its own toggle only */
  readonly updatingUserId = signal<string | null>(null);

  search = '';
  roleFilter = '';

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.totalCount() / this.pageSize)));
  readonly myUserId = computed(() => this.auth.user()?.id);

  constructor() {
    runInBrowser(() => this.load(1));
  }

  load(page: number): void {
    if (page < 1) return;
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.adminApi.getUsers(page, this.pageSize, this.search || undefined, this.roleFilter || undefined).subscribe({
      next: (result) => {
        this.users.set(result.items);
        this.totalCount.set(result.totalCount);
        this.currentPage.set(result.pageNumber);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل المستخدمين');
        this.isLoading.set(false);
      },
    });
  }

  onSearch(): void {
    this.load(1);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) this.load(this.currentPage() + 1);
  }

  previousPage(): void {
    if (this.currentPage() > 1) this.load(this.currentPage() - 1);
  }

  toggleActive(user: AdminUser): void {
    if (user.id === this.myUserId()) {
      this.notifications.error('لا يمكنك إيقاف حسابك الخاص');
      return;
    }

    const nextState = !user.isActive;
    this.updatingUserId.set(user.id);

    this.adminApi.setUserActive(user.id, nextState).subscribe({
      next: () => {
        this.users.update((list) =>
          list.map((u) => (u.id === user.id ? { ...u, isActive: nextState } : u)),
        );
        this.updatingUserId.set(null);
        this.notifications.success(nextState ? 'تم تفعيل الحساب' : 'تم إيقاف الحساب');
      },
      error: () => {
        this.updatingUserId.set(null);
        this.notifications.error('تعذّر تحديث حالة الحساب');
      },
    });
  }

  roleLabel(role: string): string {
    const labels: Record<string, string> = {
      Admin: 'مدير',
      Instructor: 'مدربة',
      Seller: 'بائعة',
      Trainee: 'متدربة',
    };
    return labels[role] ?? role;
  }
}
