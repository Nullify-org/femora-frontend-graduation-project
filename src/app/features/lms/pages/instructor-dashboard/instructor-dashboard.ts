import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { ApprovalService } from '../../../../core/services/approval.service';
import { CourseService } from '../../../lms/services/course.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { InstructorStatsService, InstructorStats } from '../../../../core/services/instructor-stats.service';
import { Course } from '../../../../core/models/api.model';
import { formatPrice, courseEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { SwitchRole } from '../../../dashboard/widgets/switch-role/switch-role';

@Component({
  selector: 'app-instructor-dashboard',
  standalone: true,
  imports: [Sidebar, FormsModule, RouterLink, SwitchRole],
  templateUrl: './instructor-dashboard.html',
})
export class InstructorDashboard implements OnInit {
  readonly auth = inject(AuthService);
  private readonly coursesApi = inject(CourseService);
  private readonly approvalsApi = inject(ApprovalService);
  private readonly notifications = inject(NotificationService);
  private readonly statsApi = inject(InstructorStatsService);

  readonly courses = signal<Course[]>([]);
  readonly showApply = signal(false);
  readonly showCreate = signal(false);

  // Dashboard cards (statistics) + recent-courses section — real data from
  // GET /api/courses/my/stats instead of the hardcoded placeholder numbers.
  readonly stats = signal<InstructorStats | null>(null);
  readonly statsLoading = signal(true);

  readonly formatPrice = formatPrice;
  readonly courseEmoji = courseEmoji;

  applyBio = '';
  applyPortfolio = '';
  newCourse = {
    title: '',
    description: '',
    price: 0,
    category: 'Development',
    language: 'ar',
    level: 'Beginner',
  };

  ngOnInit(): void {
    runInBrowser(() => {
      this.loadCourses();
      this.loadStats();
    });
  }

  loadCourses(): void {
    this.coursesApi.getCourses({
      pageSize: 50,
      pageNumber: 1,
    }).subscribe({
      next: (response) => this.courses.set(response.data),
      error: () => this.courses.set([]),
    });
  }

  loadStats(): void {
    this.statsLoading.set(true);
    this.statsApi.get().subscribe({
      next: (data) => { this.stats.set(data); this.statsLoading.set(false); },
      error: () => { this.statsLoading.set(false); },
    });
  }

  applyInstructor(): void {
    const bio = this.applyBio.trim();
    if (!bio) {
      this.notifications.error('السيرة الذاتية مطلوبة');
      return;
    }
    this.approvalsApi.applyInstructor(bio, this.applyPortfolio || undefined).subscribe({
      next: () => {
        this.notifications.success('تم إرسال طلبك — قيد المراجعة');
        this.showApply.set(false);
      },
      error: () => this.notifications.error('فشل إرسال الطلب'),
    });
  }

  createCourse(): void {
    if (!this.newCourse.title.trim()) {
      this.notifications.error('عنوان الدورة مطلوب');
      return;
    }
    this.coursesApi
      .create({
        instructorProfileId: this.auth.user()?.id,
        ...this.newCourse,
      })
      .subscribe({
        next: () => {
          this.notifications.success('تم إنشاء الدورة');
          this.showCreate.set(false);
          this.newCourse = { title: '', description: '', price: 0, category: 'Development', language: 'ar', level: 'Beginner' };
          this.loadCourses();
          this.loadStats();
        },
        error: () => this.notifications.error('فشل إنشاء الدورة'),
      });
  }

  publishCourse(id: string): void {
    this.coursesApi.publish(id).subscribe({
      next: () => {
        this.notifications.success('تم إرسال الدورة للموافقة');
        this.loadCourses();
        this.loadStats();
      },
      error: () => this.notifications.error('فشل نشر الدورة'),
    });
  }
}
