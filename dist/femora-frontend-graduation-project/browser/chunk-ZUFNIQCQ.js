import {
  unwrapList
} from "./chunk-BXHKRPLP.js";
import {
  ApiClient
} from "./chunk-7ZEUH7RY.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CQIDYBZP.js";

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
//# sourceMappingURL=chunk-ZUFNIQCQ.js.map
