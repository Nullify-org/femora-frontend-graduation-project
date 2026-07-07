import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-dashboard-redirect',
  standalone: true,
  template: `
    <div class="min-h-screen flex items-center justify-center bg-[#FAF7F4]">
      <div class="text-center">
        <svg class="w-8 h-8 animate-spin text-[#C8956C] mx-auto mb-3" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="32" stroke-dashoffset="12"/>
        </svg>
        <p class="text-sm text-[#8B6355]">جارى التحميل...</p>
      </div>
    </div>
  `,
})
export class DashboardRedirect implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    // If there are pending profiles waiting for selection, go there first
    if (this.auth.pendingProfiles().length > 0) {
      this.router.navigate(['/select-profile'], { replaceUrl: true });
      return;
    }
    const route = this.auth.getDashboardRoute();
    this.router.navigate([route], { replaceUrl: true });
  }
}
