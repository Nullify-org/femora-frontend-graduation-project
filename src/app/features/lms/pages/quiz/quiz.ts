import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { QuizService } from '../../services/quiz.service';
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
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  quiz: QuizModel | null = null;
  answers: Record<string, string> = {};
  result: SubmitQuizResult | null = null;
  isLoading = true;
  isSubmitting = false;
  errorMessage = '';

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
          this.quiz = { ...quiz, quizId: quiz.quizId ?? id };
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل الاختبار';
          this.isLoading = false;
        },
      });
    });
  }

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
}
