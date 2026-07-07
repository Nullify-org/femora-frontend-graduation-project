import { Component, EventEmitter, Input, Output, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz, QuizAnswerRequest, SubmitQuizResult } from '../../../../../../core/models/api.model';
import { QuizService } from '../../../../services/quiz.service';

@Component({
  selector: 'app-quiz-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white border border-stone-100 rounded-3xl p-6" dir="rtl" *ngIf="quiz as q">
      <h3 class="font-bold text-xl text-stone-800 mb-1">{{ q.title || 'كويز الموديول' }}</h3>
      <p class="text-xs text-stone-400 mb-6">
        محتاجة {{ q.minimumPassingScore ?? 70 }}% عشان تعدّي وتفتحي الموديول الجاي
      </p>

      <div *ngFor="let question of q.questions; let qi = index" class="mb-6">
        <p class="font-semibold text-stone-700 mb-2">{{ qi + 1 }}. {{ question.text }}</p>
        <div class="space-y-2">
          <label
            *ngFor="let choice of question.choices"
            class="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-sm"
            [class.border-orange-400]="selected()[question.questionId] === choice.choiceId"
            [class.border-stone-200]="selected()[question.questionId] !== choice.choiceId"
          >
            <input
              type="radio"
              [name]="question.questionId"
              [checked]="selected()[question.questionId] === choice.choiceId"
              (change)="select(question.questionId, choice.choiceId)"
            />
            {{ choice.text }}
          </label>
        </div>
      </div>

      <button
        type="button"
        class="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-full"
        [disabled]="!allAnswered() || isSubmitting()"
        (click)="submitQuiz()"
      >
        {{ isSubmitting() ? 'جاري التصحيح...' : 'تسليم الكويز' }}
      </button>

      <div *ngIf="result() as r" class="mt-4 p-4 rounded-2xl" [class.bg-green-50]="r.isPassed" [class.bg-red-50]="!r.isPassed">
        <p class="font-bold" [class.text-green-700]="r.isPassed" [class.text-red-700]="!r.isPassed">
          {{ r.isPassed ? '🎉 نجحتِ!' : '😕 محتاجة تحاولي تاني' }} — {{ r.score }}/{{ r.maxScore ?? 100 }}
        </p>
      </div>
    </div>
  `,
})
export class QuizPanel {
  private readonly quizApi = inject(QuizService);

  @Input() quiz: Quiz | null = null;
  @Input() enrollmentId?: string;
  @Output() readonly passed = new EventEmitter<SubmitQuizResult>();

  readonly selected = signal<Record<string, string>>({});
  readonly isSubmitting = signal(false);
  readonly result = signal<SubmitQuizResult | null>(null);

  readonly allAnswered = computed(() => {
    const q = this.quiz;
    if (!q?.questions?.length) return false;
    return q.questions.every((question) => !!this.selected()[question.questionId]);
  });

  select(questionId: string, choiceId: string): void {
    this.selected.update((cur) => ({ ...cur, [questionId]: choiceId }));
  }

  submitQuiz(): void {
    const q = this.quiz;
    if (!q || !this.allAnswered()) return;

    const answers: QuizAnswerRequest[] = Object.entries(this.selected()).map(
      ([questionId, choiceId]) => ({ questionId, choiceId }),
    );

    this.isSubmitting.set(true);
    this.quizApi.submit(q.quizId, { enrollmentId: this.enrollmentId, answers }).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.result.set(res);
        if (res.isPassed) this.passed.emit(res);
      },
      error: () => this.isSubmitting.set(false),
    });
  }
}