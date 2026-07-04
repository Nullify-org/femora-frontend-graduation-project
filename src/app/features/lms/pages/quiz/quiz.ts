import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { QuizService } from '../../services/quiz.service';
import { LearningService } from '../../services/learning.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { Quiz as QuizModel, SubmitQuizResult } from '../../../../core/models/api.model';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  templateUrl: './quiz.html',
})
export class Quiz {
  private readonly route = inject(ActivatedRoute);
  private readonly quizApi = inject(QuizService);
  private readonly learningService = inject(LearningService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  quiz: QuizModel | null = null;
  answers: Record<string, string> = {};
<<<<<<< Updated upstream
  result: SubmitQuizResult | null = null;
  isLoading = true;
  isSubmitting = false;
  errorMessage = '';
=======
  readonly result = signal<SubmitQuizResult | null>(null);
  readonly isLoading = signal(true);
  readonly isSubmitting = signal(false);
  readonly isGenerating = signal(false);
  readonly errorMessage = signal('');
  readonly returnLink = signal<string[] | null>(null);

  readonly answeredQuestionsCount = computed(() =>
    Object.values(this.answers).filter(Boolean).length,
  );

  readonly progressPercent = computed(() => {
    const total = this.quiz()?.questions?.length ?? 0;
    if (!total) return 0;
    return Math.round((this.answeredQuestionsCount() / total) * 100);
  });
>>>>>>> Stashed changes

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id) {
        this.errorMessage = 'معرّف الاختبار غير صالح';
        this.isLoading = false;
        return;
      }

      this.quizApi.getById(id).subscribe({
        next: (quiz) => {
<<<<<<< Updated upstream
          this.quiz = { ...quiz, quizId: quiz.quizId ?? id };
          this.isLoading = false;
=======
          this.quiz.set({ ...quiz, quizId: quiz.quizId ?? id });
          if (quiz.courseId) {
            this.resolveReturnLink(quiz.courseId);
          }
          this.isLoading.set(false);
>>>>>>> Stashed changes
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل الاختبار';
          this.isLoading = false;
        },
      });
    });
  }

<<<<<<< Updated upstream
=======
  startQuiz(moduleId: string): void {
    this.isGenerating.set(true);
    this.errorMessage.set('');
    this.quizApi.generateQuiz(moduleId).subscribe({
      next: (res) => {
        this.quizApi.getQuiz(res.quizId).subscribe({
          next: (quiz) => {
            this.quiz.set({ ...quiz, quizId: quiz.quizId ?? res.quizId });
            if (quiz.courseId) {
              this.resolveReturnLink(quiz.courseId);
            }
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

>>>>>>> Stashed changes
  submit(): void {
    if (!this.quiz) return;

    const answers = Object.entries(this.answers).map(([questionId, choiceId]) => ({
      questionId,
      choiceId,
    }));

    if (!answers.length) {
      this.errorMessage = 'يرجى الإجابة على سؤال واحد على الأقل';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.quizApi
      .submit(this.quiz.quizId, {
        traineeProfileId: this.auth.user()?.id,
        answers,
      })
      .subscribe({
        next: (result) => {
          this.result = result;
          this.isSubmitting = false;
          this.notifications.success(result.isPassed ? 'أحسنتِ! نجحتِ في الاختبار' : 'حاولي مرة أخرى');
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err?.error?.title ?? err?.error?.detail ?? 'تعذّر إرسال الإجابات';
        },
      });
  }

  private resolveReturnLink(courseOrEnrollmentId: string): void {
    this.learningService.getCourseLearningData(courseOrEnrollmentId).subscribe({
      next: (details) => {
        this.returnLink.set(['/lms/player', details.enrollmentId]);
      },
      error: () => {
        this.returnLink.set(['/lms/course', courseOrEnrollmentId]);
      },
    });
  }
}
