<<<<<<< HEAD
﻿import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { Course } from '../../../../core/models/api.model';
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';

import { runInBrowser } from '../../../../core/utils/platform.util';
=======
﻿import {
  Component,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';

import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';

import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

import { CourseDetails as CourseDetailsModel } from '../../models/course-details.model';

import {
  courseEmoji,
  formatPrice
} from '../../../../core/utils/api-response.util';
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4

@Component({
  selector: 'app-course-details',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [
    CommonModule,
    RouterLink,
    Sidebar
  ],
  templateUrl: './course-details.html',
})
export class CourseDetails {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly coursesApi = inject(CourseService);
  private readonly enrollmentsApi = inject(EnrollmentService);

  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  readonly course = signal<CourseDetailsModel | null>(null);

  readonly isLoading = signal(true);
  readonly isEnrolling = signal(false);
  readonly isEnrolled = signal(false);

  readonly errorMessage = signal('');
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  constructor() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
    });
  }

  enroll(): void {
<<<<<<< HEAD
    if (!this.course) return;
=======

    const course = this.course();

    if (!course) return;
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

<<<<<<< HEAD
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
      },
=======
    this.isEnrolling.set(true);

    this.enrollmentsApi.enroll(course.id).subscribe({
      next: () => {

        this.isEnrolling.set(false);
        this.isEnrolled.set(true);

        this.notifications.success(
          'تم التسجيل في الدورة بنجاح'
        );

        this.router.navigate([
          '/lms/player',
          course.id
        ]);
      },

      error: (err) => {

        this.isEnrolling.set(false);

        this.errorMessage.set(
          err?.error?.title ??
          err?.error?.detail ??
          'تعذر التسجيل'
        );
      }
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
    });
  }

  private checkEnrollment(courseId: string): void {
<<<<<<< HEAD
    this.enrollmentsApi.isEnrolled(courseId).subscribe({
      next: (enrolled) => (this.isEnrolled = enrolled),
    });
=======

    this.enrollmentsApi
      .isEnrolled(courseId)
      .subscribe({
        next: (value) =>
          this.isEnrolled.set(value)
      });
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
  }
}
