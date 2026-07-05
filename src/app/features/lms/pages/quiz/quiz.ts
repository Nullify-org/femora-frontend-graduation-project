import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { QuizService } from '../../services/quiz.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Quiz as QuizModel, QuizAnswerRequest, SubmitQuizResult } from '../../../../core/models/api.model';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  templateUrl: './quiz.html',
})
export class Quiz {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly quizApi = inject(QuizService);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly notifications = inject(NotificationService);
  private readonly auth = inject(AuthService);

  readonly quiz = signal<QuizModel | null>(null);
  // Kept as a plain object on purpose: [(ngModel)]="answers[question.questionId]"
  // mutates it directly from user input and Angular picks it up via the form event.
  answers: Record<string, string> = {};
  readonly result = signal<SubmitQuizResult | null>(null);
  readonly isLoading = signal(true);
  readonly isSubmitting = signal(false);
  readonly isGenerating = signal(false);
  readonly isUnlocking = signal(false);
  readonly errorMessage = signal('');

  readonly moduleId = signal<string>('');
  readonly enrollmentId = signal<string>('');

  readonly answeredQuestionsCount = computed(() =>
    Object.values(this.answers).filter(Boolean).length,
  );

  readonly progressPercent = computed(() => {
    const total = this.quiz()?.questions?.length ?? 0;
    if (!total) return 0;
    return Math.round((this.answeredQuestionsCount() / total) * 100);
  });

  readonly remainingAttempts = computed(() => {
    const quiz = this.quiz();
    const result = this.result();
    if (!quiz || !result || result.isPassed) return null;

    const maxAttempts = quiz.maxAttempts ?? result.maxAttempts ?? 2;
    const usedAttempts = result.attemptNumber ?? 1;
    return Math.max(0, maxAttempts - usedAttempts);
  });

  readonly canRetry = computed(() => {
    return !!this.moduleId() && !!this.enrollmentId() && !!this.result() && !this.result()!.isPassed && (this.remainingAttempts() ?? 0) > 0;
  });

  constructor() {
    runInBrowser(() => {
      const userProfile = this.auth.activeProfile();
      const isTrainee = userProfile === 'Trainee' || userProfile === 'student';
      if (!isTrainee) {
        this.errorMessage.set('الاختبار متاح لملف المتدرب فقط');
        this.isLoading.set(false);
        return;
      }

      const id = this.route.snapshot.paramMap.get('id');
      const moduleId = this.route.snapshot.queryParamMap.get('moduleId') ?? '';
      const enrollmentId = this.route.snapshot.queryParamMap.get('enrollmentId') ?? '';

      if (!id) {
        this.errorMessage.set('معرّف الاختبار غير صالح');
        this.isLoading.set(false);
        return;
      }

      this.moduleId.set(moduleId);
      this.enrollmentId.set(enrollmentId);
      this.loadQuiz(id);
    });
  }

  private loadQuiz(id: string): void {
    this.isLoading.set(true);
    this.quizApi.getQuiz(id).subscribe({
      next: (quiz) => {
        this.quiz.set({ ...quiz, quizId: quiz.quizId ?? id });
        if (!this.moduleId() && quiz.moduleId) {
          this.moduleId.set(quiz.moduleId);
        }
        this.answers = {};
        this.result.set(null);
        this.errorMessage.set('');
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل الاختبار');
        this.isLoading.set(false);
      },
    });
  }

  submit(): void {
    const quiz = this.quiz();
    const enrollmentId = this.enrollmentId();
    if (!quiz?.quizId) {
      this.errorMessage.set('لا يوجد اختبار محدد');
      return;
    }

    if (!enrollmentId) {
      this.errorMessage.set('معرّف التسجيل مطلوب لإرسال الاختبار');
      return;
    }

    const answers: QuizAnswerRequest[] = Object.entries(this.answers).map(([questionId, choiceId]) => ({
      questionId,
      choiceId,
    }));

    if (!answers.length) {
      this.errorMessage.set('يرجى الإجابة على سؤال واحد على الأقل');
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.quizApi
      .submitQuiz(quiz.quizId, {
        enrollmentId,
        answers,
      })
      .subscribe({
        next: (result) => {
          this.result.set({
            ...result,
            maxScore: result.maxScore ?? quiz.questions?.length ?? 0,
          });
          this.isSubmitting.set(false);

          if (result.isPassed) {
            this.unlockNextModule();
          }
        },
        error: (err) => {
          this.isSubmitting.set(false);
          this.errorMessage.set(err?.error?.title ?? err?.error?.detail ?? 'تعذر إرسال الإجابات');
        },
      });
  }

  /** Automatic on a pass - no button, no extra click. */
  private unlockNextModule(): void {
    const moduleId = this.moduleId();
    const enrollmentId = this.enrollmentId();
    if (!moduleId) return;

    this.isUnlocking.set(true);
    this.enrollmentsApi.unlockNextModule(moduleId).subscribe({
      next: (res) => {
        this.isUnlocking.set(false);
        if (res.isLastModule && !res.unlockedModuleId) {
          this.notifications.success('مبروك! خلصتِ كل وحدات الدورة 🎉');
        } else {
          this.notifications.success(`ممتاز! اتفتحت الوحدة الجاية: ${res.unlockedModuleTitle ?? ''}`);
        }

        if (enrollmentId) {
          setTimeout(() => {
            this.router.navigate(['/lms/player', enrollmentId], {
              queryParams: { fromQuizModuleId: moduleId },
            });
          }, 900);
        }
      },
      error: () => {
        this.isUnlocking.set(false);
      },
    });
  }

  retryWithFreshQuiz(): void {
    const moduleId = this.moduleId() || this.quiz()?.moduleId || '';
    if (!moduleId) {
      this.errorMessage.set('لا يمكن إنشاء اختبار جديد بدون معرف الوحدة');
      return;
    }

    this.isGenerating.set(true);
    this.errorMessage.set('');

    this.quizApi.generateQuiz(moduleId, 5, 2).subscribe({
      next: (res) => {
        this.quizApi.getQuiz(res.quizId).subscribe({
          next: (quiz) => {
            this.quiz.set({ ...quiz, quizId: quiz.quizId ?? res.quizId });
            this.answers = {};
            this.result.set(null);
            this.isGenerating.set(false);
          },
          error: () => {
            this.isGenerating.set(false);
            this.errorMessage.set('تعذر تحميل الاختبار الجديد');
          },
        });
      },
      error: () => {
        this.isGenerating.set(false);
        this.errorMessage.set('تعذر إنشاء اختبار جديد');
      },
    });
  }

  backToCourse(): void {
    const enrollmentId = this.enrollmentId();
    if (enrollmentId) {
      this.router.navigate(['/lms/player', enrollmentId]);
    }
  }
}