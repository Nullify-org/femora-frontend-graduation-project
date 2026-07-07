import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { OrderService } from '../../../marketplace/services/order.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
<<<<<<< HEAD
<<<<<<< Updated upstream
import { Course } from '../../../../core/models/api.model';
=======
import { CourseDetails as CourseDetailsModel } from '../../models/course-details.model';
import { EnrollmentResponse, EnrollmentStatus } from '../../../../core/models/api.model';

>>>>>>> Stashed changes
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';
=======
import { CourseDetails as CourseDetailsModel } from '../../models/course-details.model';
>>>>>>> origin/master

import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './course-details.html',
})
export class CourseDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly coursesApi = inject(CourseService);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly ordersApi = inject(OrderService);

  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  readonly course = signal<CourseDetailsModel | null>(null);
  readonly isLoading = signal(true);
  readonly isEnrolling = signal(false);
  readonly isEnrolled = signal(false);
  readonly errorMessage = signal('');

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  readonly enrollmentId = signal<string | null>(null);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage.set('معرّف الدورة غير صالح');
      this.isLoading.set(false);
      return;
    }

    this.loadCourse(id);
  }

  private loadCourse(id: string): void {
    this.coursesApi.getCourseById(id).subscribe({
      next: (course) => {
        this.course.set(course);
        this.isLoading.set(false);

        if (this.auth.isAuthenticated()) {
          this.checkEnrollment(id);
        }
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل بيانات الدورة');
        this.isLoading.set(false);
      },
    });
  }

  enroll(): void {
    const course = this.course();
    if (!course) return;

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

<<<<<<< HEAD
<<<<<<< Updated upstream
    this.isEnrolling = true;
    this.enrollmentsApi.enroll(this.course.id).subscribe({
      next: () => {
        this.isEnrolling = false;
        this.isEnrolled = true;
        this.notifications.success('تم التسجيل في الدورة بنجاح!');
        this.router.navigate(['/lms/player', this.course!.id]);
      },
      error: (err) => {
        this.isEnrolling = false;
        this.errorMessage =
          err?.error?.title ?? err?.error?.detail ?? 'تعذّر التسجيل في الدورة';
=======
    this.isEnrolling.set(true);

    this.enrollmentsApi.enroll(course.id).subscribe({
      next: (response: EnrollmentResponse) => {
        this.isEnrolling.set(false);
        this.isEnrolled.set(true);
        this.enrollmentId.set(response.enrollmentId);
        this.notifications.success('تم التسجيل فى الدورة بنجاح');
        this.router.navigate(['/lms/player', response.enrollmentId]);
>>>>>>> Stashed changes
      },
      error: () => {
        this.isEnrolling.set(false);
        this.notifications.error('تعذر التسجيل في الدورة');
=======
    // Paid courses go through Stripe Checkout — the backend blocks direct
    // enrollment for them (402 Payment Required) and the enrollment is
    // created by the Stripe webhook once payment succeeds.
    if (course.price > 0) {
      this.isEnrolling.set(true);
      this.errorMessage.set('');

      this.ordersApi.redirectToCheckoutSession({
        courseId: course.id,
        successUrl: `${window.location.origin}/payment-success?courseId=${course.id}`,
        cancelUrl: `${window.location.origin}/lms/course/${course.id}`,
      });
      // redirectToCheckoutSession navigates the browser away on success,
      // so isEnrolling stays true until the page unloads.
      return;
    }

    this.isEnrolling.set(true);
    this.errorMessage.set('');

    this.enrollmentsApi.enroll(course.id).subscribe({
      next: (response) => {
        this.isEnrolling.set(false);
        this.isEnrolled.set(true);
        this.enrollmentId.set(response.enrollmentId);
        this.notifications.success('تم التسجيل فى الدورة بنجاح');
        this.router.navigate(['/lms/player', response.enrollmentId]);
      },
      error: (err) => {
        this.isEnrolling.set(false);
        this.errorMessage.set(
          err?.error?.detail ?? err?.error?.title ?? 'تعذر إتمام التسجيل. يرجى المحاولة مرة أخرى.'
        );
>>>>>>> origin/master
      },
    });
  }

  private checkEnrollment(courseId: string): void {
    this.enrollmentsApi.isEnrolled(courseId).subscribe({
<<<<<<< HEAD
<<<<<<< Updated upstream
      next: (enrolled) => (this.isEnrolled = enrolled),
=======
      next: (status: EnrollmentStatus) => {
        this.isEnrolled.set(status.isEnrolled);
        this.enrollmentId.set(status.enrollmentId ?? null);
      },
      error: () => {
        this.isEnrolled.set(false);
      },
>>>>>>> Stashed changes
=======
      next: (status) => {
        this.isEnrolled.set(status.isEnrolled);
        this.enrollmentId.set(status.enrollmentId ?? null);
      },
>>>>>>> origin/master
    });
  }
}
