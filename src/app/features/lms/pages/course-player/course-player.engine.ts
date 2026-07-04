import { Injectable, inject, signal, computed } from '@angular/core';
import {
  EnrollmentDetailsResponse,
  EnrollmentModule,
  EnrollmentLesson,
} from '../../../../core/models/api.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { LearningService } from '../../services/learning.service';
import { sortByOrderIndex } from '../../core/utils/module-order.util';
import { findFirstOpenLesson, findNextLesson, isModuleLessonsComplete } from '../../core/utils/lesson-flow.util';
import { calculateProgressPercent } from '../../core/utils/progress.util';

/**
 * Owns all state + rules for the trainee course-player screen:
 * - loads the enrollment (modules/lessons + lock state)
 * - auto-opens module 1 / lesson 1 on first load
 * - enforces sequential lesson unlocking (no skipping)
 * - on lesson completion: advances automatically, and when a module's
 *   lessons are all done, calls unlock-next-module before moving on
 *
 * Injected with `providedIn: 'root'` for simplicity; if you want isolated
 * state per route instead, provide it in the course-player route config.
 */
@Injectable({ providedIn: 'root' })
export class CoursePlayerEngine {
  private readonly enrollmentApi = inject(EnrollmentService);
  private readonly learningService = inject(LearningService);

  private readonly _enrollmentId = signal<string | null>(null);
  private readonly _details = signal<EnrollmentDetailsResponse | null>(null);
  private readonly _currentModuleId = signal<string | null>(null);
  private readonly _currentLessonId = signal<string | null>(null);

  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  /** True while unlock-next-module / lesson-complete calls are in flight (disables buttons). */
  readonly isAdvancing = signal(false);

  readonly details = this._details.asReadonly();

  readonly modules = computed<EnrollmentModule[]>(() =>
    sortByOrderIndex(this._details()?.modules ?? []),
  );

  readonly currentModule = computed<EnrollmentModule | null>(
    () => this.modules().find((m) => m.moduleId === this._currentModuleId()) ?? null,
  );

  readonly currentLesson = computed<EnrollmentLesson | null>(() => {
    const mod = this.currentModule();
    if (!mod) return null;
    return sortByOrderIndex(mod.lessons).find((lesson: EnrollmentLesson) => lesson.lessonId === this._currentLessonId()) ?? null;
  });

  readonly progressPercent = computed(() => calculateProgressPercent(this.modules()));

  readonly isCourseComplete = computed(() => this._details()?.isCompleted ?? false);
  readonly enrollmentId = this._enrollmentId.asReadonly();

  /** Load (or reload) the enrollment for a course and auto-open the right lesson. */
  load(enrollmentIdOrCourseId: string): void {
    this._enrollmentId.set(enrollmentIdOrCourseId);
    this.isLoading.set(true);
    this.error.set(null);

    this.learningService.getCourseLearningData(enrollmentIdOrCourseId).subscribe({
      next: (details) => {
        console.debug('[CoursePlayerEngine] loaded enrollment details', { enrollmentIdOrCourseId, details });
        this._enrollmentId.set(details.enrollmentId);
        const normalized = this.normalizeEnrollmentDetails(details);
        console.debug('[CoursePlayerEngine] normalized enrollment details', { enrollmentIdOrCourseId, normalized });
        this._details.set(normalized);
        this.isLoading.set(false);
        this.autoOpenEntryPoint(normalized);
      },
      error: () => {
        this.isLoading.set(false);
        this.error.set('تعذر تحميل الدورة، حاول تاني.');
      },
    });
  }

  private normalizeEnrollmentDetails(details: EnrollmentDetailsResponse): EnrollmentDetailsResponse {
    if (!details.modules?.length) {
      return details;
    }

    const hasUnlockedModule = details.modules.some((module) => module.isUnlocked);
    if (hasUnlockedModule) {
      return details;
    }

    return {
      ...details,
      modules: details.modules.map((module, index) => ({
        ...module,
        isUnlocked: index === 0,
      })),
    };
  }

