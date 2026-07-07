import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../../shared/components/card/card';
import { ChatService } from '../../../ai-assistant/services/chat.service';
import { RecommendedCourse } from '../../../../core/models/api.model';
import { formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-recommended-courses',
  standalone: true,
  imports: [RouterLink, Card],
  templateUrl: './recommended-courses.html',
})
export class RecommendedCourses {
  private readonly chatApi = inject(ChatService);

  readonly courses = signal<RecommendedCourse[]>([]);
  readonly isLoading = signal(true);

  readonly formatPrice = formatPrice;

  constructor() {
    runInBrowser(() => {
      this.chatApi.recommendedCourses(4).subscribe({
        next: (courses) => {
          this.courses.set(courses ?? []);
          this.isLoading.set(false);
        },
        error: () => {
          // Recommendations are a "nice to have" - never block the dashboard on this.
          this.isLoading.set(false);
        },
      });
    });
  }

  categoryOf(course: RecommendedCourse): string {
    return course.categoryName ?? course.category ?? '';
  }
}
