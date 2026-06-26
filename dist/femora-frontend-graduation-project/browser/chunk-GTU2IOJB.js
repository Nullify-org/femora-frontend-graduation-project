import {
  unwrapList
} from "./chunk-BXHKRPLP.js";
import {
  ApiClient
} from "./chunk-7ZEUH7RY.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CQIDYBZP.js";

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
//# sourceMappingURL=chunk-GTU2IOJB.js.map
