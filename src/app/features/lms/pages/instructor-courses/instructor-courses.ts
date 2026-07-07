import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

interface PageAlert {
  type: 'success' | 'error';
  message: string;
}

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

  readonly alert = signal<PageAlert | null>(null);
  private alertTimeout?: ReturnType<typeof setTimeout>;

  readonly searchTerm = signal('');
  readonly selectedFilter = signal<'all' | 'published' | 'draft'>('all');
  readonly pageNumber = signal(1);
  readonly pageSize = 12;

  readonly processingCourseId = signal<string | null>(null);

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

  readonly publishedCount = computed(() =>
    this.allCourses().filter(c => c.isPublished).length
  );

  readonly totalStudents = computed(() =>
    this.allCourses().reduce((sum, c) => sum + c.enrollmentsCount, 0)
  );

  constructor() {
    this.loadCourses();
  }

  private showAlert(type: 'success' | 'error', message: string): void {
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }
    this.alert.set({ type, message });
    this.alertTimeout = setTimeout(() => this.alert.set(null), 4500);
  }

  dismissAlert(): void {
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }
    this.alert.set(null);
  }

  loadCourses(): void {
    this.isLoading.set(true);

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

  /**
   * طلب النشر لا يفعّل isPublished فورًا في الواجهة، لأن النشر الفعلي
   * يحتاج موافقة الأدمن (ApproveCourseCommand) على السيرفر. لذلك نكتفي
   * بإعلام المدرب إن الطلب اتبعت للمراجعة، وأي خطأ من السيرفر يظهر برسالة
   * ودّية بدل ما يوصل كـ Exception فى الـ console.
   *
   * إلغاء النشر إجراء فوري (مفيهوش موافقة مطلوبة)، فبيحدّث الحالة محليًا
   * فور نجاحه.
   */
  togglePublish(course: Course): void {
    if (this.processingCourseId()) return;

    this.processingCourseId.set(course.id);

    if (course.isPublished) {
      // إلغاء النشر: إجراء فوري
      this.coursesApi.unpublish(course.id).subscribe({
        next: () => {
          this.allCourses.update(list =>
            list.map(c =>
              c.id === course.id ? { ...c, isPublished: false } : c
            )
          );
          this.showAlert('success', 'تم إلغاء نشر الدورة بنجاح.');
          this.processingCourseId.set(null);
        },
        error: () => {
          this.showAlert('error', 'تعذر إلغاء نشر الدورة حاليًا، يرجى المحاولة مرة أخرى لاحقًا.');
          this.processingCourseId.set(null);
        },
      });
    } else {
      // محاولة النشر: قد يرفضها السيرفر لو الدورة محتاجة موافقة الأدمن
      // (وده المتوقع دايمًا بعد أي إلغاء نشر سابق)
      this.coursesApi.publish(course.id).subscribe({
        next: () => {
          this.allCourses.update(list =>
            list.map(c =>
              c.id === course.id ? { ...c, isPublished: true } : c
            )
          );
          this.showAlert('success', 'تم نشر الدورة بنجاح.');
          this.processingCourseId.set(null);
        },
        error: (err) => {
          if (err?.status === 409) {
            this.showAlert(
              'success',
              'تم إرسال الدورة إلى الإدارة للمراجعة، ولن تظهر للطلاب حتى تتم الموافقة عليها.'
            );
          } else {
            this.showAlert('error', 'تعذر إرسال طلب النشر حاليًا، يرجى المحاولة مرة أخرى لاحقًا.');
          }
          this.processingCourseId.set(null);
        },
      });
    }
  }

  deleteCourse(course: Course): void {
    if (this.processingCourseId()) return;

    const confirmed = confirm(
      `متأكد إنك عايز تحذف كورس "${course.title}"؟ الإجراء ده مش قابل للتراجع.`
    );
    if (!confirmed) return;

    this.processingCourseId.set(course.id);
    this.coursesApi.deleteCourse(course.id).subscribe({
      next: () => {
        this.allCourses.update(list => list.filter(c => c.id !== course.id));
        this.totalCount.update(n => Math.max(0, n - 1));
        this.showAlert('success', 'تم حذف الدورة بنجاح.');
        this.processingCourseId.set(null);
      },
      error: () => {
        this.showAlert('error', 'تعذر حذف الدورة حاليًا، يرجى المحاولة مرة أخرى لاحقًا.');
        this.processingCourseId.set(null);
      },
    });
  }
}