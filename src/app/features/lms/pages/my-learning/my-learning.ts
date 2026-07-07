<<<<<<< HEAD
import { Component, inject, signal } from '@angular/core';
=======
﻿import { Component, inject, signal } from '@angular/core';
>>>>>>> origin/master
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';

import { EnrollmentService } from '../../services/enrollment.service';
import { Enrollment } from '../../../../core/models/api.model';
<<<<<<< HEAD

@Component({
  selector: 'app-my-learning',
  imports: [CommonModule,RouterLink,Sidebar],
=======
import { runInBrowser } from '../../../../core/utils/platform.util';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'app-my-learning',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
>>>>>>> origin/master
  templateUrl: './my-learning.html',
  styleUrl: './my-learning.css',
})
export class MyLearning {
<<<<<<< HEAD

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
=======
  private readonly enrollmentApi = inject(EnrollmentService);
  private readonly storage = inject(StorageService);
  private readonly cacheKey = 'femora.my-learning.enrollments';

  readonly enrollments = signal<Enrollment[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.restoreCachedEnrollments();
    runInBrowser(() => this.loadEnrollments());
  }

  private restoreCachedEnrollments(): void {
    const cached = this.storage.get<Enrollment[]>(this.cacheKey);
    if (cached?.length) {
      this.enrollments.set(cached);
      this.error.set('');
      this.loading.set(false);
    }
  }

  loadEnrollments(): void {
    this.error.set('');

    this.enrollmentApi.getMyEnrollments().subscribe({
      next: (response) => {
        const items = response?.data ?? [];
        this.enrollments.set(items);
        this.storage.set(this.cacheKey, items);
        this.loading.set(false);
      },
      error: () => {
        if (this.enrollments().length === 0) {
          this.error.set('تعذر تحميل الدورات');
        }
        this.loading.set(false);
      },
    });
  }
}


>>>>>>> origin/master
