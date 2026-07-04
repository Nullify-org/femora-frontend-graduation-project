import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePlayerEngine } from '../../course-player.engine';

@Component({
  selector: 'app-lesson-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-3" dir="rtl">
      <div class="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
        <div
          class="h-full bg-orange-600 transition-all duration-500"
          [style.width.%]="engine.progressPercent()"
        ></div>
      </div>
      <span class="text-xs font-semibold text-stone-500 shrink-0">{{ engine.progressPercent() }}% مكتمل</span>
    </div>
  `,
})
export class LessonProgress {
  readonly engine = inject(CoursePlayerEngine);
}