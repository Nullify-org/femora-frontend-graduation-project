import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { LessonAiPanel } from '../../../ai-assistant/components/lesson-ai-panel/lesson-ai-panel.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { LearningService } from '../../services/learning.service';
import { QuizService } from '../../services/quiz.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';

import { EnrollmentDetailsResponse, EnrollmentLesson, EnrollmentModule } from '../../../../core/models/api.model';

type LessonContentKind = 'video' | 'pdf' | 'text' | 'link' | 'unknown';

@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar, LessonAiPanel],
  templateUrl: './course-player.html',
})
export class CoursePlayer {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly learningApi = inject(LearningService);
  private readonly quizApi = inject(QuizService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  readonly enrollment = signal<EnrollmentDetailsResponse | null>(null);
  readonly isMarkingComplete = signal(false);
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  readonly isUnlocking = signal(false);
  readonly isLaunchingQuiz = signal(false);
  readonly selectedModuleId = signal('');
  readonly selectedLessonId = signal('');
  readonly fromQuizModuleId = signal('');
  readonly autoQuizTriggered = signal(false);
  // Guards maybeAutoUnlockAfterQuiz so it only ever runs ONCE per navigation.
  // Without this, every loadEnrollment() call (including the one triggered by
  // unlockNextModule's own success handler) would see the same fromQuizModuleId
  // query param still set and call unlockNextModule again -> infinite toast loop.
  readonly autoUnlockHandled = signal(false);
  readonly showDebug = signal(false);

  readonly isTraineeProfile = computed(() => {
    const profile = this.auth.activeProfile();
    return profile === 'Trainee' || profile === 'student';
  });

  private enrollmentId = '';

  readonly selectedModule = computed<EnrollmentModule | null>(() => {
    const enrollment = this.enrollment();
    if (!enrollment) return null;

    const selectedId = this.selectedModuleId();
    return enrollment.modules.find((module) => module.moduleId === selectedId)
      ?? enrollment.modules.find((module) => module.isUnlocked)
      ?? enrollment.modules[0]
      ?? null;
  });

  readonly selectedLesson = computed<EnrollmentLesson | null>(() => {
    const module = this.selectedModule();
    if (!module) return null;

    const selectedLessonId = this.selectedLessonId();
    return module.lessons.find((lesson) => lesson.lessonId === selectedLessonId)
      ?? module.lessons.find((lesson) => !lesson.isCompleted)
      ?? module.lessons[0]
      ?? null;
  });

  readonly lessonCount = computed(() => this.selectedModule()?.lessons.length ?? 0);

  /** Index of the current lesson within its module (0-based), or -1 if none */
  readonly currentLessonIndex = computed(() => {
    const module = this.selectedModule();
    const lesson = this.selectedLesson();
    if (!module || !lesson) return -1;
    return module.lessons.findIndex((l) => l.lessonId === lesson.lessonId);
  });

  /** Next lesson in the same module, or null if this is the last one */
  readonly nextLesson = computed<EnrollmentLesson | null>(() => {
    const module = this.selectedModule();
    const idx = this.currentLessonIndex();
    if (!module || idx < 0) return null;
    return module.lessons[idx + 1] ?? null;
  });

  /** Previous lesson in the same module, or null if this is the first one */
  readonly prevLesson = computed<EnrollmentLesson | null>(() => {
    const module = this.selectedModule();
    const idx = this.currentLessonIndex();
    if (!module || idx <= 0) return null;
    return module.lessons[idx - 1] ?? null;
  });

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('enrollmentId');
      this.fromQuizModuleId.set(this.route.snapshot.queryParamMap.get('fromQuizModuleId') ?? '');

      if (!id) {
        this.errorMessage.set('معرّف التسجيل غير صالح');
        this.isLoading.set(false);
        return;
      }

      this.enrollmentId = id;
      this.loadEnrollment();
    });
  }

  toggleDebug(): void {
    this.showDebug.set(!this.showDebug());
  }

  readonly enrollmentJson = computed(() => JSON.stringify(this.enrollment(), null, 2));

  private isTraineeProfileAllowed(): boolean {
    return this.isTraineeProfile();
  }

  private loadEnrollment(): void {
    this.isLoading.set(true);

    this.enrollmentsApi.getEnrollmentDetails(this.enrollmentId).subscribe({
      next: (data) => {
        this.enrollment.set(data);
        this.isLoading.set(false);
        this.initializeSelection(data);
        this.maybeAutoUnlockAfterQuiz(data);
        this.maybeLaunchQuiz(data);
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل بيانات التسجيل');
        this.isLoading.set(false);
      },
    });
  }

  private initializeSelection(data: EnrollmentDetailsResponse): void {
    const preferredModule = data.modules.find((module) => module.isUnlocked && !module.isCompleted)
      ?? data.modules.find((module) => module.isUnlocked)
      ?? data.modules[0]
      ?? null;

    if (!preferredModule) return;

    this.selectedModuleId.set(preferredModule.moduleId);
    const preferredLesson = preferredModule.lessons.find((lesson) => !lesson.isCompleted)
      ?? preferredModule.lessons[0]
      ?? null;

    if (preferredLesson) {
      this.selectedLessonId.set(preferredLesson.lessonId);
    }
  }

  selectModule(module: EnrollmentModule): void {
    // A module stays locked in the UI until the previous module's quiz is passed.
    // Without this guard, users could click straight into a locked module and
    // read/watch its lessons even though isUnlocked is false.
    if (!module.isUnlocked) {
      this.notifications.info('هذه الوحدة مقفلة. أكملي دروس الوحدة الحالية واجتازي اختبارها لفتحها.');
      return;
    }

    this.selectedModuleId.set(module.moduleId);
    const nextLesson = module.lessons.find((lesson) => !lesson.isCompleted) ?? module.lessons[0];
    if (nextLesson) {
      this.selectedLessonId.set(nextLesson.lessonId);
    }
  }

  selectLesson(lesson: EnrollmentLesson): void {
    this.selectedLessonId.set(lesson.lessonId);
  }

  completeAndNext(): void {
    const lesson = this.selectedLesson();
    if (!lesson || lesson.isCompleted) {
      return;
    }

    this.isMarkingComplete.set(true);
    this.learningApi.markLessonComplete(lesson.lessonId).subscribe({
      next: () => {
        this.isMarkingComplete.set(false);
        this.loadEnrollment();

        const next = this.nextLesson();
        if (next) {
          this.selectedLessonId.set(next.lessonId);
        }
      },
      error: (err) => {
        this.isMarkingComplete.set(false);
        this.notifications.error(err?.error?.title ?? err?.error?.detail ?? 'تعذر إتمام الدرس');
      },
    });
  }

  private maybeLaunchQuiz(data: EnrollmentDetailsResponse): void {
    if (!this.isTraineeProfileAllowed() || this.autoQuizTriggered()) return;

    const module = this.selectedModule();
    // BUG FIX: module.isCompleted is only true once the quiz is ALSO passed, so
    // gating on it here made this condition impossible to satisfy - the quiz could
    // never auto-launch. What we actually need is "all lessons watched, quiz not
    // passed yet", which is exactly what allLessonsCompleted + !quizPassed gives us.
    if (!module || !module.allLessonsCompleted || module.quizPassed) return;

    this.autoQuizTriggered.set(true);
    this.startModuleQuiz(module.moduleId, data.enrollmentId);
  }

  private maybeAutoUnlockAfterQuiz(data: EnrollmentDetailsResponse): void {
    const moduleId = this.fromQuizModuleId();
    // Only ever handle this once. The quiz page has *already* unlocked the next
    // module and shown its own success toast before navigating here with
    // fromQuizModuleId - this is only a safety-net for the rare case that call
    // didn't go through. Without this guard, unlockNextModule()'s own
    // loadEnrollment() call would see the same query param again on every
    // subsequent load and re-trigger itself forever (the infinite toast loop).
    if (!moduleId || this.autoUnlockHandled()) return;

    const module = data.modules.find((item) => item.moduleId === moduleId);
    if (!module || !module.quizPassed) {
      return;
    }

    this.autoUnlockHandled.set(true);
    this.clearFromQuizQueryParam();

    // If the next module (by order) is already unlocked - most likely because
    // the quiz page's own unlock call already succeeded - there's nothing left
    // to do, and calling the endpoint again would just show a duplicate toast.
    const sortedModules = [...data.modules].sort((a, b) => a.orderIndex - b.orderIndex);
    const currentIndex = sortedModules.findIndex((item) => item.moduleId === moduleId);
    const nextModule = currentIndex >= 0 ? sortedModules[currentIndex + 1] : undefined;

    if (!nextModule || nextModule.isUnlocked) {
      return;
    }

    this.unlockNextModule(module.moduleId);
  }

  /** Removes fromQuizModuleId from the URL without reloading, so refreshing the page can't retrigger the auto-unlock. */
  private clearFromQuizQueryParam(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { fromQuizModuleId: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  startModuleQuiz(moduleId: string, enrollmentId = this.enrollmentId): void {
    if (!this.isTraineeProfileAllowed()) {
      this.notifications.info('الاختبار متاح لملف المتدرب فقط');
      return;
    }

    this.isLaunchingQuiz.set(true);
    this.quizApi.generateQuiz(moduleId, 5, 2).subscribe({
      next: (response) => {
        this.isLaunchingQuiz.set(false);
        this.router.navigate(['/lms/quiz', response.quizId], {
          queryParams: {
            moduleId,
            enrollmentId,
          },
        });
      },
      error: (err) => {
        this.isLaunchingQuiz.set(false);
        this.notifications.error(err?.error?.title ?? err?.error?.detail ?? 'تعذر إنشاء الاختبار');
      },
    });
  }

  unlockNextModule(moduleId: string): void {
    this.isUnlocking.set(true);

    this.enrollmentsApi.unlockNextModule(moduleId).subscribe({
      next: (response) => {
        this.isUnlocking.set(false);

        if (response.isLastModule) {
          this.notifications.success('لا توجد وحدات أخرى لفتحها');
        } else {
          this.notifications.success(`تم فتح: ${response.unlockedModuleTitle}`);
        }

        this.loadEnrollment();
      },
      error: (err) => {
        this.isUnlocking.set(false);
        this.notifications.error(
          err?.error?.title ?? err?.error?.detail ?? 'تعذر فتح الوحدة التالية'
        );
      },
    });
  }

  lessonContentKind(lesson: EnrollmentLesson): LessonContentKind {
    const rawContentUrl = (lesson.contentUrl ?? '').trim();
    const contentType = `${lesson.contentType ?? ''} ${lesson.contentMimeType ?? ''}`.toLowerCase().trim();
    const contentText = (lesson.contentText ?? '').trim();
    const contentUrl = rawContentUrl.toLowerCase();

    // No content at all
    if (!rawContentUrl && !contentText) return 'unknown';

    // Bare slash placeholder — no real content
    if (rawContentUrl === '/') return 'unknown';

    // PDF: check MIME type or file extension
    if (contentType.includes('pdf') || contentUrl.includes('.pdf')) return 'pdf';

    // Video: check MIME type first (most reliable), then file extension
    if (
      contentType.startsWith('video/') ||
      contentType.includes('video') ||
      /\.(mp4|webm|ogg|mov|avi|mkv)($|\?|#)/i.test(rawContentUrl) ||
      contentUrl.includes('youtube.com') ||
      contentUrl.includes('youtu.be') ||
      contentUrl.includes('vimeo.com')
    ) {
      return 'video';
    }

    // Text: explicit text content provided
    if (
      contentText ||
      contentType.includes('text') ||
      contentUrl.endsWith('.txt') ||
      contentUrl.endsWith('.md')
    ) {
      return 'text';
    }

    // Anything else with a URL → show as an openable link
    if (rawContentUrl) return 'link';

    return 'unknown';
  }

  lessonContentUrl(lesson: EnrollmentLesson): string {
    return (lesson.contentUrl ?? '').trim();
  }

  /** Sanitized URL for use in <video src=""> */
  safeVideoUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  /** Sanitized resource URL for use in <iframe src=""> */
  safeResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  lessonContentText(lesson: EnrollmentLesson): string {
    return (lesson.contentText ?? '').trim() || 'لا يوجد محتوى نصي لهذا الدرس بعد.';
  }

  isEmbedUrl(url: string): boolean {
    const u = url.toLowerCase();
    return (
      u.includes('youtube.com') ||
      u.includes('youtu.be') ||
      u.includes('vimeo.com')
    );
  }
}
