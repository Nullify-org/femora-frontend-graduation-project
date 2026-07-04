import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
<<<<<<< Updated upstream
import { Course } from '../../../../core/models/api.model';
=======
import { CourseDetails as CourseDetailsModel } from '../../models/course-details.model';
import { EnrollmentResponse, EnrollmentStatus } from '../../../../core/models/api.model';

>>>>>>> Stashed changes
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';

import { runInBrowser } from '../../../../core/utils/platform.util';

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
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  course: Course | null = null;
  isLoading = true;
  isEnrolling = false;
  isEnrolled = false;
  errorMessage = '';

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id) {
        this.errorMessage = 'معرّف الدورة غير صالح';
        this.isLoading = false;
        return;
      }

      this.coursesApi.getById(id).subscribe({
        next: (course) => {
          this.course = course;
          this.isLoading = false;
          if (this.auth.isAuthenticated()) {
            this.checkEnrollment(id);
          }
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل تفاصيل الدورة';
          this.isLoading = false;
        },
      });
    });
  }

  enroll(): void {
    if (!this.course) return;

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

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
      },
    });
  }

  private checkEnrollment(courseId: string): void {
    this.enrollmentsApi.isEnrolled(courseId).subscribe({
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
    });
  }
}
