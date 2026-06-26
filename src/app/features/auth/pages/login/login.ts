import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';
import { SigninResponse } from '../../../../core/models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ValidationMessage],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  form!: FormGroup;
  apiError = signal<string | null>(null);
  isLoading = signal(false);
  showPassword = signal(false);
  submitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      email:      ['', [Validators.required, Validators.email]],
      password:   ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
    const remembered = this.auth.getRememberedEmail();
    if (remembered) this.form.patchValue({ email: remembered, rememberMe: true });
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.apiError.set('الرجاء ملء جميع الحقول بشكل صحيح');
      return;
    }
    this.isLoading.set(true);
    this.apiError.set(null);

    this.auth.signin(this.form.value).subscribe({
      next: (res: SigninResponse) => {
        this.isLoading.set(false);
        this.navigateAfterLogin(res);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.apiError.set(
          err?.error?.message ?? err?.error?.title ?? err?.error?.detail
          ?? 'فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.'
        );
      },
    });
  }

  togglePassword(): void { this.showPassword.update(v => !v); }

  loginWithGoogle(): void { /* OAuth redirect — handled server-side */ }
  loginWithFacebook(): void { /* OAuth redirect — handled server-side */ }

  get emailCtrl()    { return this.form.get('email'); }
  get passwordCtrl() { return this.form.get('password'); }

  private navigateAfterLogin(res: SigninResponse): void {
    if (res.requiresProfileSelection) {
      this.router.navigate(['/select-profile']);
    } else {
      // getDashboardRoute() returns '/' for buyers (no activeProfile)
      const route = this.auth.getDashboardRoute();
      this.router.navigate([route]);
    }
  }
}
