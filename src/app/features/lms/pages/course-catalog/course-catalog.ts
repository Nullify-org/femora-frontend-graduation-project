import { Component, inject, signal } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
=======
// ﻿import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { GetCoursesRequest } from '../../models/get-courses-request.model';
<<<<<<< HEAD
import { runInBrowser } from '../../../../core/utils/platform.util';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar, CourseCard],
=======
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { CourseCard } from '../../components/course-card/course-card';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar, CourseCard],
>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41
  templateUrl: './course-catalog.html',
})
export class CourseCatalog {
  private readonly coursesApi = inject(CourseService);

  courses = signal<Course[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');
  totalCount = signal(0);
  totalPages = signal(0);
<<<<<<< HEAD
=======

  search = '';
  pageNumber = signal(1);
  pageSize = 12;
>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41

  search = '';
  pageNumber = signal(1);
  pageSize = 12;

  constructor() {
    runInBrowser(() => this.loadCourses());
  }

  loadCourses(): void {
<<<<<<< HEAD
    this.isLoading.set(true);
    this.errorMessage.set('');
=======
<<<<<<< HEAD
    this.isLoading = true;
    this.errorMessage = '';
    const params: Record<string, string | number> = { PageSize: 5 };
    if (this.search.trim()) params['Search'] = this.search.trim();
=======
    this.isLoading.set(true);
    this.errorMessage.set('');
>>>>>>> 30086475590337001cb98e4fb46e2e5d2e3f3467
>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41

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
<<<<<<< HEAD
    if (page < 1 || page > this.totalPages()) return;
=======
    if (page < 1 || page > this.totalPages()) {
      return;
    }

>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41
    this.pageNumber.set(page);
    this.loadCourses();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

<<<<<<< HEAD
  nextPage(): void { this.goToPage(this.pageNumber() + 1); }
  prevPage(): void { this.goToPage(this.pageNumber() - 1); }
=======
  nextPage(): void {
    this.goToPage(this.pageNumber() + 1);
  }

  prevPage(): void {
    this.goToPage(this.pageNumber() - 1);
  }
>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 85a96e136346dc38ed9fd3e9bf7b9e967a737f41
