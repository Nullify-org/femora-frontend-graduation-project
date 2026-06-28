import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../../../core/models/api.model';
import { courseEmoji, formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  templateUrl: './course-catalog.html',
})
export class CourseCatalog {
  private readonly coursesApi = inject(CourseService);

  courses: Course[] = [];
  isLoading = true;
  errorMessage = '';
  search = '';

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  constructor() {
    runInBrowser(() => this.loadCourses());
  }

  loadCourses(): void {
    this.isLoading = true;
    this.errorMessage = '';
    const params: Record<string, string | number> = { PageSize: 5 };
    if (this.search.trim()) params['Search'] = this.search.trim();

    this.coursesApi.list(params).subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'تعذّر تحميل الدورات';
        this.isLoading = false;
      },
    });
  }

  onSearch(): void {
    this.loadCourses();
  }
}
