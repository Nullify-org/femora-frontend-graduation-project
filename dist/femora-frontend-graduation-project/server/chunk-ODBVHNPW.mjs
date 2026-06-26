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

// src/app/features/lms/services/enrollment.service.ts
var EnrollmentService = class _EnrollmentService {
  api = inject(ApiClient);
  base = "/api/enrollments";
  enroll(courseId) {
    return this.api.post(this.base, { courseId });
  }
  myEnrollments(page = 1, pageSize = 10) {
    return this.api.get(`${this.base}/my`, {
      params: { page: String(page), pageSize: String(pageSize) }
    }).pipe(map((res) => unwrapList(res)));
  }
  isEnrolled(courseId) {
    return this.api.get(`${this.base}/is-enrolled/${courseId}`).pipe(map((res) => {
      if (typeof res === "boolean")
        return res;
      return !!res?.isEnrolled;
    }));
  }
  static \u0275fac = function EnrollmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnrollmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnrollmentService, factory: _EnrollmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrollmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  EnrollmentService
};
//# sourceMappingURL=chunk-ODBVHNPW.mjs.map
