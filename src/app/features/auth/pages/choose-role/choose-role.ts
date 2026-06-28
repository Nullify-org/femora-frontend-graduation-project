import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../../../core/services/storage.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ProfileType } from '../../../../core/models/user.model';

@Component({
  selector: 'app-choose-role',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './choose-role.html',
  styleUrl: './choose-role.css',
})
export class ChooseRole {
  private readonly router  = inject(Router);
  private readonly storage = inject(StorageService);
  private readonly auth    = inject(AuthService);

  selectedRoles: string[] = [];
  isLoading = signal(false);

  toggleRole(role: string): void {
    const idx = this.selectedRoles.indexOf(role);
    if (idx === -1) this.selectedRoles.push(role);
    else            this.selectedRoles.splice(idx, 1);
  }

  hasRole(role: string): boolean {
    return this.selectedRoles.includes(role);
  }

  next(): void {
    if (this.isLoading()) return;

    // No role selected → buyer behavior → landing page
    if (this.selectedRoles.length === 0) {
      this.router.navigate(['/']);
      return;
    }

    const profileTypes = this.selectedRoles
      .map(r => this.toProfileType(r))
      .filter((p): p is ProfileType => p !== null);

    this.isLoading.set(true);
    this.auth.setupProfiles(profileTypes).subscribe({
      next: ({ navigateTo }) => {
        this.isLoading.set(false);
        this.storage.remove('femora_onboarding_roles');
        this.router.navigate([navigateTo]);
      },
      error: () => {
        this.isLoading.set(false);
        // fallback → login
        this.router.navigate(['/login']);
      },
    });
  }

  private toProfileType(role: string): ProfileType | null {
    const map: Record<string, ProfileType> = {
      trainee:    'Trainee',
      instructor: 'Instructor',
      seller:     'Seller',
    };
    return map[role] ?? null;
  }
}
