import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-feature-shell',
  standalone: true,
  imports: [RouterLink, Sidebar],
  template: `
    <div class="flex min-h-screen bg-cream-light">
      <app-sidebar />
      <main class="flex-1 p-8">
        <h1 class="text-2xl font-bold text-navy font-display">{{ title() }}</h1>
        <p class="text-terracotta-dark mt-2 mb-6">هذه الصفحة قيد التطوير — قريباً</p>
        <a routerLink="/dashboard" class="text-terracotta hover:underline text-sm">← العودة للوحة التحكم</a>
      </main>
    </div>
  `,
})
export class FeatureShell {
  readonly title = input.required<string>();
}
