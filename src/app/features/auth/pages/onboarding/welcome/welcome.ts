import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container">
      <div class="welcome-content">
        <h1>🎉 مرحباً بك في Femora!</h1>
        <p>تم تعديل بيانات ملفك الشخصي بنجاح</p>
        <p>جاري توجيهك...</p>
      </div>
    </div>
  `,
  styles: [
    `
      .welcome-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      .welcome-content {
        text-align: center;
        color: white;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.1rem;
      }
    `,
  ],
})
export class Welcome {
  private router = inject(Router);

  ngOnInit(): void {
    // ✅ بعد 2 ثانية، اذهب إلى الـ landing
    setTimeout(() => {
      this.router.navigateByUrl('/landing');
    }, 2000);
  }
}
