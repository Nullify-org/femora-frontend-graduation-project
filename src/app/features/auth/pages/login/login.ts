import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ValidationMessage],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false],
  });

  readonly showPassword = signal(false);
  readonly isLoading = signal(false);
  readonly apiError = signal('');
  submitted = false;

  get emailCtrl() { return this.form.get('email'); }
  get passwordCtrl() { return this.form.get('password'); }

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  loginWithGoogle(): void {
    // Google OAuth redirect — backend handles OAuth flow
    window.location.href = `${window.location.origin}/api/auth/google/login`;
  }

  loginWithFacebook(): void {
    window.location.href = `${window.location.origin}/api/auth/facebook/login`;
  }

  submit(): void {
    this.submitted = true;
    this.apiError.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    const { email, password } = this.form.getRawValue();

    this.auth.signin({ email: email!, password: password! }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.requiresProfileSelection) {
          this.router.navigate(['/select-profile']);
        } else {
          this.notifications.success('مرحباً بعودتك! 🌸');
          const route = this.auth.getDashboardRoute();
          this.router.navigate([route]);
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        const msg =
          err?.error?.title ??
          err?.error?.detail ??
          err?.error?.message ??
          'البريد الإلكتروني أو كلمة المرور غير صحيحة';
        this.apiError.set(msg);
      },
    });
  }
}
