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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/marketplace/services/cart.service.ts
var CartService = class _CartService {
  api = inject(ApiClient);
  base = "/api/cart";
  getCart(userId) {
    const params = userId ? { UserId: userId } : void 0;
    return this.api.get(this.base, { params }).pipe(map((cart) => __spreadProps(__spreadValues({}, cart), {
      items: cart.items ?? unwrapList(cart)
    })));
  }
  add(userId, productVariantId, quantity = 1) {
    return this.api.post(`${this.base}/add`, { userId, productVariantId, quantity });
  }
  remove(cartItemId) {
    return this.api.delete(`${this.base}/remove`, {
      params: { CartItemId: cartItemId }
    });
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CartService
};
//# sourceMappingURL=chunk-AM2TI2ZG.mjs.map
