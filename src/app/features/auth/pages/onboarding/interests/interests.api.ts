import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ChatService } from '../../../../ai-assistant/services/chat.service';
import { CourseService } from '../../../../lms/services/course.service';
import { ProductService } from '../../../../marketplace/services/product.service';
import { NotificationService } from '../../../../../core/services/notification.service';
import { runInBrowser } from '../../../../../core/utils/platform.util';

type InterestKind = 'course' | 'product';

interface Interest {
  id: string;
  kind: InterestKind;
  label: string;
  desc: string;
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interests.html',
  styleUrl: './interests.css',
})
export class Interests {
  private readonly router = inject(Router);
  private readonly chat = inject(ChatService);
  private readonly courseApi = inject(CourseService);
  private readonly productApi = inject(ProductService);
  private readonly notifications = inject(NotificationService);

  readonly isSaving = signal(false);

  // Selected here means "course/product CATEGORY ids the trainee cares about" -
  // this is what actually drives /api/ai/recommendations/courses and /products,
  // unlike the old onboarding catalog which was never wired to anything.
  selected = signal<string[]>([]);

  readonly interests = signal<Interest[]>([]);

  constructor() {
    runInBrowser(() => this.loadInterests());
  }

  private loadInterests(): void {
    this.courseApi.getCategories().subscribe({
      next: (list) => {
        const mapped: Interest[] = (list ?? []).map((c) => ({
          id: c.id,
          kind: 'course' as const,
          label: c.name,
          desc: c.courseCount ? `${c.courseCount} كورس متاح` : 'كورسات في هذا المجال',
        }));
        this.interests.update((prev) => [...prev.filter((i) => i.kind !== 'course'), ...mapped]);
      },
    });

    this.productApi.getCategories().subscribe({
      next: (list) => {
        const mapped: Interest[] = (list ?? []).map((c) => ({
          id: c.id,
          kind: 'product' as const,
          label: c.name,
          desc: c.productCount ? `${c.productCount} منتج متاح` : 'منتجات في هذا المجال',
        }));
        this.interests.update((prev) => [...prev.filter((i) => i.kind !== 'product'), ...mapped]);
      },
    });
  }

  toggle(id: string): void {
    this.selected.update((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return [...prev, id];
    });
  }

  isSelected(id: string): boolean {
    return this.selected().includes(id);
  }

  next(): void {
    if (this.selected().length === 0 || this.isSaving()) {
      this.router.navigate(['/onboarding/goal']);
      return;
    }

    const selectedIds = new Set(this.selected());
    const courseCategoryIds = this.interests()
      .filter((i) => i.kind === 'course' && selectedIds.has(i.id))
      .map((i) => i.id);
    const productCategoryIds = this.interests()
      .filter((i) => i.kind === 'product' && selectedIds.has(i.id))
      .map((i) => i.id);

    this.isSaving.set(true);
    this.chat.setInterests(courseCategoryIds, productCategoryIds).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.router.navigate(['/onboarding/goal']);
      },
      error: () => {
        this.isSaving.set(false);
        this.notifications.error('تعذر حفظ اهتماماتك، بس ممكن تعدّليها لاحقاً من الإعدادات');
        this.router.navigate(['/onboarding/goal']);
      },
    });
  }
}
