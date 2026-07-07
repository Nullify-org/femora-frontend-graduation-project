import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatService } from './chat.service';
import { ConversationSummary, SendMessageResult } from '../../../core/models/api.model';
import { NotificationService } from '../../../core/services/notification.service';

@Injectable({ providedIn: 'root' })
export class AiService {
  private readonly chat = inject(ChatService);
  private readonly notifications = inject(NotificationService);

  sendChatMessage(message: string, conversationId?: string): Observable<SendMessageResult> {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      this.notifications.info('اكتب سؤالاً أو رسالة أولاً');
      return throwError(() => new Error('Message content is required'));
    }

    return this.chat.sendMessage(trimmedMessage, conversationId).pipe(
      tap(() => this.notifications.success('تم إرسال الرسالة إلى المساعد الذكي')),
    );
  }

  getConversations(): Observable<ConversationSummary[]> {
    return this.chat.getConversations();
  }
}