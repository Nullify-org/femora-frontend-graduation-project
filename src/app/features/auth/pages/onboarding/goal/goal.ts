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
      desc: 'اكتسبى مهارة جديدة فى الكروشيه، التطريز، أو الخزف',
    },
    {
      label: 'تطوير مهاراتى الحالية',
      emoji: '🎨',
      desc: 'حسّنى مستواكِ فى الحرف التى تمارسينها بالفعل',
    },
    {
      label: 'تحويل هوايتى إلى مصدر دخل',
      emoji: '💰',
      desc: 'ابدئى ببيع منتجاتك اليدوية وكسب دخل ثابت',
    },
    {
      label: 'بناء مشروع حرفى خاص',
      emoji: '🛍️',
      desc: 'أسّسى علامتكِ التجارية ومتجركِ الخاص',
    },
    {
      label: 'مشاركة خبرتى وتدريب الأخريات',
      emoji: '👩‍🏫',
      desc: 'علّمى مهاراتكِ وأثّرى فى مجتمع Femora',
    },
  ];

  select(label: string): void {
    this.selected = label;
  }

  next(): void {
    this.router.navigate(['/']);
  }

  get isValid(): boolean {
    return this.selected !== null;
  }
}
