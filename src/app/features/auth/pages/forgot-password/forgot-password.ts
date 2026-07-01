import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ValidationMessage],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  isLoading = signal(false);
  submitted = signal(false);
  apiError = signal<string | null>(null);
  /** True once the request succeeded — we show a confirmation screen instead of the form. */
  emailSent = signal(false);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get emailCtrl() { return this.form.get('email'); }

  onSubmit(): void {
    this.submitted.set(true);
    this.apiError.set(null);
    if (this.form.invalid) return;

    const { email } = this.form.getRawValue();
    this.isLoading.set(true);

    this.auth.forgotPassword(email!).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.emailSent.set(true);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.apiError.set(
          err?.error?.detail ?? err?.error?.title ?? 'حدث خطأ أثناء إرسال الطلب. حاولي مرة أخرى.',
        );
      },
    });
  }
}
