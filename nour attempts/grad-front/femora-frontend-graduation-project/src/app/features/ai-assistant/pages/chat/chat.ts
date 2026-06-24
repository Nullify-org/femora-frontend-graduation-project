import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ChatService } from '../../services/chat.service';
import { ChatMessage, ConversationSummary } from '../../../../core/models/api.model';
import { unwrapList } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  templateUrl: './chat.html',
})
export class Chat {
  private readonly chatApi = inject(ChatService);

  conversations: ConversationSummary[] = [];
  messages: ChatMessage[] = [];
  activeConversationId: string | null = null;
  draft = '';
  isLoading = false;
  isSending = false;
  errorMessage = '';

  constructor() {
    runInBrowser(() => this.loadConversations());
  }

  loadConversations(): void {
    this.chatApi.getConversations().subscribe({
      next: (res) => {
        this.conversations = unwrapList<ConversationSummary>(res);
      },
    });
  }

  startNewChat(): void {
    this.activeConversationId = null;
    this.messages = [];
    this.draft = '';
  }

  openConversation(id: string): void {
    this.activeConversationId = id;
    this.isLoading = true;
    this.chatApi.getConversation(id).subscribe({
      next: (conversation) => {
        this.messages = conversation.messages ?? [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'تعذّر تحميل المحادثة';
        this.isLoading = false;
      },
    });
  }

  send(): void {
    const text = this.draft.trim();
    if (!text || this.isSending) return;

    this.messages = [...this.messages, { role: 'user', content: text }];
    this.draft = '';
    this.isSending = true;
    this.errorMessage = '';

    this.chatApi.sendMessage(text, this.activeConversationId ?? undefined).subscribe({
      next: (res) => {
        this.activeConversationId = res.conversationId;
        if (res.reply) {
          this.messages = [...this.messages, { role: 'assistant', content: res.reply }];
        }
        this.isSending = false;
        this.loadConversations();
      },
      error: (err) => {
        this.isSending = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? 'تعذّر إرسال الرسالة';
      },
    });
  }
}
