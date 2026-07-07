import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatService } from '../../services/chat.service';
import { Suggestions } from '../suggestions/suggestions';
import { NotificationService } from '../../../../core/services/notification.service';

interface QaTurn {
  question: string;
  answer: string;
}

type PanelTab = 'summarize' | 'ask' | null;

@Component({
  selector: 'app-lesson-ai-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, Suggestions],
  templateUrl: './lesson-ai-panel.component.html',
})
export class LessonAiPanel {
  private readonly chat = inject(ChatService);
  private readonly notifications = inject(NotificationService);

  /** The lesson currently being watched — required so we know what to summarize / ask about. */
  readonly lessonId = input.required<string>();

  private readonly questionInput = viewChild<ElementRef<HTMLTextAreaElement>>('questionInput');

  readonly activeTab = signal<PanelTab>(null);
  readonly isLoading = signal(false);
  readonly summary = signal<string | null>(null);
  readonly summaryLength = signal<'short' | 'medium' | 'detailed'>('medium');
  readonly summaryOptions = [
    { key: 'short', label: 'مختصر' },
    { key: 'medium', label: 'متوسط' },
    { key: 'detailed', label: 'تفصيلي' },
  ] as const;

  readonly summaryLengthOptions: { key: 'short' | 'medium' | 'detailed'; label: string }[] = [
    { key: 'short', label: 'مختصر' },
    { key: 'medium', label: 'متوسط' },
    { key: 'detailed', label: 'تفصيلى' },
  ];

  // --- Ask state ---
  readonly conversationId = signal<string | undefined>(undefined);
  readonly turns = signal<QaTurn[]>([]);
  readonly draftQuestion = signal('');
  readonly suggestedQuestions = signal<string[]>([]);

  get isPanelOpen(): boolean {
    return this.activeTab() !== null;
  }

  openTab(tab: Exclude<PanelTab, null>): void {
    this.activeTab.set(this.activeTab() === tab ? null : tab);

    if (tab === 'summarize' && this.summary() === null) {
      this.runSummarize();
    }

    if (tab === 'ask') {
      queueMicrotask(() => this.questionInput()?.nativeElement.focus());
      if (this.turns().length === 0 && this.suggestedQuestions().length === 0) {
        this.loadSuggestedQuestions();
      }
    }
  }

  private loadSuggestedQuestions(): void {
    this.chat.getLessonSuggestedQuestions(this.lessonId(), 4).subscribe({
      next: (res) => this.suggestedQuestions.set((res ?? []).map((q) => q.question)),
      error: () => this.suggestedQuestions.set([]),
    });
  }

  /** Sends a tapped suggestion chip exactly like a typed question. */
  askSuggested(question: string): void {
    this.draftQuestion.set(question);
    this.askQuestion();
  }

  close(): void {
    this.activeTab.set(null);
  }

  runSummarize(): void {
    this.isLoading.set(true);

    this.chat.summarizeLesson(this.lessonId(), this.summaryLength()).subscribe({
      next: (res) => {
        this.summary.set(res.summary);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.notifications.error('تعذر تلخيص الدرس. تأكدي من أن محتوى الدرس متاح أولاً.');
      },
    });
  }

  changeSummaryLength(length: 'short' | 'medium' | 'detailed'): void {
    if (this.summaryLength() === length) return;
    this.summaryLength.set(length);
    this.summary.set(null);
    this.runSummarize();
  }

  askQuestion(): void {
    const question = this.draftQuestion().trim();
    if (!question) {
      this.notifications.info('اكتبي سؤالك أولاً');
      return;
    }

    this.isLoading.set(true);

    this.chat.chatWithLesson(this.lessonId(), question, this.conversationId()).subscribe({
      next: (res) => {
        this.conversationId.set(res.conversationId);
        this.turns.update((list) => [...list, { question, answer: res.answer }]);
        this.draftQuestion.set('');
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.notifications.error('تعذر الحصول على إجابة. تأكدي من أن محتوى الدرس متاح أولاً.');
      },
    });
  }

  onQuestionKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.askQuestion();
    }
  }
}
