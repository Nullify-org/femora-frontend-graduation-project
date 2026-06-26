import './polyfills.server.mjs';
import {
  ProductService
} from "./chunk-HLXETSAK.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  formatPrice,
  productEmoji
} from "./chunk-VM6QK2IN.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import "./chunk-MTCE2STO.mjs";
import "./chunk-YG65EQOF.mjs";
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
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/marketplace/pages/product-catalog/product-catalog.ts
var _c0 = (a0) => ["/marketplace/product", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ProductCatalog_Conditional_8_Template(rf, ctx) {
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
function ProductCatalog_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function ProductCatalog_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd();
  }
}
function ProductCatalog_Conditional_11_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.sellerName);
  }
}
function ProductCatalog_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "h3", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ProductCatalog_Conditional_11_For_2_Conditional_6_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, product_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.productEmoji(product_r2.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r2.sellerName ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(product_r2.price));
  }
}
function ProductCatalog_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ProductCatalog_Conditional_11_For_2_Template, 9, 7, "a", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.products);
  }
}
var ProductCatalog = class _ProductCatalog {
  productsApi = inject(ProductService);
  products = [];
  isLoading = true;
  errorMessage = "";
  formatPrice = formatPrice;
  productEmoji = productEmoji;
  constructor() {
    runInBrowser(() => {
      this.productsApi.list(24).subscribe({
        next: (products) => {
          this.products = products;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A";
          this.isLoading = false;
        }
      });
    });
  }
  static \u0275fac = function ProductCatalog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCatalog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCatalog, selectors: [["app-product-catalog"]], decls: 12, vars: 2, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-6xl", "mx-auto"], [1, "text-2xl", "font-bold", "text-navy", "font-display"], [1, "text-terracotta-dark", "mt-2", "mb-8"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mb-6"], [1, "text-terracotta-dark", "text-center", "py-12"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-white", "rounded-2xl", "overflow-hidden", "femora-shadow", "border", "border-blush/30", "hover:-translate-y-1", "transition-transform", "block", 3, "routerLink"], [1, "h-36", "bg-gradient-to-br", "from-terracotta/20", "to-blush", "flex", "items-center", "justify-center", "text-5xl"], [1, "p-5"], [1, "font-bold", "text-navy", "font-display"], [1, "text-xs", "text-terracotta-dark", "mt-1"], [1, "text-terracotta", "font-bold", "mt-3"]], template: function ProductCatalog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "\u0645\u0646\u062A\u062C\u0627\u062A Femora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629 \u0645\u0646 \u0633\u064A\u062F\u0627\u062A \u0645\u0635\u0631\u064A\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ProductCatalog_Conditional_8_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(9, ProductCatalog_Conditional_9_Template, 2, 0, "p", 6)(10, ProductCatalog_Conditional_10_Template, 2, 0, "p", 6)(11, ProductCatalog_Conditional_11_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.errorMessage ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 9 : ctx.products.length === 0 ? 10 : 11);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCatalog, [{
    type: Component,
    args: [{ selector: "app-product-catalog", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold text-navy font-display">\u0645\u0646\u062A\u062C\u0627\u062A Femora</h1>
      <p class="text-terracotta-dark mt-2 mb-8">\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629 \u0645\u0646 \u0633\u064A\u062F\u0627\u062A \u0645\u0635\u0631\u064A\u0627\u062A</p>

      @if (errorMessage) {
        <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">{{ errorMessage }}</div>
      }

      @if (isLoading) {
        <p class="text-terracotta-dark text-center py-12">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
      } @else if (products.length === 0) {
        <p class="text-terracotta-dark text-center py-12">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>
      } @else {
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (product of products; track product.id) {
            <a
              [routerLink]="['/marketplace/product', product.id]"
              class="bg-white rounded-2xl overflow-hidden femora-shadow border border-blush/30 hover:-translate-y-1 transition-transform block"
            >
              <div class="h-36 bg-gradient-to-br from-terracotta/20 to-blush flex items-center justify-center text-5xl">
                {{ productEmoji(product.category) }}
              </div>
              <div class="p-5">
                <h3 class="font-bold text-navy font-display">{{ product.name }}</h3>
                @if (product.sellerName) {
                  <p class="text-xs text-terracotta-dark mt-1">{{ product.sellerName }}</p>
                }
                <p class="text-terracotta font-bold mt-3">{{ formatPrice(product.price) }}</p>
              </div>
            </a>
          }
        </div>
      }
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCatalog, { className: "ProductCatalog", filePath: "src/app/features/marketplace/pages/product-catalog/product-catalog.ts", lineNumber: 16 });
})();
export {
  ProductCatalog
};
//# sourceMappingURL=chunk-CDIOYD7N.mjs.map
