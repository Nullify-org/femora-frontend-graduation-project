import './polyfills.server.mjs';
import {
  Injectable,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2K2LDCAY.mjs";

// src/app/core/services/storage.service.ts
var StorageService = class _StorageService {
  platformId = inject(PLATFORM_ID);
  get(key) {
    if (!isPlatformBrowser(this.platformId))
      return null;
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  set(key, value) {
    if (!isPlatformBrowser(this.platformId))
      return;
    localStorage.setItem(key, JSON.stringify(value));
  }
  remove(key) {
    if (!isPlatformBrowser(this.platformId))
      return;
    localStorage.removeItem(key);
  }
  getString(key) {
    if (!isPlatformBrowser(this.platformId))
      return null;
    return localStorage.getItem(key);
  }
  setString(key, value) {
    if (!isPlatformBrowser(this.platformId))
      return;
    localStorage.setItem(key, value);
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StorageService
};
//# sourceMappingURL=chunk-JJI23ZKM.mjs.map
