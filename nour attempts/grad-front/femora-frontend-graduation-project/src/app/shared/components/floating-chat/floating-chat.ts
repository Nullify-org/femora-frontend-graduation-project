import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideMessageCircle, LucideSend, LucideX } from '@lucide/angular';
import { AuthService } from '../../../core/auth/auth.service';
import { ChatService } from '../../../features/ai-assistant/services/chat.service';
import { LanguageService } from '../../../core/services/language.service';
import { ChatMessage } from '../../../core/models/api.model';
import { runInBrowser } from '../../../core/utils/platform.util';

@Component({
  selector: 'app-floating-chat',
  standalone: true,
  imports: [FormsModule, LucideMessageCircle, LucideSend, LucideX],
  templateUrl: './floating-chat.html',
})
export class FloatingChat {
  readonly auth = inject(AuthService);
  readonly lang = inject(LanguageService);
  private readonly chatApi = inject(ChatService);

  readonly open = signal(false);
  readonly sending = signal(false);
  readonly messages = signal<ChatMessage[]>([]);
  conversationId: string | null = null;
  draft = '';

  toggle(): void {
    this.open.update((v) => !v);
  }

  send(): void {
    const text = this.draft.trim();
    if (!text || this.sending()) return;

    this.messages.update((m) => [...m, { role: 'user', content: text }]);
    this.draft = '';
    this.sending.set(true);

    this.chatApi.sendMessage(text, this.conversationId ?? undefined).subscribe({
      next: (res) => {
        this.conversationId = res.conversationId;
        if (res.reply) {
          this.messages.update((m) => [...m, { role: 'assistant', content: res.reply }]);
        }
        this.sending.set(false);
      },
      error: () => this.sending.set(false),
    });
  }

  positionClass(): string {
    return this.lang.currentLang() === 'ar' ? 'start-6' : 'end-6';
  }
}
