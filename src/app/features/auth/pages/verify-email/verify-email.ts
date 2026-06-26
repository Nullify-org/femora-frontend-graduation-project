import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmail implements OnInit, OnDestroy {
  private readonly auth = inject(AuthService);

  email = '';
  countdown = 45;
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.email = this.auth.getPendingEmail() ?? this.auth.user()?.email ?? '';
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  startCountdown(): void {
    this.countdown = 45;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else if (this.timer) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  formatCountdown(): string {
    const m = Math.floor(this.countdown / 60);
    const s = this.countdown % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  resendEmail(): void {
    this.startCountdown();
  }
}
