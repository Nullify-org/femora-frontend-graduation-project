import { Component, inject, input, OnInit, signal } from '@angular/core';
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
import { ProfileType, AvailableProfile } from '../../../core/models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
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
  switchProfile(profile: AvailableProfile): void {
    this.auth.selectProfile(profile.type).subscribe({
      next: () => {
        this.closeDropdown();
        this.router.navigate([this.auth.getDashboardRoute()]);
      },
    });
  }

  /** True when user has multiple profiles to switch between */
  get canSwitchProfile(): boolean {
    return this.auth.pendingProfiles().length > 1;
  }
}
