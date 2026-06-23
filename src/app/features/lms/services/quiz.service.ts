import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Quiz as QuizModel, SubmitQuizResult } from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly base = `${environment.apiUrl}/api/quizzes`;

  constructor(private readonly http: HttpClient) {}

  generate(moduleId: string, questionCount = 5): Observable<{ quizId: string }> {
    return this.http.post<{ quizId: string }>(
      `${this.base}/generate`,
      { moduleId, questionCount },
      { withCredentials: true },
    );
  }

  getById(quizId: string): Observable<QuizModel> {
    return this.http.get<QuizModel>(`${this.base}/${quizId}`, { withCredentials: true });
  }

  submit(
    quizId: string,
    body: { traineeProfileId?: string; answers: { questionId: string; choiceId: string }[] },
  ): Observable<SubmitQuizResult> {
    return this.http.post<SubmitQuizResult>(`${this.base}/${quizId}/submit`, body, {
      withCredentials: true,
    });
  }
}
