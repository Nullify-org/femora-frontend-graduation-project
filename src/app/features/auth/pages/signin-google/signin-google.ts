import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

/**
 * Google OAuth Callback Page
 * Route: /signin-google
 *
 * Google يعمل redirect هنا بعد login مع الـ id_token فى الـ URL fragment (#).
 * الصفحة دى بتاخد الـ token وتبعته للـ backend.
 */
@Component({
  selector: 'app-signin-google',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-[#FAF7F4]">
      <div class="text-center">
        @if (error) {
          <div class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-6 py-4 mb-4">
            {{ error }}
          </div>
          <a href="/login" class="text-[#C8956C] hover:underline text-sm">العودة لتسجيل الدخول</a>
        } @else {
          <svg class="w-10 h-10 animate-spin text-[#C8956C] mx-auto mb-3" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"
                    stroke-dasharray="32" stroke-dashoffset="12"/>
          </svg>
          <p class="text-[#8B6355] text-sm">جارى تسجيل الدخول بـ Google...</p>
        }
      </div>
    </div>
  `,
})
export class SigninGoogle implements OnInit {
  private readonly auth   = inject(AuthService);
  private readonly router = inject(Router);

  error = '';

  ngOnInit(): void {
    // الـ token بييجى فى الـ URL fragment: #id_token=...&access_token=...
    const fragment = window.location.hash.substring(1);
    const params   = new URLSearchParams(fragment);
    const idToken  = params.get('id_token');

    if (!idToken) {
      this.error = 'لم يتم استلام token من Google. حاول مرة أخرى.';
      return;
    }

    this.auth.signinWithExternal('Google', idToken).subscribe({
      next: () => this.auth.handlePostAuthNavigation(),
      error: (err) => {
        this.error = err?.error?.message ?? 'فشل تسجيل الدخول بـ Google. حاول مرة أخرى.';
      },
    });
  }
}
