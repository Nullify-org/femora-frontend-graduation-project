import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface GoalOption {
  label: string;
  emoji: string;
  desc: string;
}

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './goal.html',
  styleUrl: './goal.css',
})
export class Goal {
  private readonly router = inject(Router);

  selected: string | null = null;

  options: GoalOption[] = [
    {
      label: 'تعلم حرفة يدوية جديدة',
      emoji: '🧶',
      desc: 'اكتسبي مهارة جديدة في الكروشيه، التطريز، أو الخزف',
    },
    {
      label: 'تطوير مهاراتي الحالية',
      emoji: '🎨',
      desc: 'حسّني مستواكِ في الحرف التي تمارسينها بالفعل',
    },
    {
      label: 'تحويل هوايتي إلى مصدر دخل',
      emoji: '💰',
      desc: 'ابدئي ببيع منتجاتك اليدوية وكسب دخل ثابت',
    },
    {
      label: 'بناء مشروع حرفي خاص',
      emoji: '🛍️',
      desc: 'أسّسي علامتكِ التجارية ومتجركِ الخاص',
    },
    {
      label: 'مشاركة خبرتي وتدريب الأخريات',
      emoji: '👩‍🏫',
      desc: 'علّمي مهاراتكِ وأثّري في مجتمع Femora',
    },
  ];

  select(label: string): void {
    this.selected = label;
  }

  next(): void {
    this.router.navigate(['/onboarding/choose-role']);
  }

  get isValid(): boolean {
    return this.selected !== null;
  }
}
