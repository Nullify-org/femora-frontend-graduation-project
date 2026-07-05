import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-instructor-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar, RouterLink],
  templateUrl: './instructor-courses.html',
})
export class InstructorCourses {
  private readonly coursesApi = inject(CourseService);

  private readonly allCourses = signal<Course[]>([]);
  readonly isLoading = signal(true);
  readonly totalCount = signal(0);

  readonly searchTerm = signal('');
  readonly selectedFilter = signal<'all' | 'published' | 'draft'>('all');
  readonly pageNumber = signal(1);
  readonly pageSize = 12;

  // فلترة محلية
  readonly filteredCourses = computed(() => {
    let courses = this.allCourses();

    const s = this.searchTerm().trim().toLowerCase();
    if (s) {
      courses = courses.filter(c =>
        c.title.toLowerCase().includes(s) ||
        c.description?.toLowerCase().includes(s)
      );
    }

    const f = this.selectedFilter();
    if (f === 'published') courses = courses.filter(c => c.isPublished);
    if (f === 'draft') courses = courses.filter(c => !c.isPublished);

    return courses;
  });

  // pagination محلي على الـ filtered
  readonly paginatedCourses = computed(() => {
    const start = (this.pageNumber() - 1) * this.pageSize;
    return this.filteredCourses().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() =>
    Math.ceil(this.filteredCourses().length / this.pageSize)
  );

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  // stats من الكل مش من الـ filtered
  readonly publishedCount = computed(() =>
    this.allCourses().filter(c => c.isPublished).length
  );

  readonly totalStudents = computed(() =>
    this.allCourses().reduce((sum, c) => sum + c.enrollmentsCount, 0)
  );

  constructor() {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading.set(true);

    // جيب الكل من غير filter (الباك إند مش بيدعمه)
    this.coursesApi.getMyCourses(1, 100).subscribe({
      next: (response) => {
        this.allCourses.set(response.data);
        this.totalCount.set(response.totalCount);
        this.isLoading.set(false);
      },
      error: () => {
        this.allCourses.set([]);
        this.isLoading.set(false);
      },
    });
  }

  onSearch(value: string): void {
    this.searchTerm.set(value);
    this.pageNumber.set(1);
  }

  onFilterChange(filter: 'all' | 'published' | 'draft'): void {
    this.selectedFilter.set(filter);
    this.pageNumber.set(1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.pageNumber.set(page);
  }
}
