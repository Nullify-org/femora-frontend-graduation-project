import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';
import { PasswordStrength } from '../../../../shared/components/password-strength/password-strength';
import { passwordMatchValidator, strongPasswordValidator } from '../../../../core/utils/validators';
import { INTEREST_OPTIONS, InterestOption } from '../../../../core/models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ValidationMessage, PasswordStrength],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);
  private readonly fb = inject(FormBuilder);

  /** Step 1 = account info, Step 2 = interests */
  readonly step = signal<1 | 2>(1);
  readonly showPassword = signal(false);
  readonly showConfirmPassword = signal(false);
  readonly isLoading = signal(false);
  readonly apiError = signal('');
  submitted = false;

  readonly interests: Array<InterestOption & { selected: boolean }> =
    INTEREST_OPTIONS.map(o => ({ ...o, selected: false }));

  form = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, strongPasswordValidator()]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') },
  );

  get firstNameCtrl() { return this.form.get('firstName'); }
  get lastNameCtrl() { return this.form.get('lastName'); }
  get emailCtrl() { return this.form.get('email'); }
  get passwordCtrl() { return this.form.get('password'); }
  get confirmPasswordCtrl() { return this.form.get('confirmPassword'); }
  get passwordValue(): string { return this.passwordCtrl?.value ?? ''; }
  get selectedInterestsCount(): number { return this.interests.filter(i => i.selected).length; }

  toggleInterest(interest: InterestOption & { selected: boolean }): void {
    interest.selected = !interest.selected;
  }

  goToStep2(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted = false;
    this.step.set(2);
  }

  backToStep1(): void {
    this.step.set(1);
  }

  register(): void {
    this.apiError.set('');
    this.isLoading.set(true);

    const { firstName, lastName, email, password, confirmPassword } = this.form.getRawValue();
    const selectedInterests = this.interests.filter(i => i.selected).map(i => i.label);

    this.auth.register({
      firstName: firstName!,
      lastName: lastName!,
      email: email!,
      password: password!,
      confirmPassword: confirmPassword!,
      interests: selectedInterests,
    }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.auth.setPendingEmail(email!);
        this.notifications.success('تم إنشاء حسابك بنجاح! 🌸');
        this.router.navigate(['/verify-email']);
      },
      error: (err) => {
        this.isLoading.set(false);
        // Handle field-level server validation errors
        const errors: Record<string, string[]> = err?.error?.errors ?? {};
        Object.entries(errors).forEach(([field, msgs]) => {
          const key = field.charAt(0).toLowerCase() + field.slice(1);
          const ctrl = this.form.get(key);
          if (ctrl) {
            ctrl.setErrors({ serverError: (msgs as string[])[0] });
            ctrl.markAsTouched();
          }
        });
        const msg =
          err?.error?.title ??
          err?.error?.detail ??
          err?.error?.message ??
          'تعذّر إنشاء الحساب، يرجى المحاولة مرة أخرى';
        this.apiError.set(msg);
        // Go back to step 1 if field errors
        if (Object.keys(errors).length > 0) this.step.set(1);
      },
    });
  }
}
