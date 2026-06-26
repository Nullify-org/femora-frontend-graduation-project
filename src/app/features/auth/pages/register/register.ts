import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { PasswordStrength } from '../../../../shared/components/password-strength/password-strength';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';
import { passwordMatchValidator, strongPasswordValidator } from '../../../../core/utils/validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, PasswordStrength, ValidationMessage],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  isLoading = signal(false);
  submitted = signal(false);
  showPassword = signal(false);
  showConfirm = signal(false);
  apiError = signal<string | null>(null);

  form = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email:     ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, strongPasswordValidator()]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') },
  );

  get passwordValue(): string {
    return this.form.get('password')?.value ?? '';
  }

  togglePassword(): void { this.showPassword.update((v) => !v); }
  toggleConfirm(): void  { this.showConfirm.update((v) => !v); }

  onSubmit(): void {
    this.submitted.set(true);
    this.apiError.set(null);
    if (this.form.invalid) return;

    const { firstName, lastName, email, password, confirmPassword } = this.form.getRawValue();

    this.isLoading.set(true);
    this.auth
      .register({ firstName: firstName!, lastName: lastName!, email: email!, password: password!, confirmPassword: confirmPassword! })
      .subscribe({
        next: () => {
          this.auth.setPendingEmail(email!);
          this.router.navigate(['/verify-email']);
        },
        error: (err) => {
          this.isLoading.set(false);
          const status  = err?.status;
          const message: string = err?.error?.message ?? '';

          if (status === 409 || message.toLowerCase().includes('already exist') || message.toLowerCase().includes('already registered')) {
            this.apiError.set('هذا البريد الإلكتروني مسجّل بالفعل. هل تريدين تسجيل الدخول؟');
          } else {
            this.apiError.set(message || 'فشل إنشاء الحساب. حاول مرة أخرى.');
          }
        },
        complete: () => this.isLoading.set(false),
      });
  }
}
