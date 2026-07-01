import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../core/auth/auth.service';
import { ProfileType } from '../../../../core/models/user.model';
import { environment } from '../../../../../environments/environment';

interface RoleOption {
  type: ProfileType;
  label: string;
  description: string;
  icon: string;
  dashboardRoute: string;
  requiresApproval: boolean;
}

const ROLE_OPTIONS: RoleOption[] = [
  {
    type: 'Trainee',
    label: 'متدربة',
    description: 'تعلمي مهارات جديدة وتابعي دوراتك',
    icon: '🎓',
    dashboardRoute: '/dashboard/trainee',
    requiresApproval: false,
  },
  {
    type: 'Instructor',
    label: 'مدربة',
    description: 'شاركي خبرتك وأنشئي دورات تعليمية',
    icon: '👩‍🏫',
    dashboardRoute: '/dashboard/instructor',
    requiresApproval: true,
  },
  {
    type: 'Seller',
    label: 'بائعة',
    description: 'بيعي منتجاتك واكسبي دخلاً ثابتاً',
    icon: '🛍️',
    dashboardRoute: '/dashboard/seller',
    requiresApproval: true,
  },
  {
    type: 'Buyer',
    label: 'مشترية',
    description: 'تصفحي واشتري منتجات ودورات مميزة',
    icon: '🛒',
    dashboardRoute: '/dashboard/buyer',
    requiresApproval: false,
  },
  {
    type: 'Admin',
    label: 'مديرة',
    description: 'إدارة المنصة والمستخدمين والعمليات',
    icon: '⚙️',
    dashboardRoute: '/dashboard/admin',
    requiresApproval: false,
  },
];

@Component({
  selector: 'app-switch-role',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switch-role.html',
})
export class SwitchRole {
  private readonly auth   = inject(AuthService);
  private readonly router = inject(Router);
  private readonly http   = inject(HttpClient);

  readonly roles         = ROLE_OPTIONS;
  readonly activeProfile = this.auth.activeProfile;
  readonly availableProfiles = this.auth.availableProfiles;

  readonly displayedRoles = computed<RoleOption[]>(() => {
    const isAdmin = this.auth.user()?.role?.toLowerCase() === 'admin';
    if (isAdmin) {
      return this.roles.filter(r => r.type === 'Buyer' || r.type === 'Admin');
    } else {
      return this.roles.filter(r => r.type === 'Trainee' || r.type === 'Instructor' || r.type === 'Seller');
    }
  });

  isLoading      = signal<ProfileType | null>(null);
  pendingMessage = signal<string | null>(null);
  activeModal    = signal<'instructor' | 'seller' | null>(null);


  // Instructor form
  instructorBio          = '';
  instructorPortfolioUrl = '';

  // Seller form
  sellerShopName    = '';
  sellerDescription = '';

  hasProfile(type: ProfileType): boolean {
    return this.availableProfiles().some(p => p.type === type);
  }

  isActive(type: ProfileType): boolean {
    return this.activeProfile() === type;
  }

  switchTo(role: RoleOption): void {
    if (this.isLoading()) return;
    this.pendingMessage.set(null);

    // Already active → navigate
    if (this.isActive(role.type)) {
      this.router.navigate([role.dashboardRoute]);
      return;
    }

    // Has profile already → select it
    if (this.hasProfile(role.type)) {
      this.isLoading.set(role.type);
      this.auth.selectProfile(role.type).subscribe({
        next: () => {
          this.isLoading.set(null);
          this.router.navigate([role.dashboardRoute]);
        },
        error: () => this.isLoading.set(null),
      });
      return;
    }

    // No profile yet
    if (role.type === 'Trainee') {
      // Trainee → create immediately
      this.isLoading.set('Trainee');
      this.auth.setupProfiles(['Trainee']).subscribe({
        next: ({ navigateTo }) => {
          this.isLoading.set(null);
          this.router.navigate([navigateTo]);
        },
        error: () => this.isLoading.set(null),
      });
      return;
    }

    if (role.type === 'Buyer' || role.type === 'Admin') {
      this.isLoading.set(role.type);
      this.auth.selectProfile(role.type).subscribe({
        next: () => {
          this.isLoading.set(null);
          this.router.navigate([role.dashboardRoute]);
        },
        error: () => {
          this.isLoading.set(null);
          this.router.navigate([role.dashboardRoute]);
        }
      });
      return;
    }

    // Instructor / Seller → open modal
    if (role.type === 'Instructor') this.activeModal.set('instructor');
    if (role.type === 'Seller')     this.activeModal.set('seller');
  }

  closeModal(): void {
    this.activeModal.set(null);
    this.instructorBio = '';
    this.instructorPortfolioUrl = '';
    this.sellerShopName = '';
    this.sellerDescription = '';
  }

  submitInstructor(): void {
    if (!this.instructorBio.trim()) return;
    this.isLoading.set('Instructor');
    this.http.post(
      `${environment.apiUrl}/api/Approvals/instructors/apply`,
      { bio: this.instructorBio, portfolioUrl: this.instructorPortfolioUrl },
      { withCredentials: true }
    ).subscribe({
      next: () => {
        this.isLoading.set(null);
        this.closeModal();
        this.pendingMessage.set('تم إرسال طلب التسجيل كمدربة — سيتم مراجعته من الإدارة قريباً ✨');
      },
      error: () => {
        this.isLoading.set(null);
        this.closeModal();
        this.pendingMessage.set('حدث خطأ، حاولي مرة أخرى.');
      },
    });
  }

  submitSeller(): void {
    if (!this.sellerShopName.trim()) return;
    this.isLoading.set('Seller');
    this.http.post(
      `${environment.apiUrl}/api/Approvals/sellers/apply`,
      { shopName: this.sellerShopName, description: this.sellerDescription },
      { withCredentials: true }
    ).subscribe({
      next: () => {
        this.isLoading.set(null);
        this.closeModal();
        this.pendingMessage.set('تم إرسال طلب التسجيل كبائعة — سيتم مراجعته من الإدارة قريباً ✨');
      },
      error: () => {
        this.isLoading.set(null);
        this.closeModal();
        this.pendingMessage.set('حدث خطأ، حاولي مرة أخرى.');
      },
    });
  }
}
