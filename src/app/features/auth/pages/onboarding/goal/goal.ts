import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../../../../core/services/storage.service';

interface GoalOption {
  label: string;
  desc: string;
  emoji: string;
}

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './goal.html',
})
export class Goal {
  private readonly router = inject(Router);
  private readonly storage = inject(StorageService);

  selected = '';

  options: GoalOption[] = [
    { label: 'تطوير مهارة جديدة', desc: 'اكتسبي مهارات وطوّري نفسك في مجال جديد', emoji: '🌱' },
    { label: 'تعلم مهارات تجارية', desc: 'تحسين مهاراتك في مجال العمل الحر', emoji: '📈' },
    { label: 'الحصول على شهادة', desc: 'احصلي على شهادات معتمدة وتميزي', emoji: '🎓' },
    { label: 'تغيير مسار عملي', desc: 'ابدئي مسيرة مهنية جديدة بثقة', emoji: '🚀' },
    { label: 'إنشاء مشروع خاص', desc: 'ابدئي مشروعك التجاري من المنزل', emoji: '💡' },
  ];

  select(label: string): void {
    this.selected = label;
  }

  next(): void {
    if (!this.selected) return;
    this.storage.set('femora_onboarding_goal', this.selected);
    this.router.navigate(['/onboarding/choose-role']);
  }
}
