import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-ai-widget',
  standalone: true,
  imports: [RouterLink, Card],
  template: `
    <app-card title="المساعد الذكى ✨" subtitle="اسألى عن أى شيء">
      <p class="text-sm text-terracotta-dark mb-4">
        احصلى على توصيات للدورات والمنتجات، أو اسألى عن درس معيّن
      </p>
      <a
        routerLink="/ai/chat"
        class="block w-full text-center bg-navy text-white py-3 rounded-xl text-sm font-semibold hover:bg-navy/90 transition"
      >
        ابدئى محادثة
      </a>
    </app-card>
  `,
})
export class AiWidget {}
