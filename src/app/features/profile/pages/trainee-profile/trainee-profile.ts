import { Component, inject } from '@angular/core';
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

  enrollments: Enrollment[] = [];
  orders: Order[] = [];
  isLoading = true;

  readonly formatPrice = formatPrice;

  constructor() {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;

      this.enrollmentsApi.myEnrollments().subscribe({
        next: (items) => (this.enrollments = items),
      });

      this.ordersApi.myOrders(userId).subscribe({
        next: (items) => {
          this.orders = items;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    });
  }
}
