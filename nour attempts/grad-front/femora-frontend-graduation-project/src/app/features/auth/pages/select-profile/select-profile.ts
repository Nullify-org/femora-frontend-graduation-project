import { Component, inject } from '@angular/core';
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
export class SelectProfile {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  profiles = this.auth.pendingProfiles();
  selected: ProfileType | null = null;
  isLoading = false;

  select(profile: AvailableProfile): void {
    this.selected = profile.name;
  }

  isSelected(profile: AvailableProfile): boolean {
    return this.selected === profile.name;
  }

  iconFor(icon: string): string {
    const map: Record<string, string> = {
      'graduation-cap': '🎓',
      chalkboard: '👩‍🏫',
      store: '🏪',
    };
    return map[icon] ?? '✿';
  }

  confirm(): void {
    if (!this.selected || this.isLoading) return;

    this.isLoading = true;
    this.auth.selectProfile(this.selected).subscribe({
      next: () => {
        this.isLoading = false;
        this.notifications.success('تم اختيار الملف الشخصي بنجاح');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        const msg = err?.error?.title ?? err?.error?.message ?? 'تعذّر اختيار الملف الشخصي';
        this.notifications.error(msg);
      },
    });
  }
}
