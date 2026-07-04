import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePlayerEngine } from '../../course-player.engine';

@Component({
  selector: 'app-lesson-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between" dir="rtl">
      <span class="text-sm text-stone-500">
        {{ engine.currentModule()?.title }}
      </span>
      <button
        type="button"
        class="text-sm font-semibold text-orange-600 hover:text-orange-700 disabled:opacity-40"
        [disabled]="!engine.currentLesson()?.isCompleted || engine.isAdvancing()"
        (click)="engine.completeCurrentLesson()"
      >
        الدرس التالي ←
      </button>
    </div>
  `,
})
export class LessonNavigation {
  readonly engine = inject(CoursePlayerEngine);
}