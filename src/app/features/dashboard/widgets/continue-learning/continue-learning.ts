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
      this.enrollmentsApi.getMyEnrollments(1, 3).subscribe({
        next: (response) => {
          this.enrollments = response.data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    });
  }

  title(enrollment: Enrollment): string {
    return enrollment.courseTitle ?? enrollment.courseTitle ?? 'دورة';
  }

  progress(enrollment: Enrollment): number {
    return enrollment.progressPercent ?? enrollment.progressPercent ?? 0;
  }
}
