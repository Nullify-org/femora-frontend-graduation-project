import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { AvailableProfile, ProfileType } from '../../../../core/models/user.model';

interface ProfileCard {
  profile: AvailableProfile;
  emoji: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-select-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-profile.html',
  styleUrl: './select-profile.css',
})
export class SelectProfile {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  readonly profiles = this.auth.pendingProfiles();
  readonly selected = signal<ProfileType | null>(null);
  readonly isLoading = signal(false);

  readonly profileCards = computed<ProfileCard[]>(() =>
    this.profiles.map(p => ({
      profile: p,
      emoji: this.emojiFor(p.name),
      description: p.description || this.defaultDescription(p.name),
      gradient: this.gradientFor(p.name),
    }))
  );

  select(profile: AvailableProfile): void {
    this.selected.set(profile.name);
  }

  isSelected(profile: AvailableProfile): boolean {
    return this.selected() === profile.name;
  }

  confirm(): void {
    const sel = this.selected();
    if (!sel || this.isLoading()) return;

    this.isLoading.set(true);
    this.auth.selectProfile(sel).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.notifications.success('تم اختيار ملفك الشخصي بنجاح 🌸');
        const route = this.auth.getDashboardRoute();
        this.router.navigate([route]);
      },
      error: (err) => {
        this.isLoading.set(false);
        const msg = err?.error?.title ?? err?.error?.message ?? 'تعذّر اختيار الملف الشخصي';
        this.notifications.error(msg);
      },
    });
  }

  private emojiFor(name: ProfileType): string {
    const map: Record<ProfileType, string> = {
      Trainee: '🎓',
      Instructor: '👩‍🏫',
      Seller: '🏪',
      Admin: '⚙️',
    };
    return map[name] ?? '✿';
  }

  private defaultDescription(name: ProfileType): string {
    const map: Record<ProfileType, string> = {
      Trainee: 'تعلّمي الحرف اليدوية واحصلي على شهادات معتمدة',
      Instructor: 'شاركي خبرتك وأنشئي دورات تدريبية مميزة',
      Seller: 'اعرضي منتجاتك اليدوية وابدئي البيع',
      Admin: 'إدارة المنصة والمحتوى',
    };
    return map[name] ?? '';
  }

  private gradientFor(name: ProfileType): string {
    const map: Record<ProfileType, string> = {
      Trainee: 'from-[#FDF0EA] to-[#FAF7F4]',
      Instructor: 'from-[#F0F7FD] to-[#FAF7F4]',
      Seller: 'from-[#F0FDF4] to-[#FAF7F4]',
      Admin: 'from-[#FDF4F0] to-[#FAF7F4]',
    };
    return map[name] ?? 'from-[#FAF7F4] to-white';
  }
}
