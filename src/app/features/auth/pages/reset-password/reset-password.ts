import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { PasswordStrength } from '../../../../shared/components/password-strength/password-strength';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';
import { passwordMatchValidator, strongPasswordValidator } from '../../../../core/utils/validators';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, PasswordStrength, ValidationMessage],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notifications = inject(NotificationService);

  isLoading = signal(false);
  submitted = signal(false);
  showPassword = signal(false);
  showConfirm = signal(false);
  apiError = signal<string | null>(null);
  resetDone = signal(false);

  /** True when the link is missing its token/email — shown instead of the form. */
  linkInvalid = signal(false);

  private email = '';
  private token = '';

  form = this.fb.group(
    {
      newPassword: ['', [Validators.required, strongPasswordValidator()]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator('newPassword', 'confirmPassword') },
  );

  get passwordValue(): string {
    return this.form.get('newPassword')?.value ?? '';
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.email = params.get('email') ?? '';
      this.token = params.get('token') ?? '';
      this.linkInvalid.set(!this.email || !this.token);
    });
  }

  togglePassword(): void { this.showPassword.update((v) => !v); }
  toggleConfirm(): void  { this.showConfirm.update((v) => !v); }

  onSubmit(): void {
    this.submitted.set(true);
    this.apiError.set(null);
    if (this.form.invalid || this.linkInvalid()) return;

    const { newPassword, confirmPassword } = this.form.getRawValue();
    this.isLoading.set(true);

    this.auth
      .resetPassword({
        email: this.email,
        token: this.token,
        newPassword: newPassword!,
        confirmPassword: confirmPassword!,
      })
      .subscribe({
        next: () => {
          this.isLoading.set(false);
          this.resetDone.set(true);
          this.notifications.success('تم تغيير كلمة المرور بنجاح. يمكنكِ الآن تسجيل الدخول.');
        },
        error: (err) => {
          this.isLoading.set(false);
          const status = err?.status;
          if (status === 401) {
            this.apiError.set(
              err?.error?.detail ?? 'رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية. اطلبي رابطاً جديداً.',
            );
          } else {
            this.apiError.set(
              err?.error?.detail ?? err?.error?.title ?? 'فشلت عملية إعادة تعيين كلمة المرور. حاولي مرة أخرى.',
            );
          }
        },
      });
  }
}
