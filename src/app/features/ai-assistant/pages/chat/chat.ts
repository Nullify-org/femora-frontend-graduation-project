import { AfterViewChecked, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideSend,
  LucidePlus,
  LucidePencil,
  LucideTrash2,
  LucideBot,
  LucideCheck,
  LucideX,
  LucideMessageSquareText,
} from '@lucide/angular';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { Modal } from '../../../../shared/components/modal/modal';
import { ChatService } from '../../services/chat.service';
import { AiService } from '../../services/ai.service';
import { ChatMessage, ConversationSummary } from '../../../../core/models/api.model';
import { unwrapList } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Sidebar,
    Modal,
    LucideSend,
    LucidePlus,
    LucidePencil,
    LucideTrash2,
    LucideBot,
    LucideCheck,
    LucideX,
    LucideMessageSquareText,
  ],
  templateUrl: './chat.html',
})
export class Chat implements AfterViewChecked {
  private readonly chatApi = inject(ChatService);
  private readonly ai = inject(AiService);
  private readonly notifications = inject(NotificationService);

  @ViewChild('scrollAnchor') private scrollAnchor?: ElementRef<HTMLDivElement>;

  // NOTE: this app runs zoneless (no zone.js — see package.json). Plain class
  // fields mutated inside .subscribe() callbacks do NOT trigger a change
  // detection pass on their own in zoneless mode; only signal writes,
  // markForCheck(), async pipe emissions, or a template-bound DOM event do.
  // That's why messages used to only "appear" after some unrelated click.
  // Using signal() here fixes it: every .set()/.update() schedules CD itself.
  readonly conversations = signal<ConversationSummary[]>([]);
  readonly messages = signal<ChatMessage[]>([]);
  readonly activeConversationId = signal<string | null>(null);
  readonly isLoading = signal(false);
  readonly isSending = signal(false);
  readonly isLoadingConversations = signal(false);
  readonly errorMessage = signal('');

  // Rename state
  readonly renamingId = signal<string | null>(null);
  renameDraft = '';

  // Delete confirmation state
  readonly pendingDeleteId = signal<string | null>(null);
  readonly isDeleting = signal(false);

  draft = '';

  private shouldScroll = false;

  constructor() {
    runInBrowser(() => this.loadConversations());
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  private scrollToBottom(): void {
    this.scrollAnchor?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  loadConversations(): void {
    this.isLoadingConversations.set(true);
    this.chatApi.getConversations().subscribe({
      next: (res) => {
        this.conversations.set(unwrapList<ConversationSummary>(res));
        this.isLoadingConversations.set(false);
      },
      error: () => {
        this.isLoadingConversations.set(false);
      },
    });
  }

  startNewChat(): void {
    this.activeConversationId.set(null);
    this.messages.set([]);
    this.draft = '';
    this.errorMessage.set('');
  }

  openConversation(id: string): void {
    if (this.renamingId() === id) return;
    this.activeConversationId.set(id);
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.chatApi.getConversation(id).subscribe({
      next: (conversation) => {
        this.messages.set(conversation.messages ?? []);
        this.isLoading.set(false);
        this.shouldScroll = true;
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل المحادثة');
        this.isLoading.set(false);
      },
    });
  }

  send(): void {
    const text = this.draft.trim();
    if (!text || this.isSending()) return;

    this.messages.update((msgs) => [
      ...msgs,
      { role: 'user', content: text, sentAt: new Date().toISOString() },
    ]);
    this.draft = '';
    this.isSending.set(true);
    this.errorMessage.set('');
    this.shouldScroll = true;

    this.ai.sendChatMessage(text, this.activeConversationId() ?? undefined).subscribe({
      next: (res) => {
        this.activeConversationId.set(res.conversationId);
        if (res.reply) {
          this.messages.update((msgs) => [
            ...msgs,
            { role: 'assistant', content: res.reply, sentAt: new Date().toISOString() },
          ]);
        }
        this.isSending.set(false);
        this.shouldScroll = true;
        this.loadConversations();
      },
      error: (err) => {
        this.isSending.set(false);
        this.errorMessage.set(err?.error?.title ?? err?.error?.detail ?? 'تعذّر إرسال الرسالة');
      },
    });
  }

  // ============================================================
  // Rename
  // ============================================================

  startRename(conversation: ConversationSummary, event: Event): void {
    event.stopPropagation();
    this.renamingId.set(conversation.conversationId);
    this.renameDraft = conversation.title ?? '';
  }

  cancelRename(event?: Event): void {
    event?.stopPropagation();
    this.renamingId.set(null);
    this.renameDraft = '';
  }

  confirmRename(conversation: ConversationSummary, event: Event): void {
    event.stopPropagation();
    const title = this.renameDraft.trim();
    if (!title) {
      this.cancelRename();
      return;
    }

    this.chatApi.renameConversation(conversation.conversationId, title).subscribe({
      next: () => {
        this.conversations.update((list) =>
          list.map((c) =>
            c.conversationId === conversation.conversationId ? { ...c, title } : c,
          ),
        );
        this.renamingId.set(null);
        this.renameDraft = '';
        this.notifications.success('تم تحديث اسم المحادثة');
      },
      error: () => {
        this.notifications.error('تعذّر تحديث اسم المحادثة');
      },
    });
  }

  // ============================================================
  // Delete
  // ============================================================

  requestDelete(conversationId: string, event: Event): void {
    event.stopPropagation();
    this.pendingDeleteId.set(conversationId);
  }

  cancelDelete(): void {
    this.pendingDeleteId.set(null);
  }

  confirmDelete(): void {
    const id = this.pendingDeleteId();
    if (!id) return;
    this.isDeleting.set(true);

    this.chatApi.deleteConversation(id).subscribe({
      next: () => {
        this.conversations.update((list) => list.filter((c) => c.conversationId !== id));
        if (this.activeConversationId() === id) {
          this.startNewChat();
        }
        this.isDeleting.set(false);
        this.pendingDeleteId.set(null);
        this.notifications.success('تم حذف المحادثة');
      },
      error: () => {
        this.isDeleting.set(false);
        this.pendingDeleteId.set(null);
        this.notifications.error('تعذّر حذف المحادثة');
      },
    });
  }
}
