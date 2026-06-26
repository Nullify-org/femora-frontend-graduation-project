import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { runInBrowser } from '../utils/platform.util';

export type AppLanguage = 'ar' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly storage = inject(StorageService);

  readonly currentLang = signal<AppLanguage>('ar');

  init(): Observable<any> {
    const saved = this.storage.getString('lang') as AppLanguage | null;
    const lang: AppLanguage = saved === 'en' ? 'en' : 'ar';
    this.translate.setFallbackLang('ar');
    this.applyDocumentLang(lang);
    this.currentLang.set(lang);
    return this.translate.use(lang);
  }

  switchLanguage(lang: AppLanguage): void {
    this.translate.use(lang);
    this.storage.setString('lang', lang);
    this.applyDocumentLang(lang);
    this.currentLang.set(lang);
  }

  toggle(): void {
    this.switchLanguage(this.currentLang() === 'ar' ? 'en' : 'ar');
  }

  private applyDocumentLang(lang: AppLanguage): void {
    runInBrowser(() => {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    });
  }
}
