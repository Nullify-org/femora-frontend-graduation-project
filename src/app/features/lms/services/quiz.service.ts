import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import { Quiz as QuizModel, SubmitQuizResult } from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/quizzes';

  generate(moduleId: string, questionCount = 5): Observable<{ quizId: string }> {
    return this.api.post<{ quizId: string }>(
      `${this.base}/generate`,
      { moduleId, questionCount },
    );
  }

  getById(quizId: string): Observable<QuizModel> {
    return this.api.get<QuizModel>(`${this.base}/${quizId}`);
  }

  submit(
    quizId: string,
    body: { traineeProfileId?: string; answers: { questionId: string; choiceId: string }[] },
  ): Observable<SubmitQuizResult> {
    return this.api.post<SubmitQuizResult>(`${this.base}/${quizId}/submit`, body);
  }
}
