import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../../shared/components/card/card';
import { EnrollmentService } from '../../../lms/services/enrollment.service';
import { Enrollment } from '../../../../core/models/api.model';
import { courseEmoji } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-continue-learning',
  standalone: true,
  imports: [RouterLink, Card],
  templateUrl: './continue-learning.html',
})
export class ContinueLearning {
  private readonly enrollmentsApi = inject(EnrollmentService);

  enrollments: Enrollment[] = [];
  isLoading = true;

  readonly courseEmoji = courseEmoji;

  constructor() {
    runInBrowser(() => {
      this.enrollmentsApi.myEnrollments(1, 3).subscribe({
        next: (items) => {
          this.enrollments = items;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    });
  }

  title(enrollment: Enrollment): string {
    return enrollment.courseTitle ?? enrollment.title ?? 'دورة';
  }

  progress(enrollment: Enrollment): number {
    return enrollment.progressPercent ?? enrollment.progress ?? 0;
  }
}
