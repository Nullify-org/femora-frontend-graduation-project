import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(passwordField: string, confirmField: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordField)?.value;
    const confirm = group.get(confirmField)?.value;
    if (confirm && password !== confirm) {
      group.get(confirmField)?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    // Clear only passwordMismatch if no other errors
    const confirmControl = group.get(confirmField);
    if (confirmControl?.hasError('passwordMismatch')) {
      const errors = { ...confirmControl.errors };
      delete errors['passwordMismatch'];
      confirmControl.setErrors(Object.keys(errors).length ? errors : null);
    }
    return null;
  };
}

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val: string = control.value ?? '';
    if (!val) return null;
    if (val.length < 8) return { minlength: { requiredLength: 8, actualLength: val.length } };
    return null;
  };
}

export function applyServerErrors(
  control: AbstractControl | null,
  message: string,
): void {
  if (!control) return;
  control.setErrors({ serverError: message });
  control.markAsTouched();
}
