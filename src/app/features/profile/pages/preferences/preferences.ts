import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { ChatService } from '../../../ai-assistant/services/chat.service';
import { CourseService } from '../../../lms/services/course.service';
import { ProductService } from '../../../marketplace/services/product.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { runInBrowser } from '../../../../core/utils/platform.util';
import { InterestCategory } from '../../../../core/models/api.model';

interface PickerItem {
  id: string;
  name: string;
  count?: number;
}

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './preferences.html',
})
export class Preferences {
  private readonly chat = inject(ChatService);
  private readonly courseApi = inject(CourseService);
  private readonly productApi = inject(ProductService);
  private readonly notifications = inject(NotificationService);

  readonly isLoading = signal(true);
  readonly isSaving = signal(false);
  readonly errorMessage = signal('');

  readonly courseCategories = signal<PickerItem[]>([]);
  readonly productCategories = signal<PickerItem[]>([]);

  readonly selectedCourseCategoryIds = signal<Set<string>>(new Set());
  readonly selectedProductCategoryIds = signal<Set<string>>(new Set());

  readonly hasAnySelection = computed(
    () => this.selectedCourseCategoryIds().size > 0 || this.selectedProductCategoryIds().size > 0,
  );

  constructor() {
    runInBrowser(() => this.load());
  }

  private load(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    // Category catalogs (id + name for every category) and the user's current
    // selections are two separate calls - merge them once both come back so the
    // checkboxes render pre-checked with real category names, not raw ids.
    let courseCats: PickerItem[] = [];
    let productCats: PickerItem[] = [];
    let pending = 3;

    const finish = () => {
      pending -= 1;
      if (pending === 0) {
        this.courseCategories.set(courseCats);
        this.productCategories.set(productCats);
        this.isLoading.set(false);
      }
    };

    this.courseApi.getCategories().subscribe({
      next: (list) => {
        courseCats = (list ?? []).map((c) => ({ id: c.id, name: c.name, count: c.courseCount }));
        finish();
      },
      error: () => finish(),
    });

    this.productApi.getCategories().subscribe({
      next: (list) => {
        productCats = (list ?? []).map((c) => ({ id: c.id, name: c.name, count: c.productCount }));
        finish();
      },
      error: () => finish(),
    });

    this.chat.getMyInterests().subscribe({
      next: (res) => {
        this.selectedCourseCategoryIds.set(
          new Set((res.courseCategories ?? []).filter((c: InterestCategory) => c.isSelected).map((c) => c.id)),
        );
        this.selectedProductCategoryIds.set(
          new Set((res.productCategories ?? []).filter((c: InterestCategory) => c.isSelected).map((c) => c.id)),
        );
        finish();
      },
      error: () => {
        this.errorMessage.set('تعذر تحميل اهتماماتك الحالية');
        finish();
      },
    });
  }

  isCourseCategorySelected(id: string): boolean {
    return this.selectedCourseCategoryIds().has(id);
  }

  isProductCategorySelected(id: string): boolean {
    return this.selectedProductCategoryIds().has(id);
  }

  toggleCourseCategory(id: string): void {
    this.selectedCourseCategoryIds.update((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  toggleProductCategory(id: string): void {
    this.selectedProductCategoryIds.update((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  save(): void {
    this.isSaving.set(true);

    this.chat
      .setInterests(
        Array.from(this.selectedCourseCategoryIds()),
        Array.from(this.selectedProductCategoryIds()),
      )
      .subscribe({
        next: () => {
          this.isSaving.set(false);
          this.notifications.success('تم تحديث اهتماماتك بنجاح — هتبان في اقتراحات الكورسات والمنتجات');
        },
        error: (err) => {
          this.isSaving.set(false);
          this.notifications.error(err?.error?.title ?? err?.error?.detail ?? 'تعذر حفظ اهتماماتك');
        },
      });
  }
}
