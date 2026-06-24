import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-dashboard-redirect',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-cream-light">
      <p class="text-text-medium">{{ 'COMMON.LOADING' | translate }}</p>
    </div>
  `,
})
export class DashboardRedirect implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    const user = this.auth.user();
    if (user?.role === 'Admin') {
      void this.router.navigate(['/dashboard/admin']);
      return;
    }

    const profile = this.auth.activeProfile();
    const routes: Record<string, string> = {
      Trainee: '/dashboard/trainee',
      Instructor: '/dashboard/instructor',
      Seller: '/dashboard/seller',
    };

    void this.router.navigate([routes[profile ?? ''] ?? '/dashboard/trainee']);
  }
}
