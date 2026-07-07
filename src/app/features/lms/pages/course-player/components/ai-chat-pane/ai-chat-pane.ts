import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../../../../../core/models/api.model';

/**
 * Deliberately has NO injected AI service — `features/ai-assistant/services/
 * ai.service.ts` and `chat.service.ts` already exist and I don't have their
 * real method signatures. This component just renders `messages` and emits
 * `send`; wire `(send)` in course-player.ts to whichever real service method
 * matches (likely something like `chatWithLesson(lessonId, text)` per the
 * original spec's `POST /api/ai/lessons/{lessonId}/chat`).
 */
@Component({
  selector: 'app-ai-chat-pane',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed bottom-6 left-6 z-40" dir="rtl">
      <button
        *ngIf="!isOpen()"
        type="button"
        class="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-2xl shadow-lg flex items-center justify-center"
        (click)="isOpen.set(true)"
      >
        💬
      </button>

      <div *ngIf="isOpen()" class="w-80 sm:w-96 h-[28rem] bg-white rounded-3xl shadow-2xl border border-stone-100 flex flex-col overflow-hidden">
        <div class="flex items-center justify-between px-4 py-3 border-b border-stone-100 bg-stone-50">
          <span class="font-bold text-stone-800 text-sm">مساعد الدورة الذكي</span>
          <button type="button" class="text-stone-400 hover:text-stone-600" (click)="isOpen.set(false)">✕</button>
        </div>

        <div class="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          <div
            *ngFor="let msg of messages"
            class="max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap"
            [class.mr-auto]="msg.role === 'user'"
            [class.bg-orange-600]="msg.role === 'user'"
            [class.text-white]="msg.role === 'user'"
            [class.bg-stone-100]="msg.role !== 'user'"
            [class.text-stone-700]="msg.role !== 'user'"
          >
            {{ msg.content }}
          </div>
          <div *ngIf="isTyping" class="text-xs text-stone-400">بيكتب...</div>
        </div>

        <form class="flex items-center gap-2 p-3 border-t border-stone-100" (submit)="submit($event)">
          <input
            [(ngModel)]="draft"
            name="draft"
            type="text"
            placeholder="اسألي عن الدرس..."
            class="flex-1 text-sm px-3 py-2 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button type="submit" class="text-orange-600 font-semibold text-sm px-2" [disabled]="!draft.trim()">
            إرسال
          </button>
        </form>
      </div>
    </div>
  `,
})
export class AiChatPane {
  @Input() messages: ChatMessage[] = [];
  @Input() isTyping = false;
  @Output() readonly send = new EventEmitter<string>();

  readonly isOpen = signal(false);
  draft = '';

  submit(event: Event): void {
    event.preventDefault();
    const text = this.draft.trim();
    if (!text) return;
    this.send.emit(text);
    this.draft = '';
  }
}