import { Component, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { EnrollmentService } from '../../../lms/services/enrollment.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

type PaymentSuccessState = 'processing' | 'enrolled' | 'generic' | 'timeout';

/**
 * Landing page for Stripe's `successUrl`.
 *
 * Stripe redirects here immediately after the customer pays, but the actual
 * enrollment (or order fulfillment) is only created a moment later, when
 * Stripe calls our /api/payments/webhook endpoint. So for course purchases
 * we poll `GET /api/enrollments/is-enrolled/{courseId}` for a few seconds
 * until the webhook has caught up, then send the learner straight into the
 * course player. For cart/product purchases there's no course to check, so
 * we just show a generic confirmation.
 */
@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-success.html',
})
export class PaymentSuccess implements OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly enrollmentsApi = inject(EnrollmentService);

  readonly state = signal<PaymentSuccessState>('processing');
  readonly enrollmentId = signal<string | null>(null);
  readonly courseId = signal<string | null>(null);

  private pollHandle: ReturnType<typeof setInterval> | null = null;
  private attempts = 0;
  private readonly maxAttempts = 8; // ~24s of polling at 3s intervals

  constructor() {
    const courseId = this.route.snapshot.queryParamMap.get('courseId');
    this.courseId.set(courseId);

    if (!courseId) {
      // Not a course purchase (e.g. marketplace cart checkout) — nothing to poll for.
      this.state.set('generic');
      return;
    }

    runInBrowser(() => this.pollForEnrollment(courseId));
  }

  private pollForEnrollment(courseId: string): void {
    const check = () => {
      this.attempts++;
      this.enrollmentsApi.isEnrolled(courseId).subscribe({
        next: (status) => {
          if (status.isEnrolled) {
            this.stopPolling();
            this.enrollmentId.set(status.enrollmentId ?? null);
            this.state.set('enrolled');
            return;
          }
          if (this.attempts >= this.maxAttempts) {
            this.stopPolling();
            this.state.set('timeout');
          }
        },
        error: () => {
          if (this.attempts >= this.maxAttempts) {
            this.stopPolling();
            this.state.set('timeout');
          }
        },
      });
    };

    check();
    this.pollHandle = setInterval(check, 3000);
  }

  goToCourse(): void {
    const enrollmentId = this.enrollmentId();
    if (enrollmentId) this.router.navigate(['/lms/player', enrollmentId]);
  }

  private stopPolling(): void {
    if (this.pollHandle) {
      clearInterval(this.pollHandle);
      this.pollHandle = null;
    }
  }

  ngOnDestroy(): void {
    this.stopPolling();
  }
}
