import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { ValidationMessage } from '../../../../shared/components/validation-message/validation-message';
import { SigninResponse } from '../../../../core/models/auth.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ValidationMessage],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  private readonly fb     = inject(FormBuilder);
  private readonly auth   = inject(AuthService);
  private readonly router = inject(Router);

  
  private readonly GOOGLE_CLIENT_ID =
    '318210078663-2pflmpifa606d94cuvpm86v7t52l7oj4.apps.googleusercontent.com';

  form!: FormGroup;
  apiError     = signal<string | null>(null);
  isLoading    = signal(false);
  showPassword = signal(false);
  submitted    = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      email:      ['', [Validators.required, Validators.email]],
      password:   ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
    const remembered = this.auth.getRememberedEmail();
    if (remembered) this.form.patchValue({ email: remembered, rememberMe: true });
  }

  // ── Email/Password Login ──────────────────────────────────────────────────
  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.apiError.set('الرجاء ملء جميع الحقول بشكل صحيح');
      return;
    }
    this.isLoading.set(true);
    this.apiError.set(null);

    this.auth.signin(this.form.value).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.auth.handlePostAuthNavigation();
      },
      error: (err) => {
        this.isLoading.set(false);
        const status = err?.status;
        if (status === 401 || status === 400) {
          this.apiError.set('البريد الإلكترونى أو كلمة المرور غير صحيحة.');
        } else if (status === 0) {
          this.apiError.set('تعذّر الاتصال بالسيرفر. تأكدى من تشغيل الـ backend.');
        } else {
          this.apiError.set(
            err?.error?.detail ?? err?.error?.title ?? 'فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.'
          );
        }
      },
    });
  }

  togglePassword(): void { this.showPassword.update(v => !v); }

  // ── Google Login — Redirect Flow (أضمن من One Tap) ───────────────────────
  loginWithGoogle(): void {
    this.isLoading.set(true);
    this.apiError.set(null);

    // بناء redirect_uri بناءً على الـ origin الحالي
    const redirectUri = `${window.location.origin}/signin-google`;

    const params = new URLSearchParams({
      client_id:     this.GOOGLE_CLIENT_ID,
      redirect_uri:  redirectUri,
      response_type: 'token id_token',
      scope:         'openid email profile',
      nonce:         Math.random().toString(36).substring(2),
      prompt:        'select_account',
    });

    // Redirect to Google OAuth
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  // ── Facebook Login ────────────────────────────────────────────────────────
  loginWithFacebook(): void {
    if (typeof (window as any).FB === 'undefined') {
      this.apiError.set('Facebook SDK غير محمّل. يرجى المحاولة لاحقاً.');
      return;
    }
    this.isLoading.set(true);
    this.apiError.set(null);

    (window as any).FB.login(
      (response: any) => {
        if (response.authResponse?.accessToken) {
          this.auth.signinWithExternal('Facebook', response.authResponse.accessToken).subscribe({
            next: () => { this.isLoading.set(false); this.auth.handlePostAuthNavigation(); },
            error: (err) => {
              this.isLoading.set(false);
              this.apiError.set(err?.error?.message ?? 'فشل تسجيل الدخول بـ Facebook');
            },
          });
        } else {
          this.isLoading.set(false);
          this.apiError.set('تم إلغاء تسجيل الدخول بـ Facebook');
        }
      },
      { scope: 'public_profile,email' },
    );
  }

  get emailCtrl()    { return this.form.get('email'); }
  get passwordCtrl() { return this.form.get('password'); }
}
