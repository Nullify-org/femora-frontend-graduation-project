import {
  OrderService
} from "./chunk-ZUFNIQCQ.js";
import {
  ApprovalService
} from "./chunk-JPYSJY7S.js";
import {
  Sidebar
} from "./chunk-KPU4IQ44.js";
import "./chunk-BXHKRPLP.js";
import {
  runInBrowser
} from "./chunk-7ZEUH7RY.js";
import "./chunk-EREYMOSF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-VVL2D7ND.js";
import {
  NotificationService
} from "./chunk-4F73QFVW.js";
import {
  AuthService
} from "./chunk-XBDBTCCP.js";
import "./chunk-L6J77KKO.js";
import "./chunk-4G4TVXPT.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CQIDYBZP.js";

// src/app/features/marketplace/pages/seller-dashboard/seller-dashboard.ts
function SellerDashboard_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A");
    \u0275\u0275elementEnd();
  }
}
function SellerDashboard_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r1 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u0637\u0644\u0628 #", $index_r1 + 1);
  }
}
function SellerDashboard_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275repeaterCreate(1, SellerDashboard_Conditional_24_For_2_Template, 2, 1, "li", 15, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
function SellerDashboard_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 16)(2, "h3", 8);
    \u0275\u0275text(3, "\u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 \u0643\u0628\u0627\u0626\u0639\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SellerDashboard_Conditional_25_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applyShopName, $event) || (ctx_r1.applyShopName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SellerDashboard_Conditional_25_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applyDescription, $event) || (ctx_r1.applyDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "button", 20);
    \u0275\u0275listener("click", function SellerDashboard_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showApply.set(false));
    });
    \u0275\u0275text(8, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275listener("click", function SellerDashboard_Conditional_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applySeller());
    });
    \u0275\u0275text(10, "\u0625\u0631\u0633\u0627\u0644");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applyShopName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applyDescription);
  }
}
var SellerDashboard = class _SellerDashboard {
  auth = inject(AuthService);
  approvalsApi = inject(ApprovalService);
  ordersApi = inject(OrderService);
  notifications = inject(NotificationService);
  showApply = signal(false, ...ngDevMode ? [{ debugName: "showApply" }] : (
    /* istanbul ignore next */
    []
  ));
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : (
    /* istanbul ignore next */
    []
  ));
  applyShopName = "";
  applyDescription = "";
  ngOnInit() {
    runInBrowser(() => {
      const userId = this.auth.user()?.id;
      if (userId) {
        this.ordersApi.myOrders(userId).subscribe({
          next: (items) => this.orders.set(items ?? []),
          error: () => this.orders.set([])
        });
      }
    });
  }
  applySeller() {
    const shopName = this.applyShopName.trim();
    if (!shopName) {
      this.notifications.error("\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u062C\u0631 \u0645\u0637\u0644\u0648\u0628");
      return;
    }
    this.approvalsApi.applySeller(shopName, this.applyDescription || void 0).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u2014 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629");
        this.showApply.set(false);
      },
      error: () => this.notifications.error("\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628")
    });
  }
  static \u0275fac = function SellerDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SellerDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerDashboard, selectors: [["app-seller-dashboard"]], decls: 26, vars: 2, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-6", "lg:p-10"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-2xl", "font-bold", "text-text-dark", "font-display"], [1, "text-text-light", "text-sm", "mt-1"], ["type", "button", 1, "text-sm", "bg-primary", "text-white", "px-4", "py-2", "rounded-xl", "hover:bg-primary-dark", 3, "click"], [1, "grid", "lg:grid-cols-2", "gap-6"], [1, "bg-warm-white", "rounded-2xl", "p-6", "femora-shadow"], [1, "font-bold", "text-text-dark", "mb-4"], [1, "text-center", "py-8"], [1, "text-text-medium", "mb-4"], ["type", "button", 1, "bg-primary", "text-white", "px-6", "py-2", "rounded-xl", "text-sm"], [1, "text-text-medium", "text-sm"], [1, "space-y-2", "text-sm", "text-text-medium"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "border-b", "border-sand/30", "pb-2"], [1, "bg-warm-white", "rounded-2xl", "p-6", "w-full", "max-w-lg", "femora-shadow"], ["maxlength", "100", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u062C\u0631", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", "mb-3", 3, "ngModelChange", "ngModel"], ["rows", "3", "maxlength", "500", "placeholder", "\u0648\u0635\u0641 \u0627\u0644\u0645\u062A\u062C\u0631 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", "mb-4", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "justify-end"], ["type", "button", 1, "px-4", "py-2", "text-sm", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-sm", "bg-primary", "text-white", "rounded-xl", 3, "click"]], template: function SellerDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
      \u0275\u0275text(6, "\u0645\u0631\u0643\u0632 \u0627\u0644\u0628\u0627\u0626\u0639\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "\u0625\u062F\u0627\u0631\u0629 \u0645\u0646\u062A\u062C\u0627\u062A\u0643 \u0648\u0637\u0644\u0628\u0627\u062A\u0643");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function SellerDashboard_Template_button_click_9_listener() {
        return ctx.showApply.set(true);
      });
      \u0275\u0275text(10, " \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 \u0643\u0628\u0627\u0626\u0639\u0629 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "h2", 8);
      \u0275\u0275text(14, "\u0645\u0646\u062A\u062C\u0627\u062A\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "p", 10);
      \u0275\u0275text(17, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0628\u0639\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275text(19, "\u0623\u0636\u064A\u0641\u064A \u0645\u0646\u062A\u062C\u0643 \u0627\u0644\u0623\u0648\u0644");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "h2", 8);
      \u0275\u0275text(22, "\u0637\u0644\u0628\u0627\u062A\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, SellerDashboard_Conditional_23_Template, 2, 0, "p", 12)(24, SellerDashboard_Conditional_24_Template, 3, 0, "ul", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, SellerDashboard_Conditional_25_Template, 11, 2, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275conditional(ctx.orders().length === 0 ? 23 : 24);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showApply() ? 25 : -1);
    }
  }, dependencies: [Sidebar, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerDashboard, [{
    type: Component,
    args: [{ selector: "app-seller-dashboard", standalone: true, imports: [Sidebar, FormsModule], template: '<div class="flex min-h-screen bg-cream-light">\n  <app-sidebar />\n\n  <main class="flex-1 p-6 lg:p-10">\n    <div class="flex items-center justify-between mb-8">\n      <div>\n        <h1 class="text-2xl font-bold text-text-dark font-display">\u0645\u0631\u0643\u0632 \u0627\u0644\u0628\u0627\u0626\u0639\u0629</h1>\n        <p class="text-text-light text-sm mt-1">\u0625\u062F\u0627\u0631\u0629 \u0645\u0646\u062A\u062C\u0627\u062A\u0643 \u0648\u0637\u0644\u0628\u0627\u062A\u0643</p>\n      </div>\n      <button type="button" (click)="showApply.set(true)" class="text-sm bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-dark">\n        \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 \u0643\u0628\u0627\u0626\u0639\u0629\n      </button>\n    </div>\n\n    <div class="grid lg:grid-cols-2 gap-6">\n      <div class="bg-warm-white rounded-2xl p-6 femora-shadow">\n        <h2 class="font-bold text-text-dark mb-4">\u0645\u0646\u062A\u062C\u0627\u062A\u064A</h2>\n        <div class="text-center py-8">\n          <p class="text-text-medium mb-4">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0628\u0639\u062F</p>\n          <button type="button" class="bg-primary text-white px-6 py-2 rounded-xl text-sm">\u0623\u0636\u064A\u0641\u064A \u0645\u0646\u062A\u062C\u0643 \u0627\u0644\u0623\u0648\u0644</button>\n        </div>\n      </div>\n\n      <div class="bg-warm-white rounded-2xl p-6 femora-shadow">\n        <h2 class="font-bold text-text-dark mb-4">\u0637\u0644\u0628\u0627\u062A\u064A</h2>\n        @if (orders().length === 0) {\n          <p class="text-text-medium text-sm">\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A</p>\n        } @else {\n          <ul class="space-y-2 text-sm text-text-medium">\n            @for (order of orders(); track $index) {\n              <li class="border-b border-sand/30 pb-2">\u0637\u0644\u0628 #{{ $index + 1 }}</li>\n            }\n          </ul>\n        }\n      </div>\n    </div>\n\n    @if (showApply()) {\n      <div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">\n        <div class="bg-warm-white rounded-2xl p-6 w-full max-w-lg femora-shadow">\n          <h3 class="font-bold text-text-dark mb-4">\u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 \u0643\u0628\u0627\u0626\u0639\u0629</h3>\n          <input [(ngModel)]="applyShopName" maxlength="100" class="w-full border border-sand rounded-xl p-3 text-sm mb-3" placeholder="\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u062C\u0631" />\n          <textarea [(ngModel)]="applyDescription" rows="3" maxlength="500" class="w-full border border-sand rounded-xl p-3 text-sm mb-4" placeholder="\u0648\u0635\u0641 \u0627\u0644\u0645\u062A\u062C\u0631 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"></textarea>\n          <div class="flex gap-2 justify-end">\n            <button type="button" (click)="showApply.set(false)" class="px-4 py-2 text-sm">\u0625\u0644\u063A\u0627\u0621</button>\n            <button type="button" (click)="applySeller()" class="px-4 py-2 text-sm bg-primary text-white rounded-xl">\u0625\u0631\u0633\u0627\u0644</button>\n          </div>\n        </div>\n      </div>\n    }\n  </main>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerDashboard, { className: "SellerDashboard", filePath: "src/app/features/marketplace/pages/seller-dashboard/seller-dashboard.ts", lineNumber: 16 });
})();
export {
  SellerDashboard
};
//# sourceMappingURL=chunk-7SELAIYV.js.map
