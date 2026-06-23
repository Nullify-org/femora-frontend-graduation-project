import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  errorMessage = '';

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  register(): void {
    this.errorMessage = '';

    if (!this.firstName || !this.lastName || !this.email || !this.password) {
      this.errorMessage = 'يرجى ملء جميع الحقول';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'كلمتا المرور غير متطابقتين';
      return;
    }
    if (this.password.length < 8) {
      this.errorMessage = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
      return;
    }

    this.isLoading = true;

    this.auth
      .register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.auth.setPendingEmail(this.email);
          this.notifications.success('تم إنشاء حسابك بنجاح!');
          this.router.navigate(['/verify-email']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage =
            err?.error?.title ?? err?.error?.detail ?? err?.error?.message ?? 'تعذّر إنشاء الحساب';
        },
      });
  }
}
