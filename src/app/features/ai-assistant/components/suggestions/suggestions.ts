import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Small row of tappable "quick question" chips. Purely presentational - the
 * parent is responsible for fetching the questions (general chatbot or
 * lesson-scoped) and for actually sending whichever one gets tapped.
 */
@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (questions().length > 0) {
      <div class="flex flex-wrap gap-2 justify-center">
        @for (q of questions(); track q) {
          <button
            type="button"
            (click)="questionClick.emit(q)"
            [disabled]="disabled()"
            class="text-xs md:text-sm bg-blush/40 hover:bg-blush/70 text-terracotta-dark px-3 py-1.5 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ q }}
          </button>
        }
      </div>
    }
  `,
})
export class Suggestions {
  readonly questions = input<string[]>([]);
  readonly disabled = input<boolean>(false);
  readonly questionClick = output<string>();
}
