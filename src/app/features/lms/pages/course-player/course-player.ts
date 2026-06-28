import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { EnrollmentService } from '../../services/enrollment.service';
import { NotificationService } from '../../../../core/services/notification.service';

import { EnrollmentDetailsResponse } from '../../../../core/models/api.model';

@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './course-player.html',
})
export class CoursePlayer {
  private readonly route = inject(ActivatedRoute);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly notifications = inject(NotificationService);

  readonly enrollment = signal<EnrollmentDetailsResponse | null>(null);
  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  readonly isUnlocking = signal(false);

  private enrollmentId = '';

  constructor() {
    const id = this.route.snapshot.paramMap.get('enrollmentId');

    if (!id) {
      this.errorMessage.set('معرّف التسجيل غير صالح');
      this.isLoading.set(false);
      return;
    }

    this.enrollmentId = id;
    this.loadEnrollment();
  }

  private loadEnrollment(): void {
    this.isLoading.set(true);

    this.enrollmentsApi.getEnrollmentDetails(this.enrollmentId).subscribe({
      next: (data) => {
        this.enrollment.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('تعذّر تحميل بيانات التسجيل');
        this.isLoading.set(false);
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
          err?.error?.title ?? err?.error?.detail ?? 'تعذّر فتح الوحدة التالية'
        );
      },
    });
  }
}
