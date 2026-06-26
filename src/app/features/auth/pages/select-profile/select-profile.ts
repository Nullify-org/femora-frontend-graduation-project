import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { AvailableProfile, ProfileType } from '../../../../core/models/user.model';

@Component({
  selector: 'app-select-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-profile.html',
  styleUrl: './select-profile.css',
})
export class SelectProfile implements OnInit {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  readonly profiles = this.auth.pendingProfiles;
  readonly selectedType = signal<ProfileType | null>(null);
  readonly isLoading = signal(false);

  readonly profileMeta: Record<string, { emoji: string; description: string }> = {
    Trainee:    { emoji: '🎓', description: 'تعلّمي الحرف اليدوية واحصلي على شهادات معتمدة' },
    Instructor: { emoji: '👩‍🏫', description: 'شاركي خبرتك وأنشئي دورات تدريبية مميزة' },
    Seller:     { emoji: '🏪', description: 'اعرضي منتجاتك اليدوية وابدئي البيع' },
    Admin:      { emoji: '⚙️', description: 'إدارة المنصة والمحتوى' },
  };

  ngOnInit(): void {
    // If no pending profiles, navigate away
    if (this.profiles().length === 0) {
      this.auth.handlePostAuthNavigation();
    }
  }

  select(type: ProfileType): void {
    this.selectedType.set(type);
  }

  isSelected(type: ProfileType): boolean {
    return this.selectedType() === type;
  }

  getMeta(type: string) {
    return this.profileMeta[type] ?? { emoji: '✿', description: '' };
  }

  getLabel(profile: AvailableProfile): string {
    return profile.displayName ?? profile.label ?? profile.type;
  }

  confirm(): void {
    const sel = this.selectedType();
    if (!sel || this.isLoading()) return;

    this.isLoading.set(true);
    this.auth.selectProfile(sel).subscribe({
      next: () => {
        this.isLoading.set(false);
        const route = this.auth.getDashboardRoute();
        this.router.navigate([route]);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.selectedType.set(null);
        const msg = err?.error?.title ?? err?.error?.message ?? 'تعذّر اختيار الملف الشخصي';
        this.notifications.error(msg);
      },
    });
  }
}
