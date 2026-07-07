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

  generateQuiz(moduleId: string, questionCount = 5, maxAttempts = 2): Observable<GenerateQuizResponse> {
    return this.api.post<GenerateQuizResponse>(`${this.base}/generate`, {
      moduleId,
      questionCount,
      maxAttempts,
      minimumPassingScore: 60,
    }).pipe(
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
      maxAttempts: typeof response['maxAttempts'] === 'number' ? response['maxAttempts'] : 2,
      questions,
    };
  }

  private mapSubmitResult(response: Record<string, unknown>): SubmitQuizResult {
    const payload = this.getResultPayload(response);
    const score = this.getNumber(payload, ['score', 'totalScore', 'obtainedScore', 'earnedScore', 'points']) ?? 0;
    const maxScore = this.getNumber(payload, ['maxScore', 'maximumScore', 'totalMaxScore', 'fullMarks', 'totalScorePossible']) ?? undefined;
    const isPassed = this.getBoolean(payload, ['isPassed', 'passed', 'success', 'succeeded'])
      ?? (typeof payload['status'] === 'string' ? payload['status'].toLowerCase() === 'passed' : false);

    return {
      quizAttemptId: typeof payload['quizAttemptId'] === 'string' ? payload['quizAttemptId'] : undefined,
      score,
      maxScore,
      isPassed,
      attemptNumber: this.getNumber(payload, ['attemptNumber', 'attempt', 'currentAttempt']) ?? undefined,
      maxAttempts: this.getNumber(payload, ['maxAttempts', 'allowedAttempts']) ?? undefined,
      answerResults: Array.isArray(payload['answerResults'])
        ? (payload['answerResults'] as Array<Record<string, unknown>>).map((item) => ({
            questionId: String(item['questionId'] ?? ''),
            isCorrect: item['isCorrect'] === true,
          }))
        : [],
    };
  }

  private getResultPayload(response: Record<string, unknown>): Record<string, unknown> {
    const candidates = [response['data'], response['result'], response['quizResult']];
    for (const candidate of candidates) {
      if (this.isRecord(candidate)) {
        return candidate;
      }
    }
    return response;
  }

  private getNumber(payload: Record<string, unknown>, keys: string[]): number | undefined {
    for (const key of keys) {
      const value = payload[key];
      if (typeof value === 'number') {
        return value;
      }
    }
    return undefined;
  }

  private getBoolean(payload: Record<string, unknown>, keys: string[]): boolean | undefined {
    for (const key of keys) {
      const value = payload[key];
      if (typeof value === 'boolean') {
        return value;
      }
      if (typeof value === 'string') {
        const normalized = value.toLowerCase();
        if (normalized === 'true' || normalized === 'passed' || normalized === 'success') {
          return true;
        }
        if (normalized === 'false' || normalized === 'failed') {
          return false;
        }
      }
    }
    return undefined;
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
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
