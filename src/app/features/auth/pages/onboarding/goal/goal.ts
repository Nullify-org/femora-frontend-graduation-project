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

  selectedGoals: string[] = [];

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

  toggle(label: string): void {
    const index = this.selectedGoals.indexOf(label);
    if (index === -1) {
      this.selectedGoals = [...this.selectedGoals, label];
      return;
    }
    this.selectedGoals = this.selectedGoals.filter((item) => item !== label);
  }

  next(): void {
    this.router.navigate(['/']);
  }

  get isValid(): boolean {
    return this.selectedGoals.length > 0;
  }
}
