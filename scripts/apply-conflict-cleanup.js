const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const targets = {
  'src/app/features/lms/pages/course-catalog/course-catalog.ts': `import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { GetCoursesRequest } from '../../models/get-courses-request.model';
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar, CourseCard],
  templateUrl: './course-catalog.html',
})
export class CourseCatalog {
  private readonly coursesApi = inject(CourseService);

  courses = signal<Course[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');
  totalCount = signal(0);
  totalPages = signal(0);

  search = '';
  pageNumber = signal(1);
  pageSize = 12;

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  constructor() {
    runInBrowser(() => this.loadCourses());
  }

  loadCourses(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    const request: GetCoursesRequest = {
      search: this.search.trim(),
      pageNumber: this.pageNumber(),
      pageSize: this.pageSize,
    };

    this.coursesApi.getCourses(request).subscribe({
      next: (response) => {
        this.courses.set(response.data);
        this.totalCount.set(response.totalCount);
        this.totalPages.set(response.totalPages);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل الدورات');
        this.isLoading.set(false);
      },
    });
  }

  onSearch(): void {
    this.pageNumber.set(1);
    this.loadCourses();
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.pageNumber.set(page);
    this.loadCourses();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextPage(): void {
    this.goToPage(this.pageNumber() + 1);
  }

  prevPage(): void {
    this.goToPage(this.pageNumber() - 1);
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
}
`,
  'src/app/features/lms/pages/course-details/course-details.ts': `import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { CourseDetails as CourseDetailsModel } from '../../models/course-details.model';
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
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  readonly course = signal<CourseDetailsModel | null>(null);
  readonly isLoading = signal(true);
  readonly isEnrolling = signal(false);
  readonly isEnrolled = signal(false);
  readonly errorMessage = signal('');

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

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

    this.isEnrolling.set(true);

    this.enrollmentsApi.enroll(course.id).subscribe({
      next: () => {
        this.isEnrolling.set(false);
        this.isEnrolled.set(true);
        this.notifications.success('تم التسجيل فى الدورة بنجاح');
        this.router.navigate(['/lms/player', course.id]);
      },
      error: (err) => {
        this.isEnrolling.set(false);
        this.errorMessage.set(
          err?.error?.title ??
          err?.error?.detail ??
          'تعذر التسجيل'
        );
      },
    });
  }

  private checkEnrollment(courseId: string): void {
    this.enrollmentsApi
      .isEnrolled(courseId)
      .subscribe({ next: (value) => this.isEnrolled.set(value) });
  }
}
`,
  'src/app/features/lms/pages/course-details/course-details.html': `<div class=