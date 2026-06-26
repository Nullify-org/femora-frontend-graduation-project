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

// src/app/features/lms/services/course.service.ts
var CourseService = class _CourseService {
  api = inject(ApiClient);
  base = "/api/courses";
  list(params) {
    return this.api.get(this.base, { params }).pipe(map((res) => unwrapList(res).map((c) => this.normalizeCourse(c))));
  }
  getById(id) {
    return this.api.get(`${this.base}/${id}`).pipe(map((c) => this.normalizeCourse(c)));
  }
  create(body) {
    return this.api.post(this.base, body);
  }
  update(id, body) {
    return this.api.put(`${this.base}/${id}`, body);
  }
  publish(id) {
    return this.api.post(`${this.base}/${id}/publish`, {});
  }
  normalizeCourse(course) {
    return __spreadProps(__spreadValues({}, course), {
      id: String(course.id)
    });
  }
  static \u0275fac = function CourseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CourseService
};
//# sourceMappingURL=chunk-OOKOPNJH.js.map
