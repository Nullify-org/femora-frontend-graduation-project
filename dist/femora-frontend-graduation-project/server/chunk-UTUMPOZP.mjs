import './polyfills.server.mjs';
import {
  CartService
} from "./chunk-AM2TI2ZG.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  formatPrice
} from "./chunk-VM6QK2IN.mjs";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/marketplace/pages/cart/cart.ts
var _forTrack0 = ($index, $item) => $item.cartItemId ?? $item.id;
function Cart_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function Cart_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Cart_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2, "\u0633\u0644\u062A\u0643\u0650 \u0641\u0627\u0631\u063A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 8);
    \u0275\u0275text(4, "\u062A\u0635\u0641\u0651\u062D\u064A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A");
    \u0275\u0275elementEnd()();
  }
}
function Cart_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div")(2, "p", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function Cart_Conditional_9_For_2_Template_button_click_9_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeItem(item_r3));
    });
    \u0275\u0275text(10, "\u062D\u0630\u0641");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.itemName(item_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0627\u0644\u0643\u0645\u064A\u0629: ", item_r3.quantity ?? 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.itemPrice(item_r3)));
  }
}
function Cart_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, Cart_Conditional_9_For_2_Template, 11, 3, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 14);
    \u0275\u0275text(9, " \u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.total));
  }
}
var Cart = class _Cart {
  cartApi = inject(CartService);
  auth = inject(AuthService);
  notifications = inject(NotificationService);
  items = [];
  total = 0;
  isLoading = true;
  errorMessage = "";
  formatPrice = formatPrice;
  constructor() {
    runInBrowser(() => this.loadCart());
  }
  loadCart() {
    this.isLoading = true;
    const userId = this.auth.user()?.id;
    this.cartApi.getCart(userId).subscribe({
      next: (cart) => {
        this.items = cart.items ?? [];
        this.total = cart.total ?? this.items.reduce((sum, i) => sum + (i.lineTotal ?? (i.unitPrice ?? i.price ?? 0) * (i.quantity ?? 1)), 0);
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0644\u0629";
        this.isLoading = false;
      }
    });
  }
  removeItem(item) {
    const cartItemId = item.cartItemId ?? item.id;
    if (!cartItemId)
      return;
    this.cartApi.remove(cartItemId).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0646 \u0627\u0644\u0633\u0644\u0629");
        this.loadCart();
      },
      error: () => this.notifications.error("\u062A\u0639\u0630\u0651\u0631 \u062D\u0630\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")
    });
  }
  itemName(item) {
    return item.productName ?? item.name ?? "\u0645\u0646\u062A\u062C";
  }
  itemPrice(item) {
    return item.lineTotal ?? (item.unitPrice ?? item.price ?? 0) * (item.quantity ?? 1);
  }
  static \u0275fac = function Cart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cart, selectors: [["app-cart"]], decls: 10, vars: 2, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-3xl", "mx-auto"], [1, "text-2xl", "font-bold", "text-navy", "font-display", "mb-6"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mb-6"], [1, "text-terracotta-dark"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-8", "text-center"], [1, "text-terracotta-dark", "mb-4"], ["routerLink", "/marketplace/catalog", 1, "text-terracotta", "hover:underline"], [1, "space-y-4"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-5", "flex", "items-center", "justify-between", "gap-4"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-6", "mt-6", "flex", "items-center", "justify-between"], [1, "font-bold", "text-navy"], [1, "text-xl", "font-bold", "text-terracotta"], ["routerLink", "/marketplace/checkout", 1, "block", "w-full", "mt-6", "bg-terracotta", "text-white", "text-center", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition"], [1, "font-semibold", "text-navy"], [1, "text-sm", "text-terracotta-dark", "mt-1"], [1, "flex", "items-center", "gap-4"], [1, "text-terracotta", "font-bold"], ["type", "button", 1, "text-red-600", "text-sm", "hover:underline", 3, "click"]], template: function Cart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, Cart_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, Cart_Conditional_7_Template, 2, 0, "p", 5)(8, Cart_Conditional_8_Template, 5, 0, "div", 6)(9, Cart_Conditional_9_Template, 10, 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.errorMessage ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 7 : ctx.items.length === 0 ? 8 : 9);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cart, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: '<div class="flex min-h-screen bg-cream-light">\n  <app-sidebar />\n  <main class="flex-1 p-8">\n    <div class="max-w-3xl mx-auto">\n      <h1 class="text-2xl font-bold text-navy font-display mb-6">\u0633\u0644\u0629 \u0627\u0644\u062A\u0633\u0648\u0642</h1>\n\n      @if (errorMessage) {\n        <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">{{ errorMessage }}</div>\n      }\n\n      @if (isLoading) {\n        <p class="text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>\n      } @else if (items.length === 0) {\n        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-8 text-center">\n          <p class="text-terracotta-dark mb-4">\u0633\u0644\u062A\u0643\u0650 \u0641\u0627\u0631\u063A\u0629</p>\n          <a routerLink="/marketplace/catalog" class="text-terracotta hover:underline">\u062A\u0635\u0641\u0651\u062D\u064A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</a>\n        </div>\n      } @else {\n        <div class="space-y-4">\n          @for (item of items; track item.cartItemId ?? item.id) {\n            <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-5 flex items-center justify-between gap-4">\n              <div>\n                <p class="font-semibold text-navy">{{ itemName(item) }}</p>\n                <p class="text-sm text-terracotta-dark mt-1">\u0627\u0644\u0643\u0645\u064A\u0629: {{ item.quantity ?? 1 }}</p>\n              </div>\n              <div class="flex items-center gap-4">\n                <span class="text-terracotta font-bold">{{ formatPrice(itemPrice(item)) }}</span>\n                <button type="button" (click)="removeItem(item)" class="text-red-600 text-sm hover:underline">\u062D\u0630\u0641</button>\n              </div>\n            </div>\n          }\n        </div>\n\n        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-6 mt-6 flex items-center justify-between">\n          <span class="font-bold text-navy">\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A</span>\n          <span class="text-xl font-bold text-terracotta">{{ formatPrice(total) }}</span>\n        </div>\n\n        <a\n          routerLink="/marketplace/checkout"\n          class="block w-full mt-6 bg-terracotta text-white text-center py-3.5 rounded-xl font-semibold hover:bg-terracotta-dark transition"\n        >\n          \u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0634\u0631\u0627\u0621\n        </a>\n      }\n    </div>\n  </main>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cart, { className: "Cart", filePath: "src/app/features/marketplace/pages/cart/cart.ts", lineNumber: 18 });
})();
export {
  Cart
};
//# sourceMappingURL=chunk-UTUMPOZP.mjs.map
