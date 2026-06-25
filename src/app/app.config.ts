import { ApplicationConfig, APP_INITIALIZER, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { routes } from './app.routes';
import { jwtInterceptor } from './core/auth/jwt.interceptor';
import { LanguageService } from './core/services/language.service';

// ── Inline translations (avoids HTTP loader SSR flash) ──────────────────────
const AR_TRANSLATIONS = {
  NAV: {
    HOME: 'الرئيسية',
    COURSES: 'الدورات',
    PRODUCTS: 'المنتجات',
    WORKSHOPS: 'ورش العمل',
    BLOG: 'المدونة',
    LOGIN: 'تسجيل الدخول',
    REGISTER: 'إنشاء حساب',
    LOGOUT: 'تسجيل الخروج',
    DASHBOARD: 'لوحة التحكم',
    PROFILE: 'الملف الشخصي',
    EDIT_PROFILE: 'تعديل الملف الشخصي',
    MY_COURSES: 'دوراتي',
    MY_ORDERS: 'طلباتي',
    SWITCH_ROLE: 'تبديل الدور',
    CART: 'السلة',
  },
  AUTH: {
    LOGIN: 'تسجيل الدخول',
    REGISTER: 'إنشاء حساب',
    LOGOUT: 'تسجيل الخروج',
  },
  HERO: {
    HEADLINE: 'اصنعي تعلّمي بيعي',
    SUBTITLE: 'منصتك الشاملة لإتقان الحرف اليدوية والحصول على شهادات وتحويل منتجاتك إلى دخل حقيقي',
    CTA_PRIMARY: 'ابدئي رحلتك',
    CTA_SECONDARY: 'تصفّحي المنتجات',
    BRANDLINE: 'Femora — للمنتَجات المنزلية',
    WORD_1: 'اصنعي',
    WORD_2: 'تعلّمي',
    WORD_3: 'بيعي',
    IMAGE_ALT_1: 'صورة بانر Femora الرئيسية',
    IMAGE_ALT_2: 'سيدات يتعلّمن الحرف اليدوية',
    IMAGE_ALT_3: 'منتجات السوق اليدوية',
  },
  STATS: {
    SATISFACTION: 'رضا العملاء',
    COURSES: 'دورة متاحة',
    STUDENTS: 'طالبة نشطة',
  },
  ERRORS: {
    FORBIDDEN: 'غير مصرح',
    SERVER: 'خطأ في الخادم',
  },
  COMMON: {
    LOADING: 'جاري التحميل',
    SAVE: 'حفظ',
    CANCEL: 'إلغاء',
    APPROVE: 'موافقة',
    REJECT: 'رفض',
  },
};

const EN_TRANSLATIONS = {
  NAV: {
    HOME: 'Home',
    COURSES: 'Courses',
    PRODUCTS: 'Products',
    WORKSHOPS: 'Workshops',
    BLOG: 'Blog',
    LOGIN: 'Sign In',
    REGISTER: 'Create Account',
    LOGOUT: 'Sign Out',
    DASHBOARD: 'Dashboard',
    PROFILE: 'Profile',
    EDIT_PROFILE: 'Edit Profile',
    MY_COURSES: 'My Courses',
    MY_ORDERS: 'My Orders',
    SWITCH_ROLE: 'Switch Role',
    CART: 'Cart',
  },
  AUTH: {
    LOGIN: 'Sign In',
    REGISTER: 'Create Account',
    LOGOUT: 'Sign Out',
  },
  HERO: {
    HEADLINE: 'Create Learn Sell',
    SUBTITLE: 'Your all-in-one platform to master crafts, get certified, and turn handmade products into real income',
    CTA_PRIMARY: 'Start Your Journey',
    CTA_SECONDARY: 'Browse Products',
    BRANDLINE: 'Femora — for home-made products',
    IMAGE_ALT_1: 'Femora main banner',
    IMAGE_ALT_2: 'Women learning crafts',
    IMAGE_ALT_3: 'Handmade marketplace products',
  },
  STATS: {
    SATISFACTION: 'Customer Satisfaction',
    COURSES: 'Courses Available',
    STUDENTS: 'Active Students',
  },
  ERRORS: {
    FORBIDDEN: 'Unauthorized',
    SERVER: 'Server error',
  },
  COMMON: {
    LOADING: 'Loading',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    APPROVE: 'Approve',
    REJECT: 'Reject',
  },
};

class InlineTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(lang === 'en' ? EN_TRANSLATIONS : AR_TRANSLATIONS);
  }
}

// ── App Initializer ──────────────────────────────────────────────────────────
function initLanguage(lang: LanguageService): () => Observable<any> {
  return () => lang.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withFetch(), withInterceptors([jwtInterceptor])),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideTranslateService({
      loader: { provide: TranslateLoader, useClass: InlineTranslateLoader },
      lang: 'ar',
      fallbackLang: 'ar',
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initLanguage,
      deps: [LanguageService],
      multi: true,
    },
  ],
};