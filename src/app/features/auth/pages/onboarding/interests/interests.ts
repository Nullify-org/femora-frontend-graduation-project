import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../core/auth/auth.service';
import { NotificationService } from '../../../../../core/services/notification.service';
import { INTEREST_OPTIONS, InterestOption } from '../../../../../core/models/user.model';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.html',
})
export class Interests {
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly notifications = inject(NotificationService);

  readonly isLoading = signal(false);

  options: Array<InterestOption & { selected: boolean }> =
    INTEREST_OPTIONS.map(o => ({ ...o, selected: false }));

  toggle(option: InterestOption & { selected: boolean }): void {
    option.selected = !option.selected;
  }

  hasSelection(): boolean {
    return this.options.some(o => o.selected);
  }

  get selectedCount(): number {
    return this.options.filter(o => o.selected).length;
  }

  next(): void {
    const selected = this.options.filter(o => o.selected).map(o => o.label);

    if (selected.length === 0) {
      this.router.navigate(['/onboarding/goal']);
      return;
    }

    this.isLoading.set(true);

    // Call POST /api/ai/interests to save selected interests
    this.http.post(`${environment.apiUrl}/api/ai/interests`, { interests: selected }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(['/onboarding/goal']);
      },
      error: () => {
        // Non-blocking — navigate anyway
        this.isLoading.set(false);
        this.router.navigate(['/onboarding/goal']);
      },
    });
  }

  skip(): void {
    this.router.navigate(['/onboarding/goal']);
  }
}
