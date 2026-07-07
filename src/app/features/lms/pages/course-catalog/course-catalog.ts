import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { GetCoursesRequest } from '../../models/get-courses-request.model';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar, CourseCard],
  styleUrl: './course-catalog.css',
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

  categories = signal<string[]>([]);
  levels = signal<string[]>([]);

  selectedCategory = signal('');
  selectedLevel = signal('');
  selectedSort = signal(1);

constructor() {
  runInBrowser(() => {
    this.loadFilterOptions();
    this.loadCourses();
  });
}

  loadCourses(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    const request: GetCoursesRequest = {
      search: this.search.trim(),
      category: this.selectedCategory() || undefined,
      level: this.selectedLevel() || undefined,
      sortBy: this.selectedSort(),
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

  loadFilterOptions(): void {
  this.coursesApi.getFilterOptions().subscribe({
    next: (response) => {
      this.categories.set(response.categories);
      this.levels.set(response.levels);
    }
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

  nextPage(): void { this.goToPage(this.pageNumber() + 1); }
  prevPage(): void { this.goToPage(this.pageNumber() - 1); }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
}
