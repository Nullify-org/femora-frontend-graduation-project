import { Component, inject, OnDestroy, OnInit, signal, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmail implements OnInit, OnDestroy {
  private readonly auth   = inject(AuthService);
  private readonly router = inject(Router);

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  email         = '';
  digits        = signal<string[]>(['', '', '', '', '', '']);
  countdown     = signal(300); // 5 minutes
  isSending     = signal(false);
  isVerifying   = signal(false);
  sendError     = signal<string | null>(null);
  verifyError   = signal<string | null>(null);
  resendSuccess = signal(false);

  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.email = this.auth.getPendingEmail() ?? this.auth.user()?.email ?? '';
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  // ── OTP input handling ──────────────────────────────────────────────────
  onInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const val   = input.value.replace(/\D/g, '').slice(-1);
    input.value = val;
    const copy  = [...this.digits()];
    copy[index] = val;
    this.digits.set(copy);
    if (val && index < 5) this.focusInput(index + 1);
  }

  onKeydown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.digits()[index] && index > 0) this.focusInput(index - 1);
    if (event.key === 'ArrowRight' && index < 5) this.focusInput(index + 1);
    if (event.key === 'ArrowLeft'  && index > 0) this.focusInput(index - 1);
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const text = event.clipboardData?.getData('text') ?? '';
    const nums  = text.replace(/\D/g, '').slice(0, 6).split('');
    const copy  = ['', '', '', '', '', ''];
    nums.forEach((d, i) => (copy[i] = d));
    this.digits.set(copy);
    setTimeout(() => {
      this.otpInputs.forEach((el, i) => (el.nativeElement.value = copy[i]));
      this.focusInput(Math.min(nums.length, 5));
    });
  }

  private focusInput(index: number): void {
    this.otpInputs?.toArray()[index]?.nativeElement.focus();
  }

  get otpCode(): string    { return this.digits().join(''); }
  get isComplete(): boolean { return this.otpCode.length === 6; }

  // ── Verify ──────────────────────────────────────────────────────────────
  verifyOtp(): void {
    if (!this.isComplete || this.isVerifying()) return;
    
    // Log the data being sent for debugging
    console.log('Verifying OTP:', { 
      email: this.email, 
      otpCode: this.otpCode,
      otpLength: this.otpCode.length
    });
    
    this.isVerifying.set(true);
    this.verifyError.set(null);

    this.auth.verifyOtp(this.email, this.otpCode).subscribe({
      next: () => {
        this.isVerifying.set(false);
        this.auth.clearPendingEmail?.();
        this.router.navigate(['/email-verified']);
      },
      error: (err: any) => {
        this.isVerifying.set(false);
        
        // Log the full error response for debugging
        console.error('OTP Verification Error:', { 
          status: err.status,
          error: err.error,
          fullError: err 
        });
        
        // Extract error message from various possible response formats
        let errorMessage = 'الكود غير صحيح. حاولي مرة أخرى.';
        
        if (err?.error) {
          // Check for common error response structures
          if (err.error.detail) {
            errorMessage = err.error.detail;
          } else if (err.error.title) {
            errorMessage = err.error.title;
          } else if (err.error.message) {
            errorMessage = err.error.message;
          } else if (err.error.errors) {
            // Handle validation errors object
            const errors = err.error.errors;
            if (typeof errors === 'object') {
              const errorMessages = Object.values(errors).flat();
              if (Array.isArray(errorMessages) && errorMessages.length > 0) {
                errorMessage = errorMessages[0] as string;
              } else if (typeof errors === 'string') {
                errorMessage = errors;
              }
            }
          } else if (typeof err.error === 'string') {
            // Handle string error responses
            errorMessage = err.error;
          }
        }
        
        this.verifyError.set(errorMessage);
        this.digits.set(['', '', '', '', '', '']);
        setTimeout(() => {
          this.otpInputs?.toArray().forEach(el => (el.nativeElement.value = ''));
          this.focusInput(0);
        });
      },
    });
  }

  // ── Resend ──────────────────────────────────────────────────────────────
  resendOtp(): void {
    if (!this.email || this.countdown() > 0 || this.isSending()) return;
    this.isSending.set(true);
    this.sendError.set(null);
    this.resendSuccess.set(false);

    this.auth.sendOtp(this.email).subscribe({
      next: () => {
        this.isSending.set(false);
        this.resendSuccess.set(true);
        this.startCountdown();
        this.digits.set(['', '', '', '', '', '']);
        setTimeout(() => this.focusInput(0));
      },
      error: (err: any) => {
        this.isSending.set(false);
        
        // Extract error message from various possible response formats
        let errorMessage = 'فشل إرسال الكود. حاولي مرة أخرى.';
        
        if (err?.error) {
          if (err.error.detail) {
            errorMessage = err.error.detail;
          } else if (err.error.title) {
            errorMessage = err.error.title;
          } else if (err.error.message) {
            errorMessage = err.error.message;
          } else if (err.error.errors) {
            const errors = err.error.errors;
            if (typeof errors === 'object') {
              const errorMessages = Object.values(errors).flat();
              if (Array.isArray(errorMessages) && errorMessages.length > 0) {
                errorMessage = errorMessages[0] as string;
              }
            }
          } else if (typeof err.error === 'string') {
            errorMessage = err.error;
          }
        }
        
        this.sendError.set(errorMessage);
      },
    });
  }

  // ── Countdown ───────────────────────────────────────────────────────────
  startCountdown(): void {
    this.countdown.set(300); // 5 minutes
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      const current = this.countdown();
      if (current > 0) this.countdown.set(current - 1);
      else clearInterval(this.timer!);
    }, 1000);
  }

  formatCountdown(): string {
    const total = this.countdown();
    const m = Math.floor(total / 60).toString().padStart(2, '0');
    const s = (total % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
}
