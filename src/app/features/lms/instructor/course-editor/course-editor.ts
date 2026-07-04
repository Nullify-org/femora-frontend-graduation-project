import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-editor',
  standalone: true,
  template: `
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div class="bg-white p-6 rounded-xl w-[500px]">
        <h2 class="font-bold mb-4">Course Editor</h2>

        <button (click)="saved.emit()">Save</button>
        <button (click)="closed.emit()">Close</button>
      </div>
    </div>
  `
})
export class CourseEditor {
  @Input() courseId: string | null = null;

  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();
}