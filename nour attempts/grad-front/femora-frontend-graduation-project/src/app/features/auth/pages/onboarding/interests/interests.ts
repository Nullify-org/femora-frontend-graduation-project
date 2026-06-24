import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../../../../core/services/storage.service';

interface InterestOption {
  label: string;
  emoji: string;
  selected: boolean;
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interests.html',
})
export class Interests {
  private readonly router = inject(Router);
  private readonly storage = inject(StorageService);

  options: InterestOption[] = [
    { label: 'الكروشيه والتريكو', emoji: '🧶', selected: false },
    { label: 'الطبخ', emoji: '🍳', selected: false },
    { label: 'الرسم والفنون', emoji: '🎨', selected: false },
    { label: 'الفخار والسيراميك', emoji: '🏺', selected: false },
    { label: 'صناعة المجوهرات', emoji: '💍', selected: false },
    { label: 'الإكسسوارات', emoji: '👜', selected: false },
    { label: 'الديكور المنزلي', emoji: '🏡', selected: false },
    { label: 'تصوير المنتجات', emoji: '📸', selected: false },
    { label: 'أعمال خشبية', emoji: '🪵', selected: false },
    { label: 'أخرى', emoji: '✨', selected: false },
  ];

  toggle(option: InterestOption): void {
    option.selected = !option.selected;
  }

  next(): void {
    const selected = this.options.filter((o) => o.selected).map((o) => o.label);
    this.storage.set('femora_onboarding_interests', selected);
    this.router.navigate(['/onboarding/goal']);
  }

  hasSelection(): boolean {
    return this.options.some((o) => o.selected);
  }
}
