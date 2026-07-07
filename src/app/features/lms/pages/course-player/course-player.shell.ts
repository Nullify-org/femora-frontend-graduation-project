import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CoursePlayerEngine } from './course-player.engine';
import { LessonViewer } from './components/lesson-viewer/lesson-viewer';
import { ModuleSidebar } from './components/module-sidebar/module-slidebar';
import { LessonProgress } from './components/lesson-progress/lesson-prograss';
import { AiChatPane } from './components/ai-chat-pane/ai-chat-pane';
import { QuizPanel } from './components/quiz-panel/quiz-panel';
import { LessonNavigation } from './components/lesson-navigation/lesson-navigation';
import { ChatMessage } from '../../../../core/models/api.model';

@Component({
  selector: 'app-course-player-shell',
  standalone: true,
  imports: [CommonModule, LessonViewer, ModuleSidebar, LessonProgress, AiChatPane, QuizPanel, LessonNavigation],
  template: `
    <div class="flex min-h-screen bg-cream-light" dir="rtl">
      <app-module-sidebar />

      <main class="flex-1 p-8">
        <div class="max-w-6xl mx-auto space-y-6">
          <div *ngIf="engine.isLoading()" class="text-center text-stone-500">جارى تحميل الدورة...</div>

          <div *ngIf="engine.error()" class="bg-red-50 border border-red-200 rounded-3xl p-5 text-red-700">
            {{ engine.error() }}
          </div>

          <div *ngIf="!engine.isLoading() && !engine.error()">
            <div class="flex flex-col gap-4 lg:flex-row">
              <div class="flex-1 space-y-4">
                <app-lesson-viewer />
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <app-lesson-progress />
                  <app-lesson-navigation />
                </div>
              </div>
              <aside class="w-full lg:w-96">
                <app-quiz-panel
                  [quiz]="engine.currentModule()?.quizId ? null : null"
                  [enrollmentId]="engine.enrollmentId() ?? undefined"
                  (passed)="engine.unlockNextModuleAfterQuiz(engine.currentModule()?.moduleId ?? '')"
                />
              </aside>
            </div>
          </div>
        </div>
      </main>

      <app-ai-chat-pane
        [messages]="messages"
        [isTyping]="isChatTyping"
        (send)="sendChat($event)"
      />
    </div>
  `,
})
export class CoursePlayerShell implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly engine = inject(CoursePlayerEngine);

  readonly messages = signal<ChatMessage[]>([]);
  readonly isChatTyping = signal(false);

  ngOnInit(): void {
    const enrollmentId = this.route.snapshot.paramMap.get('enrollmentId');
    if (enrollmentId) {
      this.engine.load(enrollmentId);
    }
  }

  sendChat(question: string): void {
    const lesson = this.engine.currentLesson();
    if (!lesson) return;

    // placeholder: actual chat wiring should use ChatService.chatWithLesson
    this.isChatTyping.set(true);
    setTimeout(() => {
      this.isChatTyping.set(false);
      this.messages.update((list) => [
        ...list,
        {
          messageId: `${Date.now()}`,
          role: 'assistant',
          content: 'هذه إجابة تجريبية. وصّل بالسيرفر لحوار ذكى حقيقي مبني على محتوى الدرس.',
          sentAt: new Date().toISOString(),
        },
      ]);
    }, 1200);
  }
}
