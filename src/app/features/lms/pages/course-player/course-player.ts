<<<<<<< HEAD
<<<<<<< Updated upstream
﻿import { Component, inject } from '@angular/core';
=======
import { Component, computed, inject, signal } from '@angular/core';
>>>>>>> origin/master
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { LessonAiPanel } from '../../../ai-assistant/components/lesson-ai-panel/lesson-ai-panel.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { QuizService } from '../../services/quiz.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
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

import { EnrollmentDetailsResponse, EnrollmentLesson, EnrollmentModule } from '../../../../core/models/api.model';

type LessonContentKind = 'video' | 'pdf' | 'text' | 'link' | 'unknown';

@Component({
  selector: 'app-course-player',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterLink, ModuleSidebar, LessonViewer, LessonProgress, LessonNavigation, QuizPanel, AiChatPane],
=======
  imports: [CommonModule, RouterLink, Sidebar, LessonAiPanel],
>>>>>>> origin/master
  templateUrl: './course-player.html',
})
<<<<<<< Updated upstream
export class CoursePlayer {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly quizApi = inject(QuizService);
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  readonly enrollment = signal<EnrollmentDetailsResponse | null>(null);
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  readonly isUnlocking = signal(false);
  readonly isLaunchingQuiz = signal(false);
  readonly selectedModuleId = signal('');
  readonly selectedLessonId = signal('');
  readonly fromQuizModuleId = signal('');
  readonly autoQuizTriggered = signal(false);
  readonly showDebug = signal(false);

  readonly isTraineeProfile = computed(() => {
    const profile = this.auth.activeProfile();
    return profile === 'Trainee' || profile === 'student';
  });

  private enrollmentId = '';

  readonly selectedModule = computed<EnrollmentModule | null>(() => {
    const enrollment = this.enrollment();
    if (!enrollment) return null;

    const selectedId = this.selectedModuleId();
    return enrollment.modules.find((module) => module.moduleId === selectedId)
      ?? enrollment.modules.find((module) => module.isUnlocked)
      ?? enrollment.modules[0]
      ?? null;
  });

  readonly selectedLesson = computed<EnrollmentLesson | null>(() => {
    const module = this.selectedModule();
    if (!module) return null;

    const selectedLessonId = this.selectedLessonId();
    return module.lessons.find((lesson) => lesson.lessonId === selectedLessonId)
      ?? module.lessons.find((lesson) => !lesson.isCompleted)
      ?? module.lessons[0]
      ?? null;
  });

  readonly lessonCount = computed(() => this.selectedModule()?.lessons.length ?? 0);

  /** Index of the current lesson within its module (0-based), or -1 if none */
  readonly currentLessonIndex = computed(() => {
    const module = this.selectedModule();
    const lesson = this.selectedLesson();
    if (!module || !lesson) return -1;
    return module.lessons.findIndex((l) => l.lessonId === lesson.lessonId);
  });

  /** Next lesson in the same module, or null if this is the last one */
  readonly nextLesson = computed<EnrollmentLesson | null>(() => {
    const module = this.selectedModule();
    const idx = this.currentLessonIndex();
    if (!module || idx < 0) return null;
    return module.lessons[idx + 1] ?? null;
  });

  /** Previous lesson in the same module, or null if this is the first one */
  readonly prevLesson = computed<EnrollmentLesson | null>(() => {
    const module = this.selectedModule();
    const idx = this.currentLessonIndex();
    if (!module || idx <= 0) return null;
    return module.lessons[idx - 1] ?? null;
  });

  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get('enrollmentId');
      this.fromQuizModuleId.set(this.route.snapshot.queryParamMap.get('fromQuizModuleId') ?? '');

      if (!id) {
        this.errorMessage.set('معرّف التسجيل غير صالح');
        this.isLoading.set(false);
        return;
      }

      this.enrollmentId = id;
      this.loadEnrollment();
    });
  }

<<<<<<< HEAD
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
=======
  toggleDebug(): void {
    this.showDebug.set(!this.showDebug());
  }

  readonly enrollmentJson = computed(() => JSON.stringify(this.enrollment(), null, 2));

  private isTraineeProfileAllowed(): boolean {
    return this.isTraineeProfile();
  }

  private loadEnrollment(): void {
    this.isLoading.set(true);

    this.enrollmentsApi.getEnrollmentDetails(this.enrollmentId).subscribe({
      next: (data) => {
        this.enrollment.set(data);
        this.isLoading.set(false);
        this.initializeSelection(data);
        this.maybeAutoUnlockAfterQuiz(data);
        this.maybeLaunchQuiz(data);
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل بيانات التسجيل');
        this.isLoading.set(false);
>>>>>>> origin/master
      },
    });
  }

