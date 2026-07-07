import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePlayerEngine } from '../../course-player.engine';

@Component({
  selector: 'app-module-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="w-full md:w-80 shrink-0 bg-white border border-stone-100 rounded-3xl p-4 space-y-3" dir="rtl">
      <div class="flex items-center justify-between px-1 pb-2 border-b border-stone-100">
        <span class="font-bold text-stone-800">محتوى الدورة</span>
        <span class="text-xs text-orange-600 font-semibold">{{ engine.progressPercent() }}%</span>
      </div>

      <div *ngFor="let mod of engine.modules()" class="rounded-2xl overflow-hidden">
        <div
          class="flex items-center justify-between px-3 py-2 text-sm font-semibold"
          [class.text-stone-800]="mod.isUnlocked"
          [class.text-stone-400]="!mod.isUnlocked"
        >
          <span class="flex items-center gap-2">
            <span *ngIf="!mod.isUnlocked">🔒</span>
            <span *ngIf="mod.isUnlocked && mod.isCompleted">✅</span>
            {{ mod.title }}
          </span>
        </div>

        <ul class="space-y-1 px-2 pb-2">
          <li *ngFor="let lesson of mod.lessons">
            <button
              type="button"
              class="w-full text-right text-sm px-3 py-2 rounded-xl transition"
              [class.bg-orange-50]="lesson.lessonId === engine.currentLesson()?.lessonId"
              [class.text-orange-600]="lesson.lessonId === engine.currentLesson()?.lessonId"
              [class.text-stone-600]="lesson.lessonId !== engine.currentLesson()?.lessonId"
              [class.hover:bg-stone-50]="mod.isUnlocked"
              [disabled]="!mod.isUnlocked"
              (click)="engine.openLesson(mod.moduleId, lesson.lessonId)"
            >
              <span class="inline-block w-4">{{ lesson.isCompleted ? '✔️' : '○' }}</span>
              {{ lesson.title }}
            </button>
          </li>
        </ul>
      </div>
    </aside>
  `,
})
export class ModuleSidebar {
  readonly engine = inject(CoursePlayerEngine);
}