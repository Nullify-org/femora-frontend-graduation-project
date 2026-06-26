import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StrengthLevel {
  label: string;
  color: string;
  bars: number;
}

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (password) {
      <div class="mt-2">
        <div class="flex gap-1 mb-1">
          @for (i of [1,2,3,4]; track i) {
            <div
              class="h-1 flex-1 rounded-full transition-all duration-300"
              [class]="i <= strength.bars ? strength.color : 'bg-gray-200'"
            ></div>
          }
        </div>
        <p class="text-xs" [class]="strengthTextColor">{{ strength.label }}</p>
      </div>
    }
  `,
})
export class PasswordStrength implements OnChanges {
  @Input() password = '';

  strength: StrengthLevel = { label: '', color: '', bars: 0 };

  ngOnChanges(): void {
    this.strength = this.evaluate(this.password);
  }

  get strengthTextColor(): string {
    if (this.strength.bars <= 1) return 'text-red-500';
    if (this.strength.bars === 2) return 'text-orange-500';
    if (this.strength.bars === 3) return 'text-yellow-600';
    return 'text-green-600';
  }

  private evaluate(pwd: string): StrengthLevel {
    if (!pwd) return { label: '', color: '', bars: 0 };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return { label: 'ضعيفة جداً', color: 'bg-red-500', bars: 1 };
    if (score === 2) return { label: 'ضعيفة', color: 'bg-orange-500', bars: 2 };
    if (score === 3) return { label: 'متوسطة', color: 'bg-yellow-500', bars: 3 };
    return { label: 'قوية', color: 'bg-green-500', bars: 4 };
  }
}
