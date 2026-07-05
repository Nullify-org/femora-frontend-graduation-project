import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  standalone: true,
  template: '',
})
export class HomeRedirect implements OnInit {

  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {

    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/landing');
      return;
    }

    const dashboardRoute =
      this.auth.getDashboardRoute();

    if (dashboardRoute) {
      this.router.navigateByUrl(dashboardRoute);
      return;
    }

    this.router.navigateByUrl('/select-profile');
  }
}
