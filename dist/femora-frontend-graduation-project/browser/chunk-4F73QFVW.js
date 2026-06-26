import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-CQIDYBZP.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  counter = 0;
  notifications = signal([], ...ngDevMode ? [{ debugName: "notifications" }] : (
    /* istanbul ignore next */
    []
  ));
  success(message) {
    this.push("success", message);
  }
  error(message) {
    this.push("error", message);
  }
  info(message) {
    this.push("info", message);
  }
  dismiss(id) {
    this.notifications.update((items) => items.filter((n) => n.id !== id));
  }
  push(type, message) {
    const id = ++this.counter;
    this.notifications.update((items) => [...items, { id, type, message }]);
    setTimeout(() => this.dismiss(id), 5e3);
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-4F73QFVW.js.map
