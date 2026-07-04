<<<<<<< Updated upstream
﻿import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { CourseService } from '../../services/course.service';
import { Course, CourseLesson } from '../../../../core/models/api.model';
import { runInBrowser } from '../../../../core/utils/platform.util';
=======
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CoursePlayerEngine } from './course-player.engine';
import { ModuleSidebar } from './components/module-sidebar/module-slidebar';
import { LessonViewer } from './components/lesson-viewer/lesson-viewer';
import { LessonProgress } from './components/lesson-progress/lesson-prograss';
import { LessonNavigation } from './components/lesson-navigation/lesson-navigation';
import { AiChatPane } from './components/ai-chat-pane/ai-chat-pane';
import { QuizPanel } from './components/quiz-panel/quiz-panel';
import { ChatService } from '../../../ai-assistant/services/chat.service';
import { QuizService } from '../../services/quiz.service';
import { ChatMessage, Quiz as QuizModel } from '../../../../core/models/api.model';
>>>>>>> Stashed changes

@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [CommonModule, RouterLink, ModuleSidebar, LessonViewer, LessonProgress, LessonNavigation, QuizPanel, AiChatPane],
  templateUrl: './course-player.html',
})
<<<<<<< Updated upstream
export class CoursePlayer {
  private readonly route = inject(ActivatedRoute);
  private readonly coursesApi = inject(CourseService);

  course: Course | null = null;
  selectedLesson: CourseLesson | null = null;
  isLoading = true;
  errorMessage = '';

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (!id) {
        this.errorMessage = 'معرّف الدورة غير صالح';
        this.isLoading = false;
        return;
      }

      this.coursesApi.getById(id).subscribe({
        next: (course) => {
          this.course = course;
          this.selectedLesson = course.modules?.[0]?.lessons?.[0] ?? null;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'تعذّر تحميل محتوى الدورة';
          this.isLoading = false;
        },
      });
    });
  }

  selectLesson(lesson: CourseLesson): void {
    this.selectedLesson = lesson;
=======
export class CoursePlayer implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly engine = inject(CoursePlayerEngine);
  private readonly chat = inject(ChatService);
  private readonly quizService = inject(QuizService);

  readonly messages = signal<ChatMessage[]>([]);
  readonly isChatTyping = signal(false);
  readonly currentQuiz = signal<QuizModel | null>(null);
  readonly isQuizLoading = signal(false);
  readonly quizError = signal('');
  private readonly conversationId = signal<string | undefined>(undefined);

  ngOnInit(): void {
    const enrollmentId = this.route.snapshot.paramMap.get('enrollmentId');
    if (!enrollmentId) {
      this.engine.error.set('معرّف التسجيل غير صالح');
      return;
    }
    this.engine.load(enrollmentId);
  }

  sendChat(question: string): void {
    const lesson = this.engine.currentLesson();
    if (!lesson) return;

    this.messages.update((list) => [
      ...list,
      {
        messageId: `${Date.now()}-user`,
        role: 'user',
        content: question,
        sentAt: new Date().toISOString(),
      },
    ]);

    this.isChatTyping.set(true);

    this.chat.chatWithLesson(lesson.lessonId, question, this.conversationId()).subscribe({
      next: (result) => {
        this.conversationId.set(result.conversationId);
        this.isChatTyping.set(false);
        this.messages.update((list) => [
          ...list,
          {
            messageId: `${Date.now()}-assistant`,
            role: 'assistant',
            content: result.answer,
            sentAt: new Date().toISOString(),
          },
        ]);
      },
      error: () => {
        this.isChatTyping.set(false);
        this.messages.update((list) => [
          ...list,
          {
            messageId: `${Date.now()}-assistant-error`,
            role: 'assistant',
            content: 'تعذّر الوصول للمساعد الذكى. حاول مرة أخرى.',
            sentAt: new Date().toISOString(),
          },
        ]);
      },
    });
  }

  generateQuiz(): void {
    const module = this.engine.currentModule();
    if (!module) return;

    this.isQuizLoading.set(true);
    this.quizError.set('');

    this.quizService.generate({ moduleId: module.moduleId, questionCount: 8 }).subscribe({
      next: (res) => {
        this.quizService.getById(res.quizId).subscribe({
          next: (quiz) => {
            this.currentQuiz.set({ ...quiz, quizId: quiz.quizId ?? res.quizId });
            this.isQuizLoading.set(false);
          },
          error: () => {
            this.isQuizLoading.set(false);
            this.quizError.set('تعذّر تحميل الكويز المولَّد');
          },
        });
      },
      error: () => {
        this.isQuizLoading.set(false);
        this.quizError.set('تعذّر إنشاء الكويز');
      },
    });
>>>>>>> Stashed changes
  }

  onQuizPassed(): void {
    const module = this.engine.currentModule();
    if (!module) return;
    this.currentQuiz.set(null);
    this.engine.unlockNextModuleAfterQuiz(module.moduleId);
  }

  get shouldShowQuizAction(): boolean {
    const module = this.engine.currentModule();
    return !!module && module.isUnlocked && this.moduleLessonsCompleted(module) && !module.quizPassed;
  }

  private moduleLessonsCompleted(module: { lessons: Array<{ isCompleted: boolean }> }): boolean {
    return module.lessons.length > 0 && module.lessons.every((lesson) => lesson.isCompleted);
  }
}
