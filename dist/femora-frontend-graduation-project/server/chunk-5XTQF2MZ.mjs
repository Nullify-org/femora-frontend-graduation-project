import './polyfills.server.mjs';
import {
  TranslatePipe
} from "./chunk-O56OMDBX.mjs";
import {
  AuthService
} from "./chunk-RERPWI7G.mjs";
import "./chunk-YG65EQOF.mjs";
import "./chunk-JJI23ZKM.mjs";
import {
  Component,
  Router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/dashboard/pages/dashboard-redirect/dashboard-redirect.ts
var DashboardRedirect = class _DashboardRedirect {
  auth = inject(AuthService);
  router = inject(Router);
  ngOnInit() {
    const user = this.auth.user();
    if (user?.role === "Admin") {
      void this.router.navigate(["/dashboard/admin"]);
      return;
    }
    const profile = this.auth.activeProfile();
    const routes = {
      Trainee: "/dashboard/trainee",
      Instructor: "/dashboard/instructor",
      Seller: "/dashboard/seller"
    };
    void this.router.navigate([routes[profile ?? ""] ?? "/dashboard/trainee"]);
  }
  static \u0275fac = function DashboardRedirect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardRedirect)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardRedirect, selectors: [["app-dashboard-redirect"]], decls: 4, vars: 3, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "bg-cream-light"], [1, "text-text-medium"]], template: function DashboardRedirect_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"));
    }
  }, dependencies: [TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRedirect, [{
    type: Component,
    args: [{
      selector: "app-dashboard-redirect",
      standalone: true,
      imports: [TranslatePipe],
      template: `
    <div class="flex items-center justify-center min-h-screen bg-cream-light">
      <p class="text-text-medium">{{ 'COMMON.LOADING' | translate }}</p>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardRedirect, { className: "DashboardRedirect", filePath: "src/app/features/dashboard/pages/dashboard-redirect/dashboard-redirect.ts", lineNumber: 16 });
})();
export {
  DashboardRedirect
};
//# sourceMappingURL=chunk-5XTQF2MZ.mjs.map
