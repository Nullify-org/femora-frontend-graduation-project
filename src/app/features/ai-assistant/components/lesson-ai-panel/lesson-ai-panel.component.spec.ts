import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { LessonAiPanel } from './lesson-ai-panel.component';
import { ChatService } from '../../services/chat.service';
import { NotificationService } from '../../../../core/services/notification.service';

describe('LessonAiPanel', () => {
  let component: LessonAiPanel;
  let fixture: ComponentFixture<LessonAiPanel>;
  let chat: jasmine.SpyObj<ChatService>;
  let notifications: jasmine.SpyObj<NotificationService>;

  beforeEach(async () => {
    chat = jasmine.createSpyObj<ChatService>('ChatService', ['summarizeLesson', 'chatWithLesson']);
    notifications = jasmine.createSpyObj<NotificationService>('NotificationService', [
      'info',
      'error',
      'success',
    ]);

    await TestBed.configureTestingModule({
      imports: [LessonAiPanel],
      providers: [
        { provide: ChatService, useValue: chat },
        { provide: NotificationService, useValue: notifications },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonAiPanel);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('lessonId', 'lesson_1');
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('fetches a summary when the summarize tab is opened', () => {
    chat.summarizeLesson.and.returnValue(of({ lessonId: 'lesson_1', summary: 'ملخص الدرس' }));

    component.openTab('summarize');

    expect(chat.summarizeLesson).toHaveBeenCalledWith('lesson_1', 'medium');
    expect(component.summary()).toBe('ملخص الدرس');
  });

  it('shows an error toast when summarizing fails', () => {
    chat.summarizeLesson.and.returnValue(throwError(() => new Error('network error')));

    component.openTab('summarize');

    expect(notifications.error).toHaveBeenCalled();
  });

  it('appends a Q&A turn after asking a question', () => {
    chat.chatWithLesson.and.returnValue(
      of({ conversationId: 'conv_1', answer: 'الإجابة هنا' }),
    );

    component.draftQuestion.set('ما هو محتوى الدرس؟');
    component.askQuestion();

    expect(component.turns().length).toBe(1);
    expect(component.turns()[0].answer).toBe('الإجابة هنا');
    expect(component.conversationId()).toBe('conv_1');
  });

  it('does not call the API for an empty question', () => {
    component.draftQuestion.set('   ');
    component.askQuestion();

    expect(chat.chatWithLesson).not.toHaveBeenCalled();
    expect(notifications.info).toHaveBeenCalled();
  });

  it('notifies that quiz-me is not available yet instead of opening a tab', () => {
    component.openTab('quiz');

    expect(component.activeTab()).toBeNull();
    expect(notifications.info).toHaveBeenCalled();
  });
});
