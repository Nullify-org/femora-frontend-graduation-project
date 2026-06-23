import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  ConversationDetail,
  ConversationSummary,
  RecommendedCourse,
  SendMessageResult,
} from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly base = `${environment.apiUrl}/api/ai`;

  constructor(private readonly http: HttpClient) {}

  sendMessage(message: string, conversationId?: string): Observable<SendMessageResult> {
    return this.http.post<SendMessageResult>(
      `${this.base}/chat`,
      { message, conversationId },
      { withCredentials: true },
    );
  }

  getConversations(): Observable<ConversationSummary[]> {
    return this.http.get<ConversationSummary[]>(`${this.base}/conversations`, {
      withCredentials: true,
    });
  }

  getConversation(id: string): Observable<ConversationDetail> {
    return this.http.get<ConversationDetail>(`${this.base}/conversations/${id}`, {
      withCredentials: true,
    });
  }

  setInterests(courseCategoryIds: string[], productCategoryIds: string[]): Observable<unknown> {
    return this.http.post(
      `${this.base}/interests`,
      { courseCategoryIds, productCategoryIds },
      { withCredentials: true },
    );
  }

  recommendedCourses(top = 6): Observable<RecommendedCourse[]> {
    return this.http.get<RecommendedCourse[]>(`${this.base}/recommendations/courses`, {
      params: { top: String(top) },
      withCredentials: true,
    });
  }
}
