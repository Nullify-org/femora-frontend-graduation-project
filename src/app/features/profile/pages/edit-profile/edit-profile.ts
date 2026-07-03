import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideUser, LucideSave, LucideX, LucideCamera } from '@lucide/angular';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ProfileDto, ProfileService } from '../../services/profile.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Sidebar, LucideUser, LucideSave, LucideX, LucideCamera],
  templateUrl: './edit-profile.html',
})
export class EditProfile {
  private readonly fb = inject(FormBuilder);
  private readonly profileApi = inject(ProfileService);
  private readonly notifications = inject(NotificationService);
  private readonly router = inject(Router);
  readonly auth = inject(AuthService);

  readonly isLoading = signal(true);
  readonly isSaving = signal(false);
  readonly avatarPreview = signal<string | null>(null);
  readonly currentAvatarUrl = signal<string | null>(null);

  private selectedAvatarFile: File | null = null;

  readonly form = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.maxLength(100)]],
    lastName: ['', [Validators.required, Validators.maxLength(100)]],
    phoneNumber: ['', [Validators.pattern(/^\+?[0-9\s-]*$/)]],
    bio: ['', [Validators.maxLength(1000)]],
    linkedInUrl: [''],
    gitHubUrl: [''],
    country: [''],
  });

  constructor() {
    runInBrowser(() => this.loadProfile());
  }

  loadProfile(): void {
    this.isLoading.set(true);
    this.profileApi.getProfile().subscribe({
      next: (profile: ProfileDto) => {
        this.form.patchValue({
          firstName: profile.firstName ?? '',
          lastName: profile.lastName ?? '',
          phoneNumber: profile.phoneNumber ?? '',
          bio: profile.bio ?? '',
          linkedInUrl: profile.linkedInUrl ?? '',
          gitHubUrl: profile.gitHubUrl ?? '',
          country: profile.country ?? '',
        });
        this.currentAvatarUrl.set(profile.avatarUrl ?? null);
        this.isLoading.set(false);
      },
      error: () => {
        // Fall back to whatever the auth session already knows locally.
        const user = this.auth.user();
        if (user) {
          this.form.patchValue({ firstName: user.firstName, lastName: user.lastName });
          this.currentAvatarUrl.set(user.profilePictureUrl ?? null);
        }
        this.isLoading.set(false);
      },
    });
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      this.notifications.error('الصورة لازم تكون JPEG أو PNG أو WEBP');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.notifications.error('حجم الصورة أكبر من 5 ميجا');
      return;
    }

    this.selectedAvatarFile = file;
    const reader = new FileReader();
    reader.onload = () => this.avatarPreview.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notifications.error('راجعى البيانات المدخلة');
      return;
    }

    this.isSaving.set(true);
    const value = this.form.getRawValue();

    this.profileApi
      .updateProfile({
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber || null,
        bio: value.bio || null,
        linkedInUrl: value.linkedInUrl || null,
        gitHubUrl: value.gitHubUrl || null,
        country: value.country || null,
        avatar: this.selectedAvatarFile,
      })
      .subscribe({
        next: () => {
          this.isSaving.set(false);
          this.notifications.success('تم حفظ التعديلات بنجاح');
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          this.isSaving.set(false);
          const msg = err?.error?.title ?? err?.error?.detail ?? 'تعذّر حفظ التعديلات';
          this.notifications.error(msg);
        },
      });
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
