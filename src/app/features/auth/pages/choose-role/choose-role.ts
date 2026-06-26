import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'app-choose-role',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './choose-role.html',
  styleUrl: './choose-role.css',
})
export class ChooseRole {
  private readonly router = inject(Router);
  private readonly storage = inject(StorageService);

  selectedRoles: string[] = [];

  toggleRole(role: string): void {
    const idx = this.selectedRoles.indexOf(role);
    if (idx === -1) {
      this.selectedRoles.push(role);
    } else {
      this.selectedRoles.splice(idx, 1);
    }
  }

  hasRole(role: string): boolean {
    return this.selectedRoles.includes(role);
  }

  // إذا لم يختر المستخدمة أي دور تُسجَّل كـ Buyer تلقائياً
  next(): void {
    const roles = this.selectedRoles.length > 0 ? this.selectedRoles : ['buyer'];
    this.storage.set('femora_onboarding_roles', roles);
    this.router.navigate(['/onboarding/welcome']);
  }
}
