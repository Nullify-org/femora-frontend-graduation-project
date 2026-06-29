import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import {
  LucideBell,
  LucideBookOpen,
  LucideChevronDown,
  LucideLayoutDashboard,
  LucideLogOut,
  LucideMenu,
  LucidePackage,
  LucideShoppingCart,
  LucideUser,
  LucideX,
} from '@lucide/angular';
import { AuthService } from '../../../core/auth/auth.service';
import { CartService } from '../../../features/marketplace/services/cart.service';
import { runInBrowser } from '../../../core/utils/platform.util';
import { PROFILE_CONFIGS, ProfileType, AvailableProfile } from '../../../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, 
    RouterLink,
    TranslatePipe,
    LucideBell,
    LucideBookOpen,
    LucideChevronDown,
    LucideLayoutDashboard,
    LucideLogOut,
    LucideMenu,
    LucidePackage,
    LucideShoppingCart,
    LucideUser,
    LucideX,
  ],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  readonly transparent = input(false);
  readonly auth = inject(AuthService);
  private readonly cartApi = inject(CartService);
  private readonly router = inject(Router);

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly dropdownOpen = signal(false);
  readonly cartCount = signal(0);

  readonly navLinks = [
    { path: '/',                     labelKey: 'NAV.HOME' },
    { path: '/lms/catalog',          labelKey: 'NAV.COURSES' },
    { path: '/marketplace/catalog',  labelKey: 'NAV.PRODUCTS' },
    { path: '/', fragment: 'workshops', labelKey: 'NAV.WORKSHOPS' },
    { path: '/', fragment: 'blog',   labelKey: 'NAV.BLOG' },
  ];

  ngOnInit(): void {
    runInBrowser(() => {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 80));
      const userId = this.auth.user()?.id;
      if (this.auth.isAuthenticated() && userId) {
        this.cartApi.getCart(userId).subscribe({
          next: (cart) => this.cartCount.set(cart.items?.length ?? 0),
          error: () => this.cartCount.set(0),
        });
      }
    });
  }

  toggleMenu(): void    { this.menuOpen.update(v => !v); }
  toggleDropdown(): void { this.dropdownOpen.update(v => !v); }
  closeDropdown(): void  { this.dropdownOpen.set(false); }

  logout(): void {
    this.auth.logout().subscribe({
      error: ()    => this.auth.logoutLocal(),
      complete: () => this.auth.logoutLocal(),
    });
  }

  /** Route for "My Profile" link — based on active profile */
  profileRoute(): string {
    const p = this.auth.activeProfile();
    if (p === 'Instructor' || p === 'instructor') return '/profile/instructor';
    if (p === 'Seller')                            return '/profile/seller';
    return '/profile/trainee';
  }

  /** Dashboard route for the current active profile */
  dashboardRoute(): string {
    return this.auth.getDashboardRoute();
  }

  showMyCourses(): boolean {
    const p = this.auth.activeProfile();
    return p === 'Trainee' || p === 'student';
  }

  showMyOrders(): boolean {
    const p = this.auth.activeProfile();
    return p === 'Trainee' || p === 'student' || p === 'Instructor' || p === 'instructor';
  }

  /** Switch to a different profile from the dropdown */
  private readonly http = inject(HttpClient);

  switchRoleLoading = signal<ProfileType | null>(null);
  switchRoleMessage = signal<string | null>(null);

  switchProfile(role: { type: ProfileType; label: string }): void {
    if (this.switchRoleLoading()) return;
    this.switchRoleMessage.set(null);

    const type = role.type;

    // Already active → navigate
    if (this.auth.activeProfile() === type) {
      this.closeDropdown();
      this.router.navigate([this.auth.getDashboardRoute()]);
      return;
    }

    // Has profile already → just select it
    if (this.hasProfile(type)) {
      this.switchRoleLoading.set(type);
      this.auth.selectProfile(type).subscribe({
        next: () => {
          this.switchRoleLoading.set(null);
          this.closeDropdown();
          this.router.navigate([this.auth.getDashboardRoute()]);
        },
        error: () => this.switchRoleLoading.set(null),
      });
      return;
    }

    // Trainee → create immediately via setupProfiles
    if (type === 'Trainee') {
      this.switchRoleLoading.set(type);
      this.auth.setupProfiles(['Trainee']).subscribe({
        next: ({ navigateTo }) => {
          this.switchRoleLoading.set(null);
          this.closeDropdown();
          this.router.navigate([navigateTo]);
        },
        error: () => this.switchRoleLoading.set(null),
      });
      return;
    }

    // Instructor / Seller → open modal with form
    if (type === 'Instructor') { this.activeModal.set('instructor'); this.closeDropdown(); return; }
    if (type === 'Seller')     { this.activeModal.set('seller');     this.closeDropdown(); return; }
  }

  // ── Modal state ────────────────────────────────────────────────────────
  activeModal        = signal<'instructor' | 'seller' | null>(null);
  instructorBio          = '';
  instructorPortfolioUrl = '';
  sellerShopName    = '';
  sellerDescription = '';

  closeModal(): void {
    this.activeModal.set(null);
    this.instructorBio = '';
    this.instructorPortfolioUrl = '';
    this.sellerShopName = '';
    this.sellerDescription = '';
  }

  submitInstructor(): void {
    if (!this.instructorBio.trim()) return;
    this.switchRoleLoading.set('Instructor');
    this.http.post(
      `${environment.apiUrl}/api/Approvals/instructors/apply`,
      { bio: this.instructorBio, portfolioUrl: this.instructorPortfolioUrl },
      { withCredentials: true }
    ).subscribe({
      next: () => {
        this.switchRoleLoading.set(null);
        this.closeModal();
        this.switchRoleMessage.set('✨ تم إرسال طلب التسجيل كمدربة — سيتم مراجعته قريباً');
      },
      error: () => {
        this.switchRoleLoading.set(null);
        this.switchRoleMessage.set('حدث خطأ، حاولي مرة أخرى.');
      },
    });
  }

  submitSeller(): void {
    if (!this.sellerShopName.trim()) return;
    this.switchRoleLoading.set('Seller');
    this.http.post(
      `${environment.apiUrl}/api/Approvals/sellers/apply`,
      { shopName: this.sellerShopName, description: this.sellerDescription },
      { withCredentials: true }
    ).subscribe({
      next: () => {
        this.switchRoleLoading.set(null);
        this.closeModal();
        this.switchRoleMessage.set('✨ تم إرسال طلب التسجيل كبائعة — سيتم مراجعته قريباً');
      },
      error: () => {
        this.switchRoleLoading.set(null);
        this.switchRoleMessage.set('حدث خطأ، حاولي مرة أخرى.');
      },
    });
  }

  /** True when user has multiple profiles to switch between */
  get canSwitchProfile(): boolean {
    return this.auth.isAuthenticated();
  }

  // All non-admin switchable roles to show in dropdown
  readonly switchableRoles = [
    { type: 'Trainee'    as ProfileType, label: 'متدربة',   color: 'bg-blue-400',   desc: 'تعلمي مهارات جديدة',      dashboardRoute: '/dashboard/trainee' },
    { type: 'Instructor' as ProfileType, label: 'مدربة',    color: 'bg-purple-400', desc: 'شاركي خبرتك وأنشئي دورات', dashboardRoute: '/dashboard/instructor' },
    { type: 'Seller'     as ProfileType, label: 'بائعة',    color: 'bg-amber-400',  desc: 'بيعي منتجاتك واكسبي',      dashboardRoute: '/dashboard/seller' },
  ];

  hasProfile(type: ProfileType): boolean {
    return this.auth.pendingProfiles().some(p => p.type === type);
  }
}
