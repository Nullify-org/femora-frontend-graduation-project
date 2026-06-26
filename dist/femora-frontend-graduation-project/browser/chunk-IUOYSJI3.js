import {
  CartService
} from "./chunk-GTU2IOJB.js";
import {
  ProductService
} from "./chunk-7ZUHCJQX.js";
import {
  Sidebar
} from "./chunk-KPU4IQ44.js";
import {
  formatPrice,
  productEmoji
} from "./chunk-BXHKRPLP.js";
import {
  runInBrowser
} from "./chunk-7ZEUH7RY.js";
import "./chunk-EREYMOSF.js";
import {
  NotificationService
} from "./chunk-4F73QFVW.js";
import {
  AuthService
} from "./chunk-XBDBTCCP.js";
import "./chunk-L6J77KKO.js";
import "./chunk-4G4TVXPT.js";
import {
  ActivatedRoute,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CQIDYBZP.js";

// src/app/features/marketplace/pages/product-details/product-details.ts
function ProductDetails_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function ProductDetails_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ProductDetails_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u0628\u0648\u0627\u0633\u0637\u0629 ", ctx_r0.product.sellerName);
  }
}
function ProductDetails_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.category);
  }
}
function ProductDetails_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ProductDetails_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "h1", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ProductDetails_Conditional_8_Conditional_6_Template, 2, 1, "p", 10);
    \u0275\u0275conditionalCreate(7, ProductDetails_Conditional_8_Conditional_7_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ProductDetails_Conditional_8_Conditional_10_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(11, "button", 14);
    \u0275\u0275listener("click", function ProductDetails_Conditional_8_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.productEmoji(ctx_r0.product.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.product.sellerName ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.product.category ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.product.price));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMessage ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isAdding);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isAdding ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629..." : "\u0623\u0636\u064A\u0641\u064A \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629", " ");
  }
}
var ProductDetails = class _ProductDetails {
  route = inject(ActivatedRoute);
  router = inject(Router);
  productsApi = inject(ProductService);
  cartApi = inject(CartService);
  auth = inject(AuthService);
  notifications = inject(NotificationService);
  product = null;
  isLoading = true;
  isAdding = false;
  errorMessage = "";
  formatPrice = formatPrice;
  productEmoji = productEmoji;
  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get("id");
      if (!id) {
        this.errorMessage = "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0635\u0627\u0644\u062D";
        this.isLoading = false;
        return;
      }
      this.productsApi.getById(id).subscribe({
        next: (product) => {
          this.product = product;
          this.isLoading = false;
          if (!product)
            this.errorMessage = "\u0627\u0644\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F";
        },
        error: () => {
          this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C";
          this.isLoading = false;
        }
      });
    });
  }
  addToCart() {
    if (!this.product)
      return;
    const user = this.auth.user();
    if (!user) {
      this.router.navigate(["/login"]);
      return;
    }
    const variantId = this.product.productVariantId ?? this.product.productId ?? this.product.id;
    if (!variantId) {
      this.errorMessage = "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0636\u0627\u0641\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062A\u062C \u0644\u0644\u0633\u0644\u0629";
      return;
    }
    this.isAdding = true;
    this.cartApi.add(user.id, variantId).subscribe({
      next: () => {
        this.isAdding = false;
        this.notifications.success("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629");
        this.router.navigate(["/marketplace/cart"]);
      },
      error: (err) => {
        this.isAdding = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629";
      }
    });
  }
  static \u0275fac = function ProductDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetails)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetails, selectors: [["app-product-details"]], decls: 9, vars: 1, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-3xl", "mx-auto"], ["routerLink", "/marketplace/catalog", 1, "text-terracotta", "hover:underline", "text-sm", "mb-6", "inline-block"], [1, "text-terracotta-dark"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "rounded-xl", "px-4", "py-3"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "overflow-hidden"], [1, "h-48", "bg-gradient-to-br", "from-terracotta/20", "to-blush", "flex", "items-center", "justify-center", "text-7xl"], [1, "p-8"], [1, "text-3xl", "font-bold", "text-navy", "font-display"], [1, "text-sm", "text-terracotta-dark", "mt-2"], [1, "text-xs", "text-terracotta-dark", "mt-1"], [1, "text-2xl", "font-bold", "text-terracotta", "mt-6"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mt-4"], ["type", "button", 1, "mt-6", "bg-terracotta", "text-white", "px-6", "py-3", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", 3, "click", "disabled"]], template: function ProductDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "a", 3);
      \u0275\u0275text(5, "\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0646\u062A\u062C\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ProductDetails_Conditional_6_Template, 2, 0, "p", 4)(7, ProductDetails_Conditional_7_Template, 2, 1, "div", 5)(8, ProductDetails_Conditional_8_Template, 13, 8, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isLoading ? 6 : ctx.errorMessage && !ctx.product ? 7 : ctx.product ? 8 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetails, [{
    type: Component,
    args: [{ selector: "app-product-details", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-3xl mx-auto">
      <a routerLink="/marketplace/catalog" class="text-terracotta hover:underline text-sm mb-6 inline-block">\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0646\u062A\u062C\u0627\u062A</a>

      @if (isLoading) {
        <p class="text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
      } @else if (errorMessage && !product) {
        <div class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3">{{ errorMessage }}</div>
      } @else if (product) {
        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 overflow-hidden">
          <div class="h-48 bg-gradient-to-br from-terracotta/20 to-blush flex items-center justify-center text-7xl">
            {{ productEmoji(product.category) }}
          </div>
          <div class="p-8">
            <h1 class="text-3xl font-bold text-navy font-display">{{ product.name }}</h1>
            @if (product.sellerName) {
              <p class="text-sm text-terracotta-dark mt-2">\u0628\u0648\u0627\u0633\u0637\u0629 {{ product.sellerName }}</p>
            }
            @if (product.category) {
              <p class="text-xs text-terracotta-dark mt-1">{{ product.category }}</p>
            }
            <p class="text-2xl font-bold text-terracotta mt-6">{{ formatPrice(product.price) }}</p>

            @if (errorMessage) {
              <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mt-4">
                {{ errorMessage }}
              </div>
            }

            <button
              type="button"
              (click)="addToCart()"
              [disabled]="isAdding"
              class="mt-6 bg-terracotta text-white px-6 py-3 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-60"
            >
              {{ isAdding ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629...' : '\u0623\u0636\u064A\u0641\u064A \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629' }}
            </button>
          </div>
        </div>
      }
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetails, { className: "ProductDetails", filePath: "src/app/features/marketplace/pages/product-details/product-details.ts", lineNumber: 19 });
})();
export {
  ProductDetails
};
//# sourceMappingURL=chunk-IUOYSJI3.js.map
