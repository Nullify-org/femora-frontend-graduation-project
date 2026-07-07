import { Component, ElementRef, OnInit, QueryList, ViewChildren, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { firstValueFrom } from 'rxjs';

import { CourseService } from '../../services/course.service';
import { ModuleService } from '../../services/module.service';
import { LessonService, CreateLessonRequest } from '../../services/lesson.service';
import { CourseFilterOptions } from '../../models/course-filter-options.model';
import { NotificationService } from '../../../../core/services/notification.service';
import { Sidebar } from "../../../../shared/components/sidebar/sidebar";

enum CourseLevelMap {
  Unknown = 0,
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
  Expert = 4,
}

const LEVEL_LABELS: Record<string, string> = {
  Beginner: 'مبتدئ',
  Intermediate: 'متوسط',
  Advanced: 'متقدم',
  Expert: 'خبير',
};

const LANGUAGE_OPTIONS = [
  { value: 'Arabic', label: 'العربية' },
  { value: 'English', label: 'English' },
];

interface DraftLesson {
  tempId: string;
  title: string;
  type: number; 
  contentUrl: string;
  durationSeconds: number;
  articleContent: string;
  isPreview: boolean;
  orderIndex: number;
}

interface DraftModule {
  tempId: string;
  title: string;
  expanded: boolean;
  lessons: DraftLesson[];
}

@Component({
  selector: 'app-instructor-course-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DragDropModule, Sidebar],
  templateUrl: './instructor-course-create.html',
  styleUrls: ['./instructor-course-create.css'],
})
export class InstructorCourseCreate implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly courseService = inject(CourseService);
  private readonly moduleService = inject(ModuleService);
  private readonly lessonService = inject(LessonService);
  private readonly notifications = inject(NotificationService);
  private readonly router = inject(Router);

  @ViewChildren('moduleTitleInput') moduleTitleInputs!: QueryList<ElementRef<HTMLInputElement>>;

  courseForm!: FormGroup;

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');

  readonly categories = signal<string[]>([]);
  readonly levels = signal<string[]>([]);
  readonly languages = LANGUAGE_OPTIONS;
  readonly isLoadingFilters = signal(true);

  readonly coverPreviewUrl = signal<string | null>(null);
  readonly descriptionLength = signal(0);

  readonly modules = signal<DraftModule[]>([]);
  private tempCounter = 0;

  readonly isModalOpen = signal(false);
  readonly activeModuleId = signal<string | null>(null);
  readonly activeLessonId = signal<string | null>(null);

  modalTitle = '';
  modalType = 0; 
  modalContentUrl = '';
  modalOrderIndex = 1;
  modalDurationSeconds = 0;
  modalArticleContent = '';
  modalIsPreview = false;

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      level: ['', Validators.required],
      language: ['', Validators.required],
      thumbnailUrl: [''],
    });

    this.courseForm.get('description')!.valueChanges.subscribe((value: string) => {
      this.descriptionLength.set((value ?? '').length);
    });

    this.loadFilterOptions();
  }

  private loadFilterOptions(): void {
    this.isLoadingFilters.set(true);
    this.courseService.getFilterOptions().subscribe({
      next: (options: CourseFilterOptions) => {
        this.categories.set(options.categories ?? []);
        this.levels.set(options.levels ?? []);
        this.isLoadingFilters.set(false);
      },
      error: () => this.isLoadingFilters.set(false),
    });
  }

  levelLabel(level: string): string {
    return LEVEL_LABELS[level] ?? level;
  }

  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.readCoverFile(file);
  }

  onCoverDropped(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    this.readCoverFile(file);
  }

  onCoverDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  private readCoverFile(file: File): void {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      this.coverPreviewUrl.set(dataUrl);
      this.courseForm.get('thumbnailUrl')!.setValue(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  removeCover(): void {
    this.coverPreviewUrl.set(null);
    this.courseForm.get('thumbnailUrl')!.setValue('');
  }

  private nextTempId(prefix: string): string {
    this.tempCounter += 1;
    return `${prefix}-${Date.now()}-${this.tempCounter}`;
  }

  addModule(): void {
    const tempId = this.nextTempId('module');
    this.modules.update((list) => [
      ...list,
      { tempId, title: '', expanded: true, lessons: [] },
    ]);
    setTimeout(() => {
      const inputs = this.moduleTitleInputs?.toArray() ?? [];
      inputs[inputs.length - 1]?.nativeElement.focus();
    });
  }

  updateModuleTitle(moduleId: string, value: string): void {
    this.modules.update((list) =>
      list.map((m) => (m.tempId === moduleId ? { ...m, title: value } : m)),
    );
  }

  toggleModuleExpand(moduleId: string): void {
    this.modules.update((list) =>
      list.map((m) => (m.tempId === moduleId ? { ...m, expanded: !m.expanded } : m)),
    );
  }

  focusModuleTitle(moduleId: string): void {
    const index = this.modules().findIndex((m) => m.tempId === moduleId);
    if (index === -1) return;
    this.moduleTitleInputs?.toArray()[index]?.nativeElement.focus();
  }

  deleteModule(module: DraftModule): void {
    if (!confirm(`هل تريد حذف "${module.title.trim() || 'هذه الوحدة'}" وكل دروسها؟`)) return;
    this.modules.update((list) => list.filter((m) => m.tempId !== module.tempId));
  }

  onModuleDrop(event: CdkDragDrop<DraftModule[]>): void {
    const list = [...this.modules()];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    this.modules.set(list);
  }
  
  openAddLessonModal(module: DraftModule): void {
    this.activeModuleId.set(module.tempId);
    this.activeLessonId.set(null);

    this.modalTitle = '';
    this.modalType = 0;
    this.modalContentUrl = '';
    this.modalOrderIndex = module.lessons.length + 1;
    this.modalDurationSeconds = 0;
    this.modalArticleContent = '';
    this.modalIsPreview = false;

    this.isModalOpen.set(true);
  }

  openEditLessonModal(module: DraftModule, lesson: DraftLesson): void {
    this.activeModuleId.set(module.tempId);
    this.activeLessonId.set(lesson.tempId);

    this.modalTitle = lesson.title;
    this.modalType = lesson.type;
    this.modalContentUrl = lesson.contentUrl;
    this.modalOrderIndex = lesson.orderIndex;
    this.modalDurationSeconds = lesson.durationSeconds;
    this.modalArticleContent = lesson.articleContent;
    this.modalIsPreview = lesson.isPreview;

    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.activeModuleId.set(null);
    this.activeLessonId.set(null);
  }

  saveModalLesson(): void {
    const title = this.modalTitle.trim();
    if (!title) {
      alert('يرجى إدخال عنوان الدرس');
      return;
    }

    const targetModuleId = this.activeModuleId();
    const targetLessonId = this.activeLessonId();

    if (!targetModuleId) return;

    this.modules.update((allModules) =>
      allModules.map((m) => {
        if (m.tempId !== targetModuleId) return m;

        let updatedLessons = [...m.lessons];

        if (targetLessonId) {
          updatedLessons = updatedLessons.map((l) =>
            l.tempId === targetLessonId
              ? {
                  ...l,
                  title: title,
                  type: Number(this.modalType),
                  contentUrl: this.modalContentUrl,
                  orderIndex: Number(this.modalOrderIndex),
                  durationSeconds: Number(this.modalDurationSeconds),
                  articleContent: this.modalArticleContent,
                  isPreview: this.modalIsPreview,
                }
              : l
          );
        } else {
          const newLesson: DraftLesson = {
            tempId: this.nextTempId('lesson'),
            title: title,
            type: Number(this.modalType),
            contentUrl: this.modalContentUrl,
            orderIndex: Number(this.modalOrderIndex),
            durationSeconds: Number(this.modalDurationSeconds),
            articleContent: this.modalArticleContent,
            isPreview: this.modalIsPreview,
          };
          updatedLessons.push(newLesson);
        }

        updatedLessons.sort((a, b) => a.orderIndex - b.orderIndex);

        return { ...m, lessons: updatedLessons };
      })
    );

    this.closeModal();
  }

  deleteLesson(module: DraftModule, lesson: DraftLesson): void {
    if (!confirm(`هل تريد حذف الدرس "${lesson.title.trim() || 'هذا الدرس'}"؟`)) return;
    this.modules.update((list) =>
      list.map((m) =>
        m.tempId === module.tempId
          ? { ...m, lessons: m.lessons.filter((l) => l.tempId !== lesson.tempId) }
          : m
      )
    );
  }

  onLessonDrop(module: DraftModule, event: CdkDragDrop<DraftLesson[]>): void {
    this.modules.update((list) =>
      list.map((m) => {
        if (m.tempId !== module.tempId) return m;
        const lessons = [...m.lessons];
        moveItemInArray(lessons, event.previousIndex, event.currentIndex);
        const updated = lessons.map((l, index) => ({ ...l, orderIndex: index + 1 }));
        return { ...m, lessons: updated };
      }),
    );
  }

  async save(): Promise<void> {
    this.courseForm.markAllAsTouched();

    if (this.courseForm.invalid) {
      this.errorMessage.set('يرجى استكمال جميع الحقول المطلوبة فى معلومات الدورة');
      return;
    }

    if (this.modules().length === 0) {
      this.errorMessage.set('أضف وحدة واحدة على الأقل قبل حفظ الدورة');
      return;
    }

    if (this.modules().some((m) => !m.title.trim())) {
      this.errorMessage.set('كل وحدة يجب أن يكون لها عنوان');
      return;
    }

    if (this.isSubmitting()) return;
    this.isSubmitting.set(true);
    this.errorMessage.set('');

    try {
      const formValue = this.courseForm.value;
      const coursePayload = {
        instructorProfileId: '00000000-0000-0000-0000-000000000000',
        title: formValue.title,
        description: formValue.description,
        price: Number(formValue.price),
        level: CourseLevelMap[formValue.level as keyof typeof CourseLevelMap],
        category: formValue.category,
        language: formValue.language,
        thumbnailUrl: formValue.thumbnailUrl || null,
      };

      const courseId = await firstValueFrom(this.courseService.create(coursePayload));
      const draftModules = this.modules();

      for (let moduleIndex = 0; moduleIndex < draftModules.length; moduleIndex++) {
        const draftModule = draftModules[moduleIndex];
        const createdModule = await firstValueFrom(
          this.moduleService.create({
            courseId,
            title: draftModule.title.trim(),
            orderIndex: moduleIndex + 1,
          }),
        );

        const moduleId = this.extractId(createdModule);

        for (let lessonIndex = 0; lessonIndex < draftModule.lessons.length; lessonIndex++) {
          const draftLesson = draftModule.lessons[lessonIndex];
          if (!draftLesson.title.trim()) continue;

          const lessonPayload: CreateLessonRequest = {
            moduleId,
            title: draftLesson.title.trim(),
            type: draftLesson.type,
            contentUrl: draftLesson.contentUrl || null,
            durationSeconds: draftLesson.durationSeconds || 0,
            articleContent: draftLesson.articleContent || null,
            orderIndex: draftLesson.orderIndex || (lessonIndex + 1),
            isPreview: draftLesson.isPreview,
          };

          await firstValueFrom(this.lessonService.create(lessonPayload));
        }
      }

      this.notifications.success('تم إنشاء الدورة وتفاصيل الدروس بنجاح');
      this.router.navigate(['/dashboard/instructor/courses']);
    } catch (err: any) {
      this.errorMessage.set(
        err?.error?.title ?? err?.error?.detail ?? 'تعذر إنشاء الدورة، يرجى المحاولة مرة أخرى',
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private extractId(response: any): string {
    if (typeof response === 'string') return response;
    return String(response?.id ?? response?.moduleId ?? response?.lessonId ?? '');
  }

  cancel(): void {
    this.router.navigate(['/dashboard/instructor/courses']);
  }
}