import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePlayerEngine } from '../../course-player.engine';

@Component({
  selector: 'app-lesson-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white border border-stone-100 rounded-3xl p-6 flex-1 min-h-[400px]" dir="rtl">
      <ng-container *ngIf="engine.currentLesson() as lesson; else noLesson">
        <h2 class="text-2xl font-bold text-stone-800 mb-1">{{ lesson.title }}</h2>
        <p class="text-xs text-stone-400 mb-6">{{ engine.currentModule()?.title }}</p>

        <div class="prose prose-stone max-w-none min-h-[220px]">
          <!-- Wire this to the real lesson content field (video/markdown) once
               the lesson content shape is confirmed — EnrollmentLesson doesn't
               carry the video/content body, only progress/lock metadata. -->
          <p class="text-stone-500">جاري تحميل محتوى الدرس...</p>
        </div>

        <div class="flex items-center justify-between mt-8 pt-4 border-t border-stone-100">
          <span class="text-xs text-stone-400">
            {{ lesson.isCompleted ? 'تم إكمال الدرس' : 'لسه ما اتكملش' }}
          </span>
          <button
            type="button"
            class="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-full transition"
            [disabled]="lesson.isCompleted || engine.isAdvancing()"
            (click)="engine.completeCurrentLesson()"
          >
            {{ engine.isAdvancing() ? 'جاري الحفظ...' : 'إكمال الدرس والتالي ←' }}
          </button>
        </div>
      </ng-container>

      <ng-template #noLesson>
        <div class="h-full flex items-center justify-center text-stone-400 py-20">
          <p *ngIf="engine.isLoading()">جاري تحميل الدورة...</p>
          <p *ngIf="!engine.isLoading() && engine.isCourseComplete()">🎉 خلصتِ الدورة بالكامل!</p>
          <p *ngIf="!engine.isLoading() && !engine.isCourseComplete()">اختاري درس من القايمة للبدء.</p>
        </div>
      </ng-template>

      <p *ngIf="engine.error()" class="mt-4 text-sm text-red-600">{{ engine.error() }}</p>
    </section>
  `,
})
export class LessonViewer {
  readonly engine = inject(CoursePlayerEngine);
}