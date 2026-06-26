import './polyfills.server.mjs';
import {
  unwrapList
} from "./chunk-VM6QK2IN.mjs";
import {
  ApiClient
} from "./chunk-F6FSQHYX.mjs";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2K2LDCAY.mjs";

// src/app/features/marketplace/services/order.service.ts
var OrderService = class _OrderService {
  api = inject(ApiClient);
  base = "/api/orders";
  placeOrder(userId) {
    return this.api.post(this.base, { userId });
  }
  myOrders(userId) {
    const params = userId ? { UserId: userId } : void 0;
    return this.api.get(`${this.base}/my-orders`, { params }).pipe(map((res) => unwrapList(res)));
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  OrderService
};
//# sourceMappingURL=chunk-3QICOUS5.mjs.map
