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

// src/app/features/marketplace/services/product.service.ts
var ProductService = class _ProductService {
  api = inject(ApiClient);
  recommendationsBase = "/api/ai/recommendations/products";
  list(top = 20) {
    return this.api.get(this.recommendationsBase, {
      params: { top: String(top) }
    }).pipe(map((res) => unwrapList(res).map((p) => this.normalizeProduct(p))));
  }
  getById(id, top = 50) {
    return this.list(top).pipe(map((products) => {
      const match = products.find((p) => String(p.productId ?? p.id ?? "") === id || String(p.productVariantId ?? "") === id);
      return match ?? null;
    }));
  }
  normalizeProduct(product) {
    const id = product.productId ?? product.id ?? product.productVariantId ?? "";
    return __spreadProps(__spreadValues({}, product), {
      id: String(id),
      productId: String(product.productId ?? product.id ?? id),
      name: product.name ?? product.title ?? "\u0645\u0646\u062A\u062C"
    });
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProductService
};
//# sourceMappingURL=chunk-7ZUHCJQX.js.map
