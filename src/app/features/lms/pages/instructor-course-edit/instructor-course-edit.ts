import { Component, ElementRef, OnInit, QueryList, ViewChildren, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

// خريطة عكسية لمعالجة القادم من قاعدة البيانات إذا أرجع السيرفر أرقاماً للمستوى
const REVERSE_LEVEL_MAP: Record<number, string> = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Expert'
};

const LANGUAGE_OPTIONS = [
  { value: 'Arabic', label: 'العربية' },
  { value: 'English', label: 'English' },
];

interface DraftLesson {
  tempId: string;
  id?: string; // المعرف الحقيقي من السيرفر للتعديل
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
  id?: string; // المعرف الحقيقي من السيرفر للتعديل
  title: string;
  expanded: boolean;
  lessons: DraftLesson[];
}

@Component({
  selector: 'app-instructor-course-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DragDropModule, Sidebar],
  templateUrl: './instructor-course-edit.html',
  styleUrls: ['./instructor-course-edit.css'],
})
export class InstructorCourseEdit implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly courseService = inject(CourseService);
  private readonly moduleService = inject(ModuleService);
  private readonly lessonService = inject(LessonService);
  private readonly notifications = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  @ViewChildren('moduleTitleInput') moduleTitleInputs!: QueryList<ElementRef<HTMLInputElement>>;

  courseForm!: FormGroup;

  readonly isEditMode = signal(false);
  readonly currentCourseId = signal<string | null>(null);
  readonly currentInstructorProfileId = signal<string | null>(null); // حفظ آيدي المدرب الفعلي (يستخدم فى الإنشاء فقط)

  readonly isSubmitting = signal(false);
  readonly errorMessage = signal('');
  readonly isLoadingData = signal(false);

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
    this.initForm();
    this.loadFilterOptions();

    // التحقق من وجود معرف للدورة البراميتري لتحديد إن كنا بوضع التعديل
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode.set(true);
        this.currentCourseId.set(id);
        this.loadExistingCourseData(id);
      }
    });
  }

  private initForm(): void {
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
  }

  private loadFilterOptions(): void {
    this.isLoadingFilters.set(true);
    this.courseService.getFilterOptions().subscribe({
      next: (options: CourseFilterOptions) => {
        this.categories.set(options.categories ?? []);

        // نرتب المستويات حسب القيمة الرقمية فى enum (Beginner < Intermediate < Advanced < Expert)
        // بدل الاعتماد على الترتيب اللي راجع من السيرفر (غالباً بيرجع بترتيب عشوائي
        // لأن الـ query فى الباك إند بيعمل Distinct بدون OrderBy صريح).
        const sortedLevels = [...(options.levels ?? [])].sort((a, b) => {
          const orderA = a in CourseLevelMap ? CourseLevelMap[a as keyof typeof CourseLevelMap] : 999;
          const orderB = b in CourseLevelMap ? CourseLevelMap[b as keyof typeof CourseLevelMap] : 999;
          return orderA - orderB;
        });

        this.levels.set(sortedLevels);
        this.isLoadingFilters.set(false);
      },
      error: () => this.isLoadingFilters.set(false),
    });
  }

  private loadExistingCourseData(courseId: string): void {
    this.isLoadingData.set(true);
    this.courseService.getCourseById(courseId).subscribe({
      next: (course) => {
        this.currentInstructorProfileId.set(course.instructorProfileId);

        // معالجة المستوى في حال رجوعه كعدد أو نص
        let formLevel = course.level;
        if (typeof formLevel === 'number') {
          formLevel = REVERSE_LEVEL_MAP[formLevel] || '';
        }

        this.courseForm.patchValue({
          title: course.title,
          description: course.description,
          price: course.price,
          category: course.category,
          level: formLevel,
          language: course.language,
          thumbnailUrl: course.thumbnailUrl
        });

        if (course.thumbnailUrl) {
          this.coverPreviewUrl.set(course.thumbnailUrl);
        }

        if (course.modules) {
          const mappedModules: DraftModule[] = course.modules.map((m: any) => ({
            tempId: this.nextTempId('module'),
            id: m.id,
            title: m.title,
            expanded: false,
            lessons: (m.lessons || []).map((l: any) => ({
              tempId: this.nextTempId('lesson'),
              id: l.id,
              title: l.title,
              type: l.type ?? 0,
              contentUrl: l.contentUrl ?? '',
              durationSeconds: l.durationSeconds ?? 0,
              articleContent: l.articleContent ?? '',
              isPreview: l.isPreview ?? false,
              orderIndex: l.orderIndex
            })).sort((a: any, b: any) => a.orderIndex - b.orderIndex)
          }));
          this.modules.set(mappedModules);
        }
        this.isLoadingData.set(false);
      },
      error: () => {
        this.errorMessage.set('فشل جلب بيانات الدورة التدريبية المراد تعديلها.');
        this.isLoadingData.set(false);
      }
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

  /**
   * يحوّل قيمة المستوى القادمة من الفورم (نص) إلى الرقم المطابق لـ enum CourseLevel في السيرفر.
   * لا يسمح إطلاقاً بإرجاع undefined حتى لا يُحذف الحقل من الـ JSON المرسل
   * (لأن UpdateCourseCommand يتوقع الحقل بشكل إلزامي، وغيابه يسبب فشل الـ Deserialization و 400 فارغ).
   */
  private resolveLevelNumber(levelValue: string): number {
    if (levelValue && levelValue in CourseLevelMap) {
      return CourseLevelMap[levelValue as keyof typeof CourseLevelMap];
    }

    // في حال وصلت القيمة بالفعل كرقم (نادر، لكن للأمان)
    const asNumber = Number(levelValue);
    if (!Number.isNaN(asNumber) && REVERSE_LEVEL_MAP[asNumber]) {
      return asNumber;
    }

    throw new Error('INVALID_LEVEL');
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

    const formValue = this.courseForm.value;

    // تحقق صارم من المستوى قبل أي إرسال للسيرفر (بدل ترك الحقل يختفي بصمت من الـ payload)
    let levelNumber: number;
    try {
      levelNumber = this.resolveLevelNumber(formValue.level);
    } catch {
      this.errorMessage.set('قيمة "المستوى" المختارة غير صالحة، يرجى اختيار مستوى صحيح من القائمة.');
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    try {
      let courseId = this.currentCourseId();

      // تجنب إرسال الصور المرمزة بـ base64 كروابط ثابتة إذا لم تتغير
      let finalThumbnailUrl = formValue.thumbnailUrl || null;
      if (finalThumbnailUrl && finalThumbnailUrl.startsWith('data:')) {
        finalThumbnailUrl = null;
      }

      if (this.isEditMode() && courseId) {
        // ============================================================
        // تحديث كورس قائم: الحقول هنا يجب أن تطابق UpdateCourseCommand
        // تمامًا (CourseId, Title, Description, Price, Category, Level,
        // Language, ThumbnailUrl) — بدون أي حقل زائد مثل
        // instructorProfileId (غير موجود في هذا الأمر إطلاقاً على
        // السيرفر)، لأن أي حقل غير معروف قد يُسقط الـ deserialization
        // بالكامل ويُرجع 400 فارغ دون تفاصيل.
        // ============================================================
        const updateCoursePayload = {
          courseId: courseId,
          title: formValue.title,
          description: formValue.description,
          price: Number(formValue.price),
          category: formValue.category,
          level: levelNumber,
          language: formValue.language,
          thumbnailUrl: finalThumbnailUrl,
        };

        await firstValueFrom(this.courseService.update(courseId, updateCoursePayload));
      } else {
        // ============================================================
        // إنشاء كورس جديد: نفس الحقول المستخدمة سابقاً في صفحة الإضافة
        // الناجحة، بما فيها instructorProfileId (السيرفر يتجاهله ويعيد
        // بناءه من الـ Token على أي حال، لكن تركه هنا غير ضار لأن
        // CreateCourseCommand يحتوي هذا الحقل فعلياً).
        // ============================================================
        const createCoursePayload = {
          instructorProfileId: this.currentInstructorProfileId() || '00000000-0000-0000-0000-000000000000',
          title: formValue.title,
          description: formValue.description,
          price: Number(formValue.price),
          category: formValue.category,
          level: levelNumber,
          language: formValue.language,
          thumbnailUrl: finalThumbnailUrl,
        };

        courseId = await firstValueFrom(this.courseService.create(createCoursePayload));
      }

      const draftModules = this.modules();

      for (let moduleIndex = 0; moduleIndex < draftModules.length; moduleIndex++) {
        const draftModule = draftModules[moduleIndex];
        let moduleId = draftModule.id;

        if (!moduleId) {
          // إضافة وحدة جديدة
          const createdModule = await firstValueFrom(
            this.moduleService.create({
              courseId: courseId!,
              title: draftModule.title.trim(),
              orderIndex: moduleIndex + 1,
            })
          );
          moduleId = this.extractId(createdModule);
        } else {
          // تحديث وحدة قائمة — الحقول مطابقة تماماً لـ UpdateModuleCommand
          // (Id, CourseId, Title, OrderIndex)
          await firstValueFrom(
            this.moduleService.update(moduleId, {
              id: moduleId,
              courseId: courseId!,
              title: draftModule.title.trim(),
              orderIndex: moduleIndex + 1,
            })
          );
        }

        for (let lessonIndex = 0; lessonIndex < draftModule.lessons.length; lessonIndex++) {
          const draftLesson = draftModule.lessons[lessonIndex];
          if (!draftLesson.title.trim()) continue;

          if (!draftLesson.id) {
            // إضافة درس جديد — الحقول هنا مطابقة لـ CreateLessonRequest
            // (تحتاج moduleId و type لأنها موجودة فعلياً فى أمر الإنشاء)
            const createLessonPayload: CreateLessonRequest = {
              moduleId: moduleId!,
              title: draftLesson.title.trim(),
              type: Number(draftLesson.type),
              contentUrl: draftLesson.contentUrl || null,
              articleContent: draftLesson.articleContent || null,
              durationSeconds: Number(draftLesson.durationSeconds) || 0,
              orderIndex: draftLesson.orderIndex || (lessonIndex + 1),
              isPreview: draftLesson.isPreview,
            };
            await firstValueFrom(this.lessonService.create(createLessonPayload));
          } else {
            // ====================================================
            // تحديث درس قائم: الحقول هنا يجب أن تطابق UpdateLessonCommand
            // تمامًا (LessonId, Title, ArticleContent, ContentUrl,
            // DurationSeconds, OrderIndex, IsPreview) — بدون moduleId
            // وبدون type، لأنهما غير موجودين فى هذا الأمر على السيرفر
            // (موجودان فقط فى أمر إنشاء الدرس). إرسالهما كان يسبب
            // فشل الـ deserialization ويُرجع 400 دون تفاصيل.
            // ====================================================
            const updateLessonPayload = {
              lessonId: draftLesson.id,
              title: draftLesson.title.trim(),
              articleContent: draftLesson.articleContent || null,
              contentUrl: draftLesson.contentUrl || null,
              durationSeconds: Number(draftLesson.durationSeconds) || 0,
              orderIndex: draftLesson.orderIndex || (lessonIndex + 1),
              isPreview: draftLesson.isPreview,
            };
            await firstValueFrom(this.lessonService.update(draftLesson.id, updateLessonPayload));
          }
        }
      }

      this.notifications.success(this.isEditMode() ? 'تم تحديث الدورة والمحتوى بنجاح' : 'تم إنشاء الدورة وتفاصيل الدروس بنجاح');
      this.router.navigate(['/dashboard/instructor/courses']);
    } catch (err: any) {
      this.errorMessage.set(
        err?.error?.title ?? err?.error?.detail ?? 'تعذر حفظ البيانات، يرجى التحقق من المدخلات وإعادة المحاولة',
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