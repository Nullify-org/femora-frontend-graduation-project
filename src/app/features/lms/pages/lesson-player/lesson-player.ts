import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { LessonAiPanel } from '../../../ai-assistant/components/lesson-ai-panel/lesson-ai-panel.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { LessonService } from '../../services/lesson.service';
import { LearningService } from '../../services/learning.service';
import { NotificationService } from '../../../../core/services/notification.service';

import { EnrollmentDetailsResponse, LessonDetails } from '../../../../core/models/api.model';

interface FlatLesson {
  lessonId: string;
  title: string;
  isCompleted: boolean;
  moduleId: string;
  moduleTitle: string;
  moduleIsUnlocked: boolean;
}

@Component({
  selector: 'app-lesson-player',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar, LessonAiPanel] as const,
  templateUrl: './lesson-player.html',
})
export class LessonPlayer {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly lessonsApi = inject(LessonService);
  private readonly learningApi = inject(LearningService);
  private readonly notifications = inject(NotificationService);

  readonly enrollment = signal<EnrollmentDetailsResponse | null>(null);
  readonly lesson = signal<LessonDetails | null>(null);

  readonly isLoadingEnrollment = signal(true);
  readonly isLoadingLesson = signal(true);
  readonly isMarkingComplete = signal(false);
  readonly errorMessage = signal('');
  readonly videoError = signal(false);
  readonly videoLoading = signal(true);

  /** Controls the visibility of the "محتوى الدورة" sidebar on the lesson page. */
  readonly isContentSidebarOpen = signal(true);

  toggleContentSidebar(): void {
    this.isContentSidebarOpen.update((open) => !open);
  }

  enrollmentId = '';
  lessonId = '';

  /** All lessons across all modules, in order, for prev/next navigation and the side list. */
  readonly flatLessons = computed<FlatLesson[]>(() => {
    const data = this.enrollment();
    if (!data) return [];

    return data.modules
      .slice()
      .sort((a, b) => a.orderIndex - b.orderIndex)
      .flatMap((module) =>
        module.lessons
          .slice()
          .sort((a, b) => a.orderIndex - b.orderIndex)
          .map((l) => ({
            lessonId: l.lessonId,
            title: l.title,
            isCompleted: l.isCompleted,
            moduleId: module.moduleId,
            moduleTitle: module.title,
            moduleIsUnlocked: module.isUnlocked,
          })),
      );
  });

  readonly currentIndex = computed(() =>
    this.flatLessons().findIndex((l) => l.lessonId === this.lessonId),
  );

  readonly previousLesson = computed(() => {
    const idx = this.currentIndex();
    return idx > 0 ? this.flatLessons()[idx - 1] : null;
  });

  readonly nextLesson = computed(() => {
    const idx = this.currentIndex();
    const list = this.flatLessons();
    return idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const enrollmentId = params.get('enrollmentId');
      const lessonId = params.get('lessonId');

      if (!enrollmentId || !lessonId) {
        this.errorMessage.set('بيانات الدرس غير صالحة');
        this.isLoadingEnrollment.set(false);
        this.isLoadingLesson.set(false);
        return;
      }

      this.lessonId = lessonId;
      this.loadLesson(lessonId);

      if (enrollmentId !== this.enrollmentId) {
        this.enrollmentId = enrollmentId;
        this.loadEnrollment(enrollmentId);
      }
    });
  }

  private loadEnrollment(enrollmentId: string): void {
    this.isLoadingEnrollment.set(true);

    this.enrollmentsApi.getEnrollmentDetails(enrollmentId).subscribe({
      next: (data) => {
        this.enrollment.set(data);
        this.isLoadingEnrollment.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل بيانات التسجيل');
        this.isLoadingEnrollment.set(false);
      },
    });
  }

  private loadLesson(lessonId: string): void {
    this.isLoadingLesson.set(true);
    this.videoError.set(false);
    this.videoLoading.set(true);
    this.lesson.set(null);

    this.lessonsApi.getById(lessonId).subscribe({
      next: (data) => {
        this.lesson.set(data);
        this.isLoadingLesson.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل الدرس');
        this.isLoadingLesson.set(false);
      },
    });
  }

  onVideoError(): void {
    this.videoError.set(true);
    this.videoLoading.set(false);
  }

  onVideoReady(): void {
    this.videoLoading.set(false);
  }

  /** Re-fetches the lesson to get a fresh (non-expired) SAS URL and retries playback. */
  retryVideo(): void {
    if (!this.lessonId) return;
    this.loadLesson(this.lessonId);
  }

  goToLesson(target: FlatLesson): void {
    if (!target.moduleIsUnlocked) {
      this.notifications.info('الوحدة دى لسه مقفولة');
      return;
    }
    this.router.navigate(['/lms/player', this.enrollmentId, 'lesson', target.lessonId]);
  }

  markComplete(): void {
    if (!this.lessonId) return;
    this.isMarkingComplete.set(true);

    this.learningApi.markLessonComplete(this.lessonId).subscribe({
      next: (res) => {
        this.isMarkingComplete.set(false);

        if (res.isLastLessonInModule && res.moduleQuizId) {
          this.notifications.info('خلصتِ آخر درس فى الوحدة دى - يلا نبدأ الاختبار');
          this.router.navigate(['/lms/quiz', res.moduleQuizId], {
            queryParams: { enrollmentId: this.enrollmentId, moduleId: res.moduleId },
          });
          return;
        }

        this.loadEnrollment(this.enrollmentId);

        const next = this.nextLesson();
        if (next) this.goToLesson(next);
      },
      error: () => this.isMarkingComplete.set(false),
    });
  }
}
