import {
  ApiClient
} from "./chunk-7ZEUH7RY.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-CQIDYBZP.js";

// src/app/core/services/approval.service.ts
var ApprovalService = class _ApprovalService {
  api = inject(ApiClient);
  base = "/api/approvals";
  applyInstructor(bio, portfolioUrl) {
    return this.api.post(`${this.base}/instructors/apply`, { bio, portfolioUrl });
  }
  applySeller(shopName, description) {
    return this.api.post(`${this.base}/sellers/apply`, { shopName, description });
  }
  getPending() {
    return this.api.get(`${this.base}/admin/approvals/pending`);
  }
  review(approvalId, body) {
    return this.api.post(`${this.base}/admin/approvals/${approvalId}/review`, body);
  }
  static \u0275fac = function ApprovalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApprovalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApprovalService, factory: _ApprovalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ApprovalService
};
//# sourceMappingURL=chunk-JPYSJY7S.js.map
