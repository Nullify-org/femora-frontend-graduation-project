import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { EnrollmentService } from '../../../lms/services/enrollment.service';
import { OrderService } from '../../../marketplace/services/order.service';
import { Enrollment, Order } from '../../../../core/models/api.model';
import { formatPrice } from '../../../../core/utils/api-response.util';
import { runInBrowser } from '../../../../core/utils/platform.util';

@Component({
  selector: 'app-trainee-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './trainee-profile.html',
})
export class TraineeProfile {
  readonly auth = inject(AuthService);
  private readonly enrollmentsApi = inject(EnrollmentService);
  private readonly ordersApi = inject(OrderService);

  readonly enrollments = signal<Enrollment[]>([]);
  readonly orders = signal<Order[]>([]);
  readonly isLoading = signal(true);

  readonly formatPrice = formatPrice;

  constructor() {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;

<<<<<<< HEAD
<<<<<<< Updated upstream
      this.enrollmentsApi.myEnrollments().subscribe({
        next: (items) => (this.enrollments = items),
=======
      this.enrollmentsApi.getMyEnrollments().subscribe({
        next: (response) => this.enrollments.set(response.items),
>>>>>>> Stashed changes
=======
      this.enrollmentsApi.getMyEnrollments().subscribe({
        next: (response) => this.enrollments.set(response.data),
>>>>>>> origin/master
      });

      this.ordersApi.myOrders(userId).subscribe({
        next: (items) => {
          this.orders.set(items);
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
    });
  }
}