  /** Opens module 1 → first incomplete lesson (or first lesson overall) on entry. */
  private autoOpenEntryPoint(details: EnrollmentDetailsResponse): void {
    const found = findFirstOpenLesson(details.modules);
    if (found) {
      this._currentModuleId.set(found.module.moduleId);
      this._currentLessonId.set(found.lesson.lessonId);
      return;
    }

    const completedPendingQuiz = details.modules.find(
      (module) => module.isUnlocked && isModuleLessonsComplete(module) && !module.quizPassed,
    );

    if (completedPendingQuiz) {
      this._currentModuleId.set(completedPendingQuiz.moduleId);
      this._currentLessonId.set(completedPendingQuiz.lessons[0]?.lessonId ?? null);
    }
  }

  /**
   * Manually open a lesson. Enforces sequential unlocking: refuses to jump to a
   * lesson if an earlier lesson in the same unlocked module isn't completed yet.
   */
  openLesson(moduleId: string, lessonId: string): void {
    const mod = this.modules().find((m) => m.moduleId === moduleId);
    if (!mod || !mod.isUnlocked) return;

    const lessons = sortByOrderIndex(mod.lessons);
    const targetIndex = lessons.findIndex((lesson: EnrollmentLesson) => lesson.lessonId === lessonId);
    if (targetIndex === -1) return;

    const firstIncompleteIndex = lessons.findIndex((lesson: EnrollmentLesson) => !lesson.isCompleted);
    const isReachable = firstIncompleteIndex === -1 || targetIndex <= firstIncompleteIndex;
    if (!isReachable) return; // no skipping ahead of an incomplete lesson

    this._currentModuleId.set(moduleId);
    this._currentLessonId.set(lessonId);
  }

  canOpenLesson(module: EnrollmentModule, lessonId: string): boolean {
    if (!module.isUnlocked) return false;

    const lessons = sortByOrderIndex(module.lessons);
    const targetIndex = lessons.findIndex((lesson: EnrollmentLesson) => lesson.lessonId === lessonId);
    if (targetIndex === -1) return false;

    const firstIncompleteIndex = lessons.findIndex((lesson: EnrollmentLesson) => !lesson.isCompleted);
    return firstIncompleteIndex === -1 || targetIndex <= firstIncompleteIndex;
  }

  /**
   * Marks the current lesson completed, reloads backend enrollment state,
   * and navigates to the next lesson.
   */
  completeCurrentLesson(): void {
    const enrollmentId = this._enrollmentId();
    const lesson = this.currentLesson();
    if (!enrollmentId || !lesson || lesson.isCompleted) return;

    this.error.set(null);
    this.isAdvancing.set(true);

    this.enrollmentApi.markLessonCompleted(lesson.lessonId).subscribe({
      next: () => {
        this.enrollmentApi.getEnrollmentDetails(enrollmentId).subscribe({
          next: (details) => {
            const normalized = this.normalizeEnrollmentDetails(details);
            this._details.set(normalized);
            this.navigateToNextLesson(lesson.lessonId, normalized);
            this.isAdvancing.set(false);
          },
          error: (error) => {
            this.isAdvancing.set(false);
            this.error.set(this.getApiErrorMessage(error, 'تعذر إكمال الدرس، حاول مرة أخرى'));
          },
        });
      },
      error: (error) => {
        this.isAdvancing.set(false);
        this.error.set(this.getApiErrorMessage(error, 'تعذر إكمال الدرس، حاول مرة أخرى'));
      },
    });
  }

  private navigateToNextLesson(currentLessonId: string, details: EnrollmentDetailsResponse): void {
    const next = findNextLesson(sortByOrderIndex(details.modules), currentLessonId);
    if (!next) {
      return;
    }

    this._currentModuleId.set(next.module.moduleId);
    this._currentLessonId.set(next.lesson.lessonId);
  }

  private getApiErrorMessage(error: any, fallback: string): string {
    return (
      error?.error?.message ||
      error?.error?.title ||
      error?.message ||
      fallback
    );
  }

  unlockNextModuleAfterQuiz(moduleId: string): void {
    const enrollmentId = this._enrollmentId();
    if (!enrollmentId) return;

    this.isAdvancing.set(true);
    this.enrollmentApi.unlockNextModule(enrollmentId, moduleId).subscribe({
      next: (result) => {
        this.isAdvancing.set(false);
        this.load(enrollmentId);
      },
      error: () => {
        this.isAdvancing.set(false);
        this.error.set('تعذر فتح الوحدة التالية بعد اجتياز الكويز. حاول مرة أخرى.');
      },
    });
  }
}