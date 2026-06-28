<<<<<<< HEAD
﻿import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../../../core/models/api.model';
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';
=======
import { Component, inject, signal } from '@angular/core';
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
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4

@Component({
  selector: 'app-course-catalog',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
=======
  imports: [CommonModule, FormsModule, RouterLink, Sidebar, CourseCard],
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
  templateUrl: './course-catalog.html',
})
export class CourseCatalog {
  private readonly coursesApi = inject(CourseService);

<<<<<<< HEAD
  courses: Course[] = [];
  isLoading = true;
  errorMessage = '';
  search = '';

=======
  courses = signal<Course[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');
  totalCount = signal(0);
  totalPages = signal(0);

  search = '';

  pageNumber = signal(1);
  pageSize = 12;

>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  constructor() {
    runInBrowser(() => this.loadCourses());
  }

  loadCourses(): void {
<<<<<<< HEAD
    this.isLoading = true;
    this.errorMessage = '';
    const params: Record<string, string | number> = { PageSize: 24 };
    if (this.search.trim()) params['Search'] = this.search.trim();

    this.coursesApi.list(params).subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'تعذّر تحميل الدورات';
        this.isLoading = false;
=======
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
>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
      },
    });
  }

  onSearch(): void {
<<<<<<< HEAD
    this.loadCourses();
  }
=======
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

>>>>>>> 7503e1241548e243f340694e984a32f69bf656b4
}
