import './polyfills.server.mjs';
import {
  OrderService
} from "./chunk-3QICOUS5.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import "./chunk-VM6QK2IN.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import {
  NotificationService
} from "./chunk-MTCE2STO.mjs";
import {
  AuthService
} from "./chunk-RERPWI7G.mjs";
import "./chunk-YG65EQOF.mjs";
import "./chunk-JJI23ZKM.mjs";
import {
  CommonModule,
  Component,
  Router,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/marketplace/pages/checkout/checkout.ts
function Checkout_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "\u0634\u0643\u0631\u0627\u064B \u0644\u0643\u0650!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643\u0650 \u0648\u0633\u064A\u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u062A\u0647 \u0642\u0631\u064A\u0628\u0627\u064B.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 9);
    \u0275\u0275text(7, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    \u0275\u0275elementEnd()();
  }
}
function Checkout_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function Checkout_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 10);
    \u0275\u0275text(2, "\u0631\u0627\u062C\u0639\u064A \u0637\u0644\u0628\u0643\u0650 \u062B\u0645 \u0623\u0643\u0651\u062F\u064A \u0627\u0644\u0634\u0631\u0627\u0621.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, Checkout_Conditional_7_Conditional_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function Checkout_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.placeOrder());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 13);
    \u0275\u0275text(7, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0633\u0644\u0629 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.errorMessage ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isPlacing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isPlacing ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0623\u0643\u064A\u062F..." : "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628", " ");
  }
}
var Checkout = class _Checkout {
  ordersApi = inject(OrderService);
  auth = inject(AuthService);
  router = inject(Router);
  notifications = inject(NotificationService);
  isPlacing = false;
  errorMessage = "";
  success = false;
  constructor() {
    runInBrowser(() => {
      if (!this.auth.user()) {
        this.router.navigate(["/login"]);
      }
    });
  }
  placeOrder() {
    const user = this.auth.user();
    if (!user) {
      this.router.navigate(["/login"]);
      return;
    }
    this.isPlacing = true;
    this.errorMessage = "";
    this.ordersApi.placeOrder(user.id).subscribe({
      next: () => {
        this.isPlacing = false;
        this.success = true;
        this.notifications.success("\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0637\u0644\u0628\u0643\u0650 \u0628\u0646\u062C\u0627\u062D!");
      },
      error: (err) => {
        this.isPlacing = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? "\u062A\u0639\u0630\u0651\u0631 \u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628";
      }
    });
  }
  static \u0275fac = function Checkout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Checkout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Checkout, selectors: [["app-checkout"]], decls: 8, vars: 1, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-xl", "mx-auto"], [1, "text-2xl", "font-bold", "text-navy", "font-display", "mb-6"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-8", "text-center"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-8"], ["src", "/images/success-approval-state.png", "alt", "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D", 1, "w-32", "h-32", "object-cover", "rounded-full", "mx-auto", "mb-4", "ring-4", "ring-sage/20"], [1, "text-xl", "font-bold", "text-navy"], [1, "text-terracotta-dark", "mt-2"], ["routerLink", "/dashboard", 1, "inline-block", "mt-6", "text-terracotta", "hover:underline"], [1, "text-terracotta-dark", "mb-6"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mb-4"], ["type", "button", 1, "w-full", "bg-terracotta", "text-white", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", 3, "click", "disabled"], ["routerLink", "/marketplace/cart", 1, "block", "text-center", "mt-4", "text-sm", "text-terracotta", "hover:underline"]], template: function Checkout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, Checkout_Conditional_6_Template, 8, 0, "div", 4)(7, Checkout_Conditional_7_Template, 8, 3, "div", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.success ? 6 : 7);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkout, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-xl mx-auto">
      <h1 class="text-2xl font-bold text-navy font-display mb-6">\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621</h1>

      @if (success) {
        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-8 text-center">
          <img
            src="/images/success-approval-state.png"
            alt="\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D"
            class="w-32 h-32 object-cover rounded-full mx-auto mb-4 ring-4 ring-sage/20"
          />
          <p class="text-xl font-bold text-navy">\u0634\u0643\u0631\u0627\u064B \u0644\u0643\u0650!</p>
          <p class="text-terracotta-dark mt-2">\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643\u0650 \u0648\u0633\u064A\u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u062A\u0647 \u0642\u0631\u064A\u0628\u0627\u064B.</p>
          <a routerLink="/dashboard" class="inline-block mt-6 text-terracotta hover:underline">\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645</a>
        </div>
      } @else {
        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-8">
          <p class="text-terracotta-dark mb-6">\u0631\u0627\u062C\u0639\u064A \u0637\u0644\u0628\u0643\u0650 \u062B\u0645 \u0623\u0643\u0651\u062F\u064A \u0627\u0644\u0634\u0631\u0627\u0621.</p>

          @if (errorMessage) {
            <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
              {{ errorMessage }}
            </div>
          }

          <button
            type="button"
            (click)="placeOrder()"
            [disabled]="isPlacing"
            class="w-full bg-terracotta text-white py-3.5 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-60"
          >
            {{ isPlacing ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0623\u0643\u064A\u062F...' : '\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628' }}
          </button>

          <a routerLink="/marketplace/cart" class="block text-center mt-4 text-sm text-terracotta hover:underline">
            \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0633\u0644\u0629
          </a>
        </div>
      }
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Checkout, { className: "Checkout", filePath: "src/app/features/marketplace/pages/checkout/checkout.ts", lineNumber: 16 });
})();
export {
  Checkout
};
//# sourceMappingURL=chunk-N3BDEAX6.mjs.map
