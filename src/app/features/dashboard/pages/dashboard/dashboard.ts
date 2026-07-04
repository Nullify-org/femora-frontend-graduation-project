import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { Card } from '../../../../shared/components/card/card';
import { AuthService } from '../../../../core/auth/auth.service';
import { ContinueLearning } from '../../widgets/continue-learning/continue-learning';
import { RecommendedProducts } from '../../widgets/recommended-products/recommended-products';
import { AiWidget } from '../../widgets/ai-widget/ai-widget';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, Sidebar, Card, ContinueLearning, RecommendedProducts, AiWidget],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  readonly auth = inject(AuthService);
<<<<<<< Updated upstream
=======

  private readonly enrollmentService  = inject(EnrollmentService);
  private readonly orderService       = inject(OrderService);
  private readonly subscriptionService = inject(SubscriptionService);

  // raw data signals
  readonly enrollments = signal<Enrollment[]>([]);
  readonly orders      = signal<Order[]>([]);
  readonly subscription = signal<SubscriptionStatus | null>(null);

  // ui state
  readonly isLoading = signal(true);
  readonly loadError = signal<string | null>(null);

  // derived stats for the metrics grid
  readonly continuingCount = computed(() =>
    this.enrollments().filter((e) => !e.isCompleted).length,
  );
  readonly completedCount = computed(() =>
    this.enrollments().filter((e) => e.isCompleted).length,
  );
  readonly ordersCount = computed(() => this.orders().length);

  // top 3 in-progress courses, for the "continue learning" widget
  readonly continuingEnrollments = computed(() =>
    this.enrollments()
      .filter((e) => !e.isCompleted)
      .slice(0, 3),
  );

  constructor() {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);
    this.loadError.set(null);

    forkJoin({
      enrollments: this.enrollmentService.getMyEnrollments(1, 50),
      orders: this.orderService.myOrders(),
      subscription: this.subscriptionService.getStatusOrNull(),
    }).subscribe({
      next: ({ enrollments, orders, subscription }) => {
        this.enrollments.set(enrollments.items ?? []);
        this.orders.set(orders ?? []);
        this.subscription.set(subscription);
        this.isLoading.set(false);
      },
      error: () => {
        this.loadError.set('تعذر تحميل بيانات لوحة التحكم');
        this.isLoading.set(false);
      },
    });
  }
>>>>>>> Stashed changes
}
