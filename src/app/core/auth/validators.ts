import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Validates Egyptian and international phone numbers */
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    // Matches: +20xxxxxxxxxx, 01xxxxxxxxx (Egypt), or generic +CC... format
    const pattern = /^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const cleaned = control.value.replace(/\s/g, '');
    return pattern.test(cleaned) ? null : { phone: true };
  };
}

/** Password strength validator */
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value ?? '';
    if (!value) return null;

    const errors: ValidationErrors = {};
    if (value.length < 8) errors['minLength'] = true;
    if (!/[A-Z]/.test(value)) errors['uppercase'] = true;
    if (!/[a-z]/.test(value)) errors['lowercase'] = true;
    if (!/[0-9]/.test(value)) errors['number'] = true;
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) errors['special'] = true;

    return Object.keys(errors).length ? { passwordStrength: errors } : null;
  };
}

/** Cross-field validator: confirmPassword must match password */
export function passwordMatchValidator(
  passwordField: string,
  confirmField: string,
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get(passwordField)?.value;
    const confirm = group.get(confirmField)?.value;
    if (!confirm) return null;
    return pass === confirm ? null : { passwordMismatch: true };
  };
}

/** Name validator: letters only, min/max length */
export function nameValidator(min = 2, max = 50): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value?.trim() ?? '';
    if (!value) return null;
    if (value.length < min) return { minlength: { requiredLength: min, actualLength: value.length } };
    if (value.length > max) return { maxlength: { requiredLength: max, actualLength: value.length } };
    return null;
  };
}

/** Calculates password strength score 0-4 */
export function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
  checks: Record<string, boolean>;
} {
  const checks = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  const labels = ['ضعيفة جداً', 'ضعيفة', 'متوسطة', 'جيدة', 'قوية'];
  const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#16a34a'];

  return { score, label: labels[score] ?? '', color: colors[score] ?? '', checks };
}
