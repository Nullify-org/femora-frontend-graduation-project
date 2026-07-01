import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (shouldShow) {
      <div class="mt-1.5 space-y-1">
        @if (control?.errors?.['required']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> هذا الحقل مطلوب
          </p>
        }
        @if (control?.errors?.['email']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> البريد الإلكترونى غير صالح
          </p>
        }
        @if (control?.errors?.['minlength']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> يجب أن يكون {{ control?.errors?.['minlength']?.requiredLength }} أحرف على الأقل
          </p>
        }
        @if (control?.errors?.['maxlength']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> يجب ألا يتجاوز {{ control?.errors?.['maxlength']?.requiredLength }} حرفاً
          </p>
        }
        @if (control?.errors?.['pattern']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> {{ patternMessage }}
          </p>
        }
        @if (control?.errors?.['passwordMismatch']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> كلمتا المرور غير متطابقتين
          </p>
        }
        @if (control?.errors?.['serverError']) {
          <p class="text-xs text-red-600 flex items-center gap-1">
            <span>⚠</span> {{ control?.errors?.['serverError'] }}
          </p>
        }
      </div>
    }
  `,
})
export class ValidationMessage {
  @Input() control: AbstractControl | null = null;
  @Input() patternMessage = 'صيغة غير صالحة';
  @Input() submitted = false;

  get shouldShow(): boolean {
    if (!this.control) return false;
    return (this.control.invalid && (this.control.touched || this.submitted));
  }
}
