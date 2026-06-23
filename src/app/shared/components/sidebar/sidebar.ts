import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface SidebarLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  readonly links = input<SidebarLink[]>([
    { label: 'لوحة التحكم', path: '/dashboard', icon: '🏠' },
    { label: 'دوراتي', path: '/lms/catalog', icon: '📚' },
    { label: 'المنتجات', path: '/marketplace/catalog', icon: '🛍️' },
    { label: 'المساعد الذكي', path: '/ai/chat', icon: '🤖' },
    { label: 'الرسائل', path: '/messaging', icon: '💬' },
    { label: 'الملف الشخصي', path: '/profile/trainee', icon: '👤' },
  ]);
}