<<<<<<< HEAD
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
=======
  private initializeSelection(data: EnrollmentDetailsResponse): void {
    const preferredModule = data.modules.find((module) => module.isUnlocked && !module.isCompleted)
      ?? data.modules.find((module) => module.isUnlocked)
      ?? data.modules[0]
      ?? null;

    if (!preferredModule) return;

    this.selectedModuleId.set(preferredModule.moduleId);
    const preferredLesson = preferredModule.lessons.find((lesson) => !lesson.isCompleted)
      ?? preferredModule.lessons[0]
      ?? null;

    if (preferredLesson) {
      this.selectedLessonId.set(preferredLesson.lessonId);
    }
  }

  selectModule(module: EnrollmentModule): void {
    this.selectedModuleId.set(module.moduleId);
    const nextLesson = module.lessons.find((lesson) => !lesson.isCompleted) ?? module.lessons[0];
    if (nextLesson) {
      this.selectedLessonId.set(nextLesson.lessonId);
    }
  }

  selectLesson(lesson: EnrollmentLesson): void {
    this.selectedLessonId.set(lesson.lessonId);
  }

  /** Advance to the next lesson (no complete-lesson endpoint exists on this backend) */
  completeAndNext(): void {
    const next = this.nextLesson();
    if (next) {
      this.selectedLessonId.set(next.lessonId);
    }
    // Refresh enrollment to pick up any server-side progress updates
    this.loadEnrollment();
  }

  private maybeLaunchQuiz(data: EnrollmentDetailsResponse): void {
    if (!this.isTraineeProfileAllowed() || this.autoQuizTriggered()) return;

    const module = this.selectedModule();
    if (!module || !module.isCompleted || module.quizPassed) return;

    this.autoQuizTriggered.set(true);
    this.startModuleQuiz(module.moduleId, data.enrollmentId);
  }

  private maybeAutoUnlockAfterQuiz(data: EnrollmentDetailsResponse): void {
    const moduleId = this.fromQuizModuleId();
    if (!moduleId) return;

    const module = data.modules.find((item) => item.moduleId === moduleId);
    if (!module || !module.quizPassed) return;

    this.unlockNextModule(module.moduleId);
  }

  startModuleQuiz(moduleId: string, enrollmentId = this.enrollmentId): void {
    if (!this.isTraineeProfileAllowed()) {
      this.notifications.info('الاختبار متاح لملف المتدرب فقط');
      return;
    }

    this.isLaunchingQuiz.set(true);
    this.quizApi.generateQuiz(moduleId, 5, 2).subscribe({
      next: (response) => {
        this.isLaunchingQuiz.set(false);
        this.router.navigate(['/lms/quiz', response.quizId], {
          queryParams: {
            moduleId,
            enrollmentId,
          },
        });
      },
      error: (err) => {
        this.isLaunchingQuiz.set(false);
        this.notifications.error(err?.error?.title ?? err?.error?.detail ?? 'تعذر إنشاء الاختبار');
      },
    });
  }

  unlockNextModule(moduleId: string): void {
    this.isUnlocking.set(true);

    this.enrollmentsApi.unlockNextModule(moduleId).subscribe({
      next: (response) => {
        this.isUnlocking.set(false);

        if (response.isLastModule) {
          this.notifications.success('لا توجد وحدات أخرى لفتحها');
        } else {
          this.notifications.success(`تم فتح: ${response.unlockedModuleTitle}`);
        }

        this.loadEnrollment();
      },
      error: (err) => {
        this.isUnlocking.set(false);
        this.notifications.error(
          err?.error?.title ?? err?.error?.detail ?? 'تعذر فتح الوحدة التالية'
        );
      },
    });
  }

  lessonContentKind(lesson: EnrollmentLesson): LessonContentKind {
    const rawContentUrl = (lesson.contentUrl ?? '').trim();
    const contentType = `${lesson.contentType ?? ''} ${lesson.contentMimeType ?? ''}`.toLowerCase().trim();
    const contentText = (lesson.contentText ?? '').trim();
    const contentUrl = rawContentUrl.toLowerCase();

    // No content at all
    if (!rawContentUrl && !contentText) return 'unknown';

    // Bare slash placeholder — no real content
    if (rawContentUrl === '/') return 'unknown';

    // PDF: check MIME type or file extension
    if (contentType.includes('pdf') || contentUrl.includes('.pdf')) return 'pdf';

    // Video: check MIME type first (most reliable), then file extension
    if (
      contentType.startsWith('video/') ||
      contentType.includes('video') ||
      /\.(mp4|webm|ogg|mov|avi|mkv)($|\?|#)/i.test(rawContentUrl) ||
      contentUrl.includes('youtube.com') ||
      contentUrl.includes('youtu.be') ||
      contentUrl.includes('vimeo.com')
    ) {
      return 'video';
    }

    // Text: explicit text content provided
    if (
      contentText ||
      contentType.includes('text') ||
      contentUrl.endsWith('.txt') ||
      contentUrl.endsWith('.md')
    ) {
      return 'text';
    }

    // Anything else with a URL → show as an openable link
    if (rawContentUrl) return 'link';

    return 'unknown';
  }

  lessonContentUrl(lesson: EnrollmentLesson): string {
    return (lesson.contentUrl ?? '').trim();
  }

  /** Sanitized URL for use in <video src=""> */
  safeVideoUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  /** Sanitized resource URL for use in <iframe src=""> */
  safeResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  lessonContentText(lesson: EnrollmentLesson): string {
    return (lesson.contentText ?? '').trim() || 'لا يوجد محتوى نصي لهذا الدرس بعد.';
  }

  isEmbedUrl(url: string): boolean {
    const u = url.toLowerCase();
    return (
      u.includes('youtube.com') ||
      u.includes('youtu.be') ||
      u.includes('vimeo.com')
    );
>>>>>>> origin/master
  }
}
