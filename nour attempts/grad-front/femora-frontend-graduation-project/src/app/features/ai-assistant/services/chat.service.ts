import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import {
  ConversationDetail,
  ConversationSummary,
  RecommendedCourse,
  SendMessageResult,
} from '../../../core/models/api.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly api = inject(ApiClient);
  private readonly base = '/api/ai';

  sendMessage(message: string, conversationId?: string): Observable<SendMessageResult> {
    return this.api.post<SendMessageResult>(
      `${this.base}/chat`,
      { message, conversationId },
    );
  }

  getConversations(): Observable<ConversationSummary[]> {
    return this.api.get<ConversationSummary[]>(`${this.base}/conversations`);
  }

  getConversation(id: string): Observable<ConversationDetail> {
    return this.api.get<ConversationDetail>(`${this.base}/conversations/${id}`);
  }

  setInterests(courseCategoryIds: string[], productCategoryIds: string[]): Observable<unknown> {
    return this.api.post(
      `${this.base}/interests`,
      { courseCategoryIds, productCategoryIds },
    );
  }

  recommendedCourses(top = 6): Observable<RecommendedCourse[]> {
    return this.api.get<RecommendedCourse[]>(`${this.base}/recommendations/courses`, {
      params: { top: String(top) },
    });
  }
}
