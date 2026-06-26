import {
  OrderService
} from "./chunk-ZUFNIQCQ.js";
import {
  EnrollmentService
} from "./chunk-H3MLE77K.js";
import {
  Sidebar
} from "./chunk-KPU4IQ44.js";
import {
  formatPrice
} from "./chunk-BXHKRPLP.js";
import {
  runInBrowser
} from "./chunk-7ZEUH7RY.js";
import "./chunk-EREYMOSF.js";
import "./chunk-4F73QFVW.js";
import {
  AuthService
} from "./chunk-XBDBTCCP.js";
import "./chunk-L6J77KKO.js";
import "./chunk-4G4TVXPT.js";
import {
  CommonModule,
  Component,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CQIDYBZP.js";

// src/app/features/profile/pages/trainee-profile/trainee-profile.ts
var _c0 = (a0) => ["/lms/player", a0];
var _forTrack0 = ($index, $item) => $item.enrollmentId ?? $item.courseId;
var _forTrack1 = ($index, $item) => $item.orderId ?? $item.id;
function TraineeProfile_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", user_r1.firstName, " ", user_r1.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
function TraineeProfile_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u0644\u0645 \u062A\u0633\u062C\u0651\u0644\u064A \u0641\u064A \u062F\u0648\u0631\u0627\u062A \u0628\u0639\u062F.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 13);
    \u0275\u0275text(3, "\u0627\u0633\u062A\u0643\u0634\u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0627\u062A");
    \u0275\u0275elementEnd();
  }
}
function TraineeProfile_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, e_r2.courseId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.courseTitle ?? e_r2.title ?? "\u062F\u0648\u0631\u0629");
  }
}
function TraineeProfile_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, TraineeProfile_Conditional_11_For_2_Template, 3, 4, "a", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.enrollments);
  }
}
function TraineeProfile_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function TraineeProfile_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A \u0628\u0639\u062F.");
    \u0275\u0275elementEnd();
  }
}
function TraineeProfile_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0637\u0644\u0628 #", (order_r4.orderId ?? order_r4.id) == null ? null : (order_r4.orderId ?? order_r4.id).slice(0, 8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(order_r4.total));
  }
}
function TraineeProfile_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, TraineeProfile_Conditional_17_For_2_Template, 5, 2, "div", 16, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.orders);
  }
}
var TraineeProfile = class _TraineeProfile {
  auth = inject(AuthService);
  enrollmentsApi = inject(EnrollmentService);
  ordersApi = inject(OrderService);
  enrollments = [];
  orders = [];
  isLoading = true;
  formatPrice = formatPrice;
  constructor() {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;
      this.enrollmentsApi.myEnrollments().subscribe({
        next: (items) => this.enrollments = items
      });
      this.ordersApi.myOrders(userId).subscribe({
        next: (items) => {
          this.orders = items;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    });
  }
  static \u0275fac = function TraineeProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TraineeProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TraineeProfile, selectors: [["app-trainee-profile"]], decls: 18, vars: 3, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-3xl", "mx-auto"], [1, "text-2xl", "font-bold", "text-navy", "font-display", "mb-6"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-8", "mb-6"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-6", "mb-6"], [1, "font-bold", "text-navy", "mb-4"], [1, "space-y-3"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-6"], [1, "text-sm", "text-terracotta-dark"], [1, "flex", "items-center", "gap-4"], [1, "w-16", "h-16", "rounded-full", "bg-blush", "flex", "items-center", "justify-center", "text-2xl"], [1, "text-xl", "font-bold", "text-navy"], ["routerLink", "/lms/catalog", 1, "text-sm", "text-terracotta", "hover:underline", "mt-2", "inline-block"], [1, "block", "p-3", "bg-cream", "rounded-xl", "hover:bg-blush/30", "transition", 3, "routerLink"], [1, "text-sm", "font-semibold", "text-navy"], [1, "p-3", "bg-cream", "rounded-xl", "flex", "justify-between", "items-center"], [1, "text-sm", "text-navy"], [1, "text-sm", "text-terracotta", "font-semibold"]], template: function TraineeProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "\u0645\u0644\u0641 \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, TraineeProfile_Conditional_6_Template, 9, 3, "div", 4);
      \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
      \u0275\u0275text(9, "\u062F\u0648\u0631\u0627\u062A\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, TraineeProfile_Conditional_10_Template, 4, 0)(11, TraineeProfile_Conditional_11_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "h2", 6);
      \u0275\u0275text(14, "\u0637\u0644\u0628\u0627\u062A\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, TraineeProfile_Conditional_15_Template, 2, 0, "p", 9)(16, TraineeProfile_Conditional_16_Template, 2, 0, "p", 9)(17, TraineeProfile_Conditional_17_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.auth.user()) ? 6 : -1, tmp_0_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.enrollments.length === 0 ? 10 : 11);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading ? 15 : ctx.orders.length === 0 ? 16 : 17);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraineeProfile, [{
    type: Component,
    args: [{ selector: "app-trainee-profile", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-navy font-display mb-6">\u0645\u0644\u0641 \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u0629</h1>

      @if (auth.user(); as user) {
        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-8 mb-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-blush flex items-center justify-center text-2xl">\u{1F464}</div>
            <div>
              <p class="text-xl font-bold text-navy">{{ user.firstName }} {{ user.lastName }}</p>
              <p class="text-sm text-terracotta-dark">{{ user.email }}</p>
            </div>
          </div>
        </div>
      }

      <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-6 mb-6">
        <h2 class="font-bold text-navy mb-4">\u062F\u0648\u0631\u0627\u062A\u064A</h2>
        @if (enrollments.length === 0) {
          <p class="text-sm text-terracotta-dark">\u0644\u0645 \u062A\u0633\u062C\u0651\u0644\u064A \u0641\u064A \u062F\u0648\u0631\u0627\u062A \u0628\u0639\u062F.</p>
          <a routerLink="/lms/catalog" class="text-sm text-terracotta hover:underline mt-2 inline-block">\u0627\u0633\u062A\u0643\u0634\u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0627\u062A</a>
        } @else {
          <div class="space-y-3">
            @for (e of enrollments; track e.enrollmentId ?? e.courseId) {
              <a [routerLink]="['/lms/player', e.courseId]" class="block p-3 bg-cream rounded-xl hover:bg-blush/30 transition">
                <p class="text-sm font-semibold text-navy">{{ e.courseTitle ?? e.title ?? '\u062F\u0648\u0631\u0629' }}</p>
              </a>
            }
          </div>
        }
      </div>

      <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-6">
        <h2 class="font-bold text-navy mb-4">\u0637\u0644\u0628\u0627\u062A\u064A</h2>
        @if (isLoading) {
          <p class="text-sm text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
        } @else if (orders.length === 0) {
          <p class="text-sm text-terracotta-dark">\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A \u0628\u0639\u062F.</p>
        } @else {
          <div class="space-y-3">
            @for (order of orders; track order.orderId ?? order.id) {
              <div class="p-3 bg-cream rounded-xl flex justify-between items-center">
                <span class="text-sm text-navy">\u0637\u0644\u0628 #{{ (order.orderId ?? order.id)?.slice(0, 8) }}</span>
                <span class="text-sm text-terracotta font-semibold">{{ formatPrice(order.total) }}</span>
              </div>
            }
          </div>
        }
      </div>
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TraineeProfile, { className: "TraineeProfile", filePath: "src/app/features/profile/pages/trainee-profile/trainee-profile.ts", lineNumber: 18 });
})();
export {
  TraineeProfile
};
//# sourceMappingURL=chunk-O5ZH5ZY4.js.map
