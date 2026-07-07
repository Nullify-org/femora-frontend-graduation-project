import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from '../../../core/services/api-client.service';
import {
  ChatWithLessonResult,
  ConversationDetail,
  ConversationSummary,
  MyInterestsResponse,
  RecommendedCourse,
  RecommendedProduct,
  SendMessageResult,
  SuggestedQuestion,
  SummarizeLessonResult,
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

  deleteConversation(id: string): Observable<unknown> {
    return this.api.delete(`${this.base}/conversations/${id}`);
  }

  renameConversation(id: string, title: string): Observable<unknown> {
    return this.api.patch<unknown>(`${this.base}/conversations/${id}`, { title });
  }

  setInterests(courseCategoryIds: string[], productCategoryIds: string[]): Observable<unknown> {
    return this.api.post(
      `${this.base}/interests`,
      { courseCategoryIds, productCategoryIds },
    );
  }

  /** Current user's course/product category interests, each flagged with isSelected — prefills the edit-interests screen. */
  getMyInterests(): Observable<MyInterestsResponse> {
    return this.api.get<MyInterestsResponse>(`${this.base}/interests`);
  }

  /** Rotating "quick question" chips for the general chatbot's empty state. */
  getSuggestedQuestions(count = 5): Observable<SuggestedQuestion[]> {
    return this.api.get<SuggestedQuestion[]>(`${this.base}/suggested-questions`, {
      params: { count: String(count) },
    });
  }

  /** Rotating "quick question" chips for a specific lesson's Q&A panel. */
  getLessonSuggestedQuestions(lessonId: string, count = 4): Observable<SuggestedQuestion[]> {
    return this.api.get<SuggestedQuestion[]>(`${this.base}/lessons/${lessonId}/suggested-questions`, {
      params: { count: String(count) },
    });
  }

  recommendedCourses(top = 6): Observable<RecommendedCourse[]> {
    return this.api.get<RecommendedCourse[]>(`${this.base}/recommendations/courses`, {
      params: { top: String(top) },
    });
  }

  /** AI-ranked product recommendations, based on the user's preferred product categories. */
  recommendedProducts(top = 8): Observable<RecommendedProduct[]> {
    return this.api.get<RecommendedProduct[]>(`${this.base}/recommendations/products`, {
      params: { top: String(top) },
    });
  }

  // ============================================================
  // Lesson RAG (chat-with-lesson + summarize)
  // ============================================================

  /** RAG chat scoped to a specific lesson's indexed content ("Ask a question"). */
  chatWithLesson(
    lessonId: string,
    question: string,
    conversationId?: string,
  ): Observable<ChatWithLessonResult> {
    return this.api.post<ChatWithLessonResult>(
      `${this.base}/lessons/${lessonId}/chat`,
      { question, conversationId },
    );
  }

  /** Summarizes a lesson's indexed content ("Summarize this lecture"). */
  summarizeLesson(
    lessonId: string,
    length: 'short' | 'medium' | 'detailed' = 'medium',
  ): Observable<SummarizeLessonResult> {
    return this.api.post<SummarizeLessonResult>(
      `${this.base}/lessons/${lessonId}/summarize?length=${length}`,
      {},
    );
  }
}
