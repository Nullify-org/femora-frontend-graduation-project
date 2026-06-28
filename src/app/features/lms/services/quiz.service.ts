import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiClient } from '../../../core/services/api-client.service';
import {
  GenerateQuizResponse,
  Quiz as QuizModel,
  QuizSubmissionRequest,
  SubmitQuizResult,
} from '../../../core/models/api.model';
import { NotificationService } from '../../../core/services/notification.service';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly api = inject(ApiClient);
  private readonly notifications = inject(NotificationService);
  private readonly base = '/api/quizzes';

  generateQuiz(moduleId: string, questionCount = 5): Observable<GenerateQuizResponse> {
    return this.api.post<GenerateQuizResponse>(`${this.base}/generate`, { moduleId, questionCount }).pipe(
      tap(() => this.notifications.success('تم إنشاء الاختبار بنجاح')),
    );
  }

  getQuiz(quizId: string): Observable<QuizModel> {
    return this.api.get<unknown>(`${this.base}/${quizId}`).pipe(
      map((response) => this.mapQuizResponse(response as Record<string, unknown>)),
    );
  }

  submitQuiz(quizId: string, body: QuizSubmissionRequest): Observable<SubmitQuizResult> {
    const payload = {
      enrollmentId: body.enrollmentId ?? body.traineeProfileId,
      answers: body.answers,
    };

    return this.api.post<unknown>(`${this.base}/${quizId}/submit`, payload).pipe(
      map((response) => this.mapSubmitResult(response as Record<string, unknown>)),
      tap((result) => {
        const message = result.isPassed ? 'أحسنت! نجحت في الاختبار' : 'تم إرسال الإجابات بنجاح';
        this.notifications.success(message);
      }),
    );
  }

  private mapQuizResponse(response: Record<string, unknown>): QuizModel {
    const questions = Array.isArray(response['questions'])
      ? (response['questions'] as Array<Record<string, unknown>>).map((question) => ({
          questionId: String(question['questionId'] ?? ''),
          text: typeof question['text'] === 'string' ? question['text'] : null,
          choices: Array.isArray(question['choices'])
            ? (question['choices'] as Array<Record<string, unknown>>).map((choice) => ({
                choiceId: String(choice['choiceId'] ?? ''),
                text: typeof choice['text'] === 'string' ? choice['text'] : null,
                order: typeof choice['order'] === 'number' ? choice['order'] : undefined,
              }))
            : [],
        }))
      : [];

    return {
      quizId: String(response['quizId'] ?? ''),
      title: typeof response['title'] === 'string' ? response['title'] : 'الاختبار',
      courseId: typeof response['courseId'] === 'string' ? response['courseId'] : undefined,
      moduleId: typeof response['moduleId'] === 'string' ? response['moduleId'] : null,
      minimumPassingScore: typeof response['minimumPassingScore'] === 'number' ? response['minimumPassingScore'] : (typeof response['passPercentage'] === 'number' ? response['passPercentage'] : 60),
      maxAttempts: typeof response['maxAttempts'] === 'number' ? response['maxAttempts'] : 3,
      questions,
    };
  }

  private mapSubmitResult(response: Record<string, unknown>): SubmitQuizResult {
    const score = typeof response['score'] === 'number' ? response['score'] : 0;
    const maxScore = typeof response['maxScore'] === 'number' ? response['maxScore'] : undefined;

    return {
      quizAttemptId: typeof response['quizAttemptId'] === 'string' ? response['quizAttemptId'] : undefined,
      score,
      maxScore,
      isPassed: response['isPassed'] === true,
      attemptNumber: typeof response['attemptNumber'] === 'number' ? response['attemptNumber'] : undefined,
      answerResults: Array.isArray(response['answerResults'])
        ? (response['answerResults'] as Array<Record<string, unknown>>).map((item) => ({
            questionId: String(item['questionId'] ?? ''),
            isCorrect: item['isCorrect'] === true,
          }))
        : [],
    };
  }

  // Backward-compatible wrappers for any older page/component usage.
  generate(moduleId: string, questionCount = 5): Observable<GenerateQuizResponse> {
    return this.generateQuiz(moduleId, questionCount);
  }

  getById(quizId: string): Observable<QuizModel> {
    return this.getQuiz(quizId);
  }

  submit(quizId: string, body: QuizSubmissionRequest): Observable<SubmitQuizResult> {
    return this.submitQuiz(quizId, body);
  }
}
