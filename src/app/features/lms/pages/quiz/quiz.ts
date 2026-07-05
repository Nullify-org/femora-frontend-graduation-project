import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { QuizService } from '../../services/quiz.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { NotificationService } from '../../../../core/services/notification.service';
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

  readonly quiz = signal<QuizModel | null>(null);
  // Kept as a plain object on purpose: [(ngModel)]="answers[question.questionId]"
  // mutates it directly from user input (a template-bound DOM event), which
  // already schedules change detection on its own in zoneless mode.
  answers: Record<string, string> = {};
  readonly result = signal<SubmitQuizResult | null>(null);
  readonly isLoading = signal(true);
  readonly isSubmitting = signal(false);
  readonly isGenerating = signal(false);
  readonly isUnlocking = signal(false);
  readonly errorMessage = signal('');

  /** Comes from the lesson player's redirect after completing the module's last lesson. */
  enrollmentId = '';
  moduleId = '';

  readonly answeredQuestionsCount = computed(() =>
    Object.values(this.answers).filter(Boolean).length,
  );

  readonly progressPercent = computed(() => {
    const total = this.quiz()?.questions?.length ?? 0;
    if (!total) return 0;
    return Math.round((this.answeredQuestionsCount() / total) * 100);
  });

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      this.enrollmentId = this.route.snapshot.queryParamMap.get('enrollmentId') ?? '';
      this.moduleId = this.route.snapshot.queryParamMap.get('moduleId') ?? '';

      if (!id) {
        this.errorMessage.set('معرّف الاختبار غير صالح');
        this.isLoading.set(false);
        return;
      }

      this.quizApi.getQuiz(id).subscribe({
        next: (quiz) => {
          this.quiz.set({ ...quiz, quizId: quiz.quizId ?? id });
          this.moduleId = this.moduleId || quiz.moduleId || '';
          this.isLoading.set(false);
        },
        error: () => {
          this.errorMessage.set('تعذّر تحميل الاختبار');
          this.isLoading.set(false);
        },
      });
    });
  }

  startQuiz(moduleId: string): void {
    this.isGenerating.set(true);
    this.errorMessage.set('');
    this.quizApi.generateQuiz(moduleId).subscribe({
      next: (res) => {
        this.quizApi.getQuiz(res.quizId).subscribe({
          next: (quiz) => {
            this.quiz.set({ ...quiz, quizId: quiz.quizId ?? res.quizId });
            this.answers = {};
            this.result.set(null);
            this.isLoading.set(false);
            this.isGenerating.set(false);
          },
          error: () => {
            this.isGenerating.set(false);
            this.errorMessage.set('تعذّر إنشاء الاختبار');
            this.isLoading.set(false);
          },
        });
      },
      error: () => {
        this.isGenerating.set(false);
        this.errorMessage.set('تعذّر إنشاء الاختبار');
        this.isLoading.set(false);
      },
    });
  }

  submit(): void {
    const quiz = this.quiz();
    if (!quiz?.quizId) {
      this.errorMessage.set('لا يوجد اختبار محدد');
      return;
    }

    if (!this.enrollmentId) {
      this.errorMessage.set('لا يمكن إرسال الاختبار بدون معرّف التسجيل فى الدورة');
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
        enrollmentId: this.enrollmentId,
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
          this.errorMessage.set(err?.error?.title ?? err?.error?.detail ?? 'تعذّر إرسال الإجابات');
        },
      });
  }

  /** Automatic on a pass - no button, no extra click. */
  private unlockNextModule(): void {
    if (!this.moduleId) return;

    this.isUnlocking.set(true);
    this.enrollmentsApi.unlockNextModule(this.moduleId).subscribe({
      next: (res) => {
        this.isUnlocking.set(false);
        if (res.isLastModule && !res.unlockedModuleId) {
          this.notifications.success('مبروك! خلصتِ كل وحدات الدورة 🎉');
        } else {
          this.notifications.success(`اتفتحت الوحدة الجاية: ${res.unlockedModuleTitle ?? ''}`);
        }
      },
      error: () => {
        this.isUnlocking.set(false);
      },
    });
  }

  backToCourse(): void {
    if (this.enrollmentId) {
      this.router.navigate(['/lms/player', this.enrollmentId]);
    }
  }
}
