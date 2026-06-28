import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideLayoutDashboard,
  LucideBookOpen,
  LucidePackage,
  LucideCpu,
  LucideBell,
  LucideUser,
  LucideLogOut,
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
  imports: [RouterLink, RouterLinkActive,
    LucideLayoutDashboard, LucideBookOpen, LucidePackage,
    LucideCpu, LucideBell, LucideUser, LucideLogOut],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  readonly auth = inject(AuthService);

  readonly links = input<SidebarLink[]>([
    { label: 'لوحة التحكم',  path: '/dashboard',          icon: '' },
    { label: 'دوراتي',        path: '/lms/catalog',         icon: '' },
    { label: 'الاختبارات',    path: '/lms/quiz/demo-quiz',  icon: '' },
    { label: 'المنتجات',      path: '/marketplace/catalog', icon: '' },
    { label: 'المساعد الذكي', path: '/ai/chat',             icon: '' },
    { label: 'الرسائل',       path: '/messaging',           icon: '' },
    { label: 'الملف الشخصي', path: '/profile/trainee',     icon: '' },
  ]);

  logout(): void {
    this.auth.logout().subscribe({
      error: () => this.auth.logoutLocal(),
    });
  }
}
