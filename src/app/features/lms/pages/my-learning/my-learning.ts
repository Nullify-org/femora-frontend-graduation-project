import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';

import { EnrollmentService } from '../../services/enrollment.service';
import { Enrollment } from '../../../../core/models/api.model';

@Component({
  selector: 'app-my-learning',
  imports: [CommonModule,RouterLink,Sidebar],
  templateUrl: './my-learning.html',
  styleUrl: './my-learning.css',
})
export class MyLearning {

  private readonly enrollmentApi =
    inject(EnrollmentService);

  readonly enrollments =
    signal<Enrollment[]>([]);

  readonly loading =
    signal(true);

  readonly error =
    signal('');

  constructor() {
    this.loadEnrollments();
  }

  loadEnrollments(): void {

    this.loading.set(true);

    this.enrollmentApi
      .getMyEnrollments()
      .subscribe({
        next: (response) => {
          this.enrollments.set(response.items ?? []);
          this.loading.set(false);
        },

        error: () => {

          this.error.set(
            'تعذر تحميل الدورات'
          );

          this.loading.set(false);
        },
      });
  }
}
