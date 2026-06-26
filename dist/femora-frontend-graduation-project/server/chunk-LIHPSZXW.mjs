import './polyfills.server.mjs';
import {
  TranslateService
} from "./chunk-O56OMDBX.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import {
  StorageService
} from "./chunk-JJI23ZKM.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-2K2LDCAY.mjs";

// src/app/core/services/language.service.ts
var LanguageService = class _LanguageService {
  translate = inject(TranslateService);
  storage = inject(StorageService);
  currentLang = signal("ar", ...ngDevMode ? [{ debugName: "currentLang" }] : (
    /* istanbul ignore next */
    []
  ));
  init() {
    const saved = this.storage.getString("lang");
    const lang = saved === "en" ? "en" : "ar";
    this.translate.setFallbackLang("ar");
    this.applyDocumentLang(lang);
    this.currentLang.set(lang);
    return this.translate.use(lang);
  }
  switchLanguage(lang) {
    this.translate.use(lang);
    this.storage.setString("lang", lang);
    this.applyDocumentLang(lang);
    this.currentLang.set(lang);
  }
  toggle() {
    this.switchLanguage(this.currentLang() === "ar" ? "en" : "ar");
  }
  applyDocumentLang(lang) {
    runInBrowser(() => {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    });
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-LIHPSZXW.mjs.map
