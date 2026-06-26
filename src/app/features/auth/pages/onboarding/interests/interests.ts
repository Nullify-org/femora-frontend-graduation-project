import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

interface Interest {
  id: string;
  label: string;
  desc: string;
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interests.html',
  styleUrl: './interests.css',
})
export class Interests {
  private readonly router = inject(Router);

  selected = signal<string[]>([]);

  readonly interests: Interest[] = [
    { id: 'crochet',      label: 'الكروشيه والتريكو',    desc: 'صنع الملابس، الإكسسوارات، والديكور بالخيوط' },
    { id: 'embroidery',   label: 'التطريز والخياطة',      desc: 'التطريز اليدوي، الكيلت، والتطريز الآلي' },
    { id: 'clay',         label: 'الطين والخزف',          desc: 'صنع الأواني، التماثيل، والإكسسوارات الطينية' },
    { id: 'resin',        label: 'الراتنج والإيبوكسي',   desc: 'مجوهرات الراتنج، الطاولات، واللوحات' },
    { id: 'candles',      label: 'الشموع والصابون',       desc: 'شموع عطرية، صابون طبيعي، وبوم بوم باث' },
    { id: 'macrame',      label: 'الماكرامية والحبال',    desc: 'تعليقات الحائط، الحقائب، والحلي' },
    { id: 'decoupage',    label: 'الديكوباج والرسم',      desc: 'تزيين الأخشاب، الزجاج، والأقمشة' },
    { id: 'jewelry',      label: 'المجوهرات اليدوية',     desc: 'أساور، قلائد، وحلق بالخرز والمعادن' },
  ];

  toggle(id: string): void {
    this.selected.update((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return [...prev, id];
    });
  }

  isSelected(id: string): boolean {
    return this.selected().includes(id);
  }

  next(): void {
    this.router.navigate(['/onboarding/goal']);
  }
}
