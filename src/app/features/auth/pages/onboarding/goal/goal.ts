import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../../core/auth/auth.service';
import { NotificationService } from '../../../../../core/services/notification.service';

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
  private readonly auth = inject(AuthService);
  private readonly notifications = inject(NotificationService);

  selected: string | null = null;
  isLoading = signal(false);

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
    if (!this.selected) return;

    this.isLoading.set(true);

    // ✅ حسب الهدف المختار، اذهب إلى الخطوة التالية
    if (this.selected.includes('تدريب')) {
      // إذا اختارت التدريس، اذهب لاختيار الدور
      this.router.navigate(['/onboarding/choose-role']).then(() => {
        this.isLoading.set(false);
      });
    } else {
      // خلاف ذلك، اذهب إلى صفحة المرحبة ثم الـ landing
      this.router.navigate(['/onboarding/welcome']).then(() => {
        this.isLoading.set(false);
      });
    }
  }

  get isValid(): boolean {
    return this.selected !== null;
  }
}
