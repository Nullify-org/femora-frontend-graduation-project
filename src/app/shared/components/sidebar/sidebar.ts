import { Component, inject, computed, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileType } from '../../../core/models/user.model';
import {
  LucideLayoutDashboard,
  LucideBookOpen,
  LucidePackage,
  LucideCpu,
  LucideUser,
  LucideLogOut,
  LucideUsers,
  LucideShoppingCart,
  LucideClipboardList,
  LucideHeart,
  LucideFileText,
  LucideSettings,
} from '@lucide/angular';
import { AuthService } from '../../../core/auth/auth.service';

export interface SidebarLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
    LucideLayoutDashboard, LucideBookOpen, LucidePackage,
    LucideCpu, LucideUser, LucideLogOut,
    LucideUsers, LucideShoppingCart, LucideClipboardList,
    LucideHeart, LucideFileText, LucideSettings
  ],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly sidebarOpen = signal(true);

  toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  readonly links = computed<SidebarLink[]>(() => {
    const profile = this.auth.activeProfile();
    const role = this.auth.user()?.role;

    const prof = (profile ?? role ?? '').toLowerCase();

    if (prof === 'admin') {
      return [
        { label: 'لوحة التحكم', path: '/dashboard/admin', icon: 'dashboard' },
        { label: 'المستخدمون', path: '/dashboard/users', icon: 'users' },
        { label: 'الدورات', path: '/dashboard/courses', icon: 'courses' },
        { label: 'المنتجات', path: '/dashboard/products', icon: 'products' },
        { label: 'الطلبات', path: '/dashboard/orders', icon: 'orders' },
        { label: 'التقارير', path: '/dashboard/reports', icon: 'reports' },
        { label: 'الإعدادات', path: '/profile/preferences', icon: 'settings' },
      ];
    }

    if (prof === 'instructor' || prof === 'instructor') {
      return [
        { label: 'لوحة التحكم', path: '/dashboard/instructor', icon: 'dashboard' },
        { label: 'دوراتي', path: '/dashboard/instructor', icon: 'courses' },
        { label: 'الدروس', path: '/dashboard/instructor/lessons', icon: 'lessons' },
        { label: 'الاختبارات', path: '/dashboard/instructor/quizzes', icon: 'quizzes' },
        { label: 'الطلاب', path: '/dashboard/instructor/students', icon: 'users' },
        { label: 'السوق', path: '/marketplace/catalog', icon: 'products' },
        { label: 'الملف الشخصى', path: '/profile/instructor', icon: 'user' },
        { label: 'الإعدادات', path: '/profile/preferences', icon: 'settings' },
      ];
    }

    if (prof === 'seller') {
      return [
        { label: 'لوحة التحكم', path: '/dashboard/seller', icon: 'dashboard' },
        { label: 'منتجاتي', path: '/dashboard/seller/products', icon: 'products' },
        { label: 'طلباتي', path: '/dashboard/seller/orders', icon: 'orders' },
        { label: 'الفواتير', path: '/dashboard/seller/invoices', icon: 'reports' },
        { label: 'السوق', path: '/marketplace/catalog', icon: 'products' },
        { label: 'الملف الشخصى', path: '/profile/seller', icon: 'user' },
        { label: 'الإعدادات', path: '/profile/preferences', icon: 'settings' },
      ];
    }

    if (prof === 'buyer') {
      return [
        { label: 'لوحة التحكم', path: '/dashboard/buyer', icon: 'dashboard' },
        { label: 'السوق', path: '/marketplace/catalog', icon: 'products' },
        { label: 'طلباتي', path: '/marketplace/orders', icon: 'orders' },
        { label: 'المفضلة', path: '/marketplace/wishlist', icon: 'wishlist' },
        { label: 'الملف الشخصى', path: '/profile/buyer', icon: 'user' },
        { label: 'الإعدادات', path: '/profile/preferences', icon: 'settings' },
      ];
    }

    // Default to Trainee/Student (No 'الرسائل' / 'messaging' links are present)
    return [
      { label: 'لوحة التحكم', path: '/dashboard/trainee', icon: 'dashboard' },
      { label: 'دوراتي', path: '/lms/my-learning', icon: 'courses' },
      { label: 'الاختبارات', path: '/lms/quiz/demo-quiz', icon: 'quizzes' },
      { label: 'المساعد الذكي', path: '/ai/chat', icon: 'chat' },
      { label: 'السوق', path: '/marketplace/catalog', icon: 'products' },
      { label: 'الملف الشخصى', path: '/profile/trainee', icon: 'user' },
      { label: 'الإعدادات', path: '/profile/preferences', icon: 'settings' },
    ];
  });

  switchProfile(type: ProfileType): void {
    const current = this.auth.activeProfile();
    if (current === type) {
      this.router.navigate([this.auth.getDashboardRoute()]);
      return;
    }

    this.auth.selectProfile(type).subscribe({
      next: () => this.router.navigate([this.auth.getDashboardRoute()]),
      error: () => {},
    });
  }

  logout(): void {
    this.auth.logout().subscribe({
      error: ()    => this.auth.logoutLocal(),
      complete: () => this.auth.logoutLocal(),
    });
  }
}