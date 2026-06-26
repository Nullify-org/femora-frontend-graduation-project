import './polyfills.server.mjs';
import {
  ProductService
} from "./chunk-HLXETSAK.mjs";
import {
  EnrollmentService
} from "./chunk-ODBVHNPW.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  courseEmoji,
  formatPrice,
  productEmoji
} from "./chunk-VM6QK2IN.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import "./chunk-MTCE2STO.mjs";
import {
  AuthService
} from "./chunk-RERPWI7G.mjs";
import "./chunk-YG65EQOF.mjs";
import "./chunk-JJI23ZKM.mjs";
import {
  Component,
  Input,
  RouterLink,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/shared/components/card/card.ts
var _c0 = ["*"];
function Card_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function Card_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle());
  }
}
var Card = class _Card {
  title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  padding = input("md", ...ngDevMode ? [{ debugName: "padding" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function Card_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Card)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Card, selectors: [["app-card"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"], padding: [1, "padding"] }, ngContentSelectors: _c0, decls: 4, vars: 8, consts: [[1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30"], [1, "text-lg", "font-bold", "text-navy", "font-display", "mb-1"], [1, "text-sm", "text-terracotta-dark", "mb-4"]], template: function Card_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, Card_Conditional_1_Template, 2, 1, "h3", 1);
      \u0275\u0275conditionalCreate(2, Card_Conditional_2_Template, 2, 1, "p", 2);
      \u0275\u0275projection(3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("p-4", ctx.padding() === "sm")("p-6", ctx.padding() === "md")("p-8", ctx.padding() === "lg");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.title() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle() ? 2 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{ selector: "app-card", standalone: true, template: `<div
  class="bg-white rounded-2xl femora-shadow border border-blush/30"
  [class.p-4]="padding() === 'sm'"
  [class.p-6]="padding() === 'md'"
  [class.p-8]="padding() === 'lg'"
>
  @if (title()) {
    <h3 class="text-lg font-bold text-navy font-display mb-1">{{ title() }}</h3>
  }
  @if (subtitle()) {
    <p class="text-sm text-terracotta-dark mb-4">{{ subtitle() }}</p>
  }
  <ng-content />
</div>
` }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], padding: [{ type: Input, args: [{ isSignal: true, alias: "padding", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Card, { className: "Card", filePath: "src/app/shared/components/card/card.ts", lineNumber: 8 });
})();

// src/app/features/dashboard/widgets/continue-learning/continue-learning.ts
var _c02 = (a0) => ["/lms/player", a0];
var _forTrack0 = ($index, $item) => $item.enrollmentId ?? $item.courseId;
function ContinueLearning_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function ContinueLearning_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "\u0644\u0645 \u062A\u0633\u062C\u0651\u0644\u064A \u0641\u064A \u0623\u064A \u062F\u0648\u0631\u0629 \u0628\u0639\u062F");
    \u0275\u0275elementEnd();
  }
}
function ContinueLearning_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275element(7, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 11);
    \u0275\u0275text(11, "\u0645\u062A\u0627\u0628\u0639\u0629");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enrollment_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.courseEmoji());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.title(enrollment_r1));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progress(enrollment_r1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.progress(enrollment_r1), "% \u0645\u0643\u062A\u0645\u0644");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c02, enrollment_r1.courseId));
  }
}
function ContinueLearning_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ContinueLearning_Conditional_4_For_1_Template, 12, 8, "div", 4, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.enrollments);
  }
}
var ContinueLearning = class _ContinueLearning {
  enrollmentsApi = inject(EnrollmentService);
  enrollments = [];
  isLoading = true;
  courseEmoji = courseEmoji;
  constructor() {
    runInBrowser(() => {
      this.enrollmentsApi.myEnrollments(1, 3).subscribe({
        next: (items) => {
          this.enrollments = items;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    });
  }
  title(enrollment) {
    return enrollment.courseTitle ?? enrollment.title ?? "\u062F\u0648\u0631\u0629";
  }
  progress(enrollment) {
    return enrollment.progressPercent ?? enrollment.progress ?? 0;
  }
  static \u0275fac = function ContinueLearning_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContinueLearning)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContinueLearning, selectors: [["app-continue-learning"]], decls: 8, vars: 1, consts: [["title", "\u062A\u0627\u0628\u0639\u064A \u0627\u0644\u062A\u0639\u0644\u0651\u0645", "subtitle", "\u062F\u0648\u0631\u0627\u062A\u0643 \u0627\u0644\u062C\u0627\u0631\u064A\u0629"], [1, "space-y-4"], [1, "text-xs", "text-terracotta-dark", "text-center"], ["routerLink", "/lms/catalog", 1, "text-terracotta", "hover:underline"], [1, "flex", "items-center", "gap-4", "p-3", "bg-cream", "rounded-xl"], [1, "text-3xl"], [1, "flex-1"], [1, "text-sm", "font-semibold", "text-navy"], [1, "w-full", "bg-blush/50", "rounded-full", "h-2", "mt-2"], [1, "bg-terracotta", "h-2", "rounded-full"], [1, "text-xs", "text-terracotta-dark", "mt-1"], [1, "text-xs", "bg-terracotta", "text-white", "px-3", "py-1.5", "rounded-lg", "shrink-0", 3, "routerLink"]], template: function ContinueLearning_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ContinueLearning_Conditional_2_Template, 2, 0, "p", 2)(3, ContinueLearning_Conditional_3_Template, 2, 0, "p", 2)(4, ContinueLearning_Conditional_4_Template, 2, 0);
      \u0275\u0275elementStart(5, "p", 2)(6, "a", 3);
      \u0275\u0275text(7, "\u0627\u0633\u062A\u0643\u0634\u0641\u064A \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062F\u0648\u0631\u0627\u062A");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading ? 2 : ctx.enrollments.length === 0 ? 3 : 4);
    }
  }, dependencies: [RouterLink, Card], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContinueLearning, [{
    type: Component,
    args: [{ selector: "app-continue-learning", standalone: true, imports: [RouterLink, Card], template: `<app-card title="\u062A\u0627\u0628\u0639\u064A \u0627\u0644\u062A\u0639\u0644\u0651\u0645" subtitle="\u062F\u0648\u0631\u0627\u062A\u0643 \u0627\u0644\u062C\u0627\u0631\u064A\u0629">
  <div class="space-y-4">
    @if (isLoading) {
      <p class="text-xs text-terracotta-dark text-center">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
    } @else if (enrollments.length === 0) {
      <p class="text-xs text-terracotta-dark text-center">\u0644\u0645 \u062A\u0633\u062C\u0651\u0644\u064A \u0641\u064A \u0623\u064A \u062F\u0648\u0631\u0629 \u0628\u0639\u062F</p>
    } @else {
      @for (enrollment of enrollments; track enrollment.enrollmentId ?? enrollment.courseId) {
        <div class="flex items-center gap-4 p-3 bg-cream rounded-xl">
          <span class="text-3xl">{{ courseEmoji() }}</span>
          <div class="flex-1">
            <p class="text-sm font-semibold text-navy">{{ title(enrollment) }}</p>
            <div class="w-full bg-blush/50 rounded-full h-2 mt-2">
              <div class="bg-terracotta h-2 rounded-full" [style.width.%]="progress(enrollment)"></div>
            </div>
            <p class="text-xs text-terracotta-dark mt-1">{{ progress(enrollment) }}% \u0645\u0643\u062A\u0645\u0644</p>
          </div>
          <a [routerLink]="['/lms/player', enrollment.courseId]" class="text-xs bg-terracotta text-white px-3 py-1.5 rounded-lg shrink-0">\u0645\u062A\u0627\u0628\u0639\u0629</a>
        </div>
      }
    }
    <p class="text-xs text-terracotta-dark text-center">
      <a routerLink="/lms/catalog" class="text-terracotta hover:underline">\u0627\u0633\u062A\u0643\u0634\u0641\u064A \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062F\u0648\u0631\u0627\u062A</a>
    </p>
  </div>
</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContinueLearning, { className: "ContinueLearning", filePath: "src/app/features/dashboard/widgets/continue-learning/continue-learning.ts", lineNumber: 15 });
})();

// src/app/features/dashboard/widgets/recommended-products/recommended-products.ts
var _c03 = (a0) => ["/marketplace/product", a0];
var _forTrack02 = ($index, $item) => $item.id;
function RecommendedProducts_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function RecommendedProducts_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd();
  }
}
function RecommendedProducts_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c03, p_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.productEmoji(p_r1.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(p_r1.price));
  }
}
function RecommendedProducts_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, RecommendedProducts_Conditional_3_For_2_Template, 7, 6, "a", 3, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
  }
}
var RecommendedProducts = class _RecommendedProducts {
  productsApi = inject(ProductService);
  products = [];
  isLoading = true;
  formatPrice = formatPrice;
  productEmoji = productEmoji;
  constructor() {
    runInBrowser(() => {
      this.productsApi.list(4).subscribe({
        next: (products) => {
          this.products = products;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    });
  }
  static \u0275fac = function RecommendedProducts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecommendedProducts)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommendedProducts, selectors: [["app-recommended-products"]], decls: 4, vars: 1, consts: [["title", "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629", "subtitle", "\u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A\u0643"], [1, "text-xs", "text-terracotta-dark", "text-center"], [1, "grid", "grid-cols-2", "gap-3"], [1, "p-3", "bg-cream", "rounded-xl", "hover:bg-blush/30", "transition", "text-center", 3, "routerLink"], [1, "text-2xl", "block", "mb-1"], [1, "text-xs", "font-semibold", "text-navy"], [1, "text-xs", "text-terracotta"]], template: function RecommendedProducts_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0);
      \u0275\u0275conditionalCreate(1, RecommendedProducts_Conditional_1_Template, 2, 0, "p", 1)(2, RecommendedProducts_Conditional_2_Template, 2, 0, "p", 1)(3, RecommendedProducts_Conditional_3_Template, 3, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 1 : ctx.products.length === 0 ? 2 : 3);
    }
  }, dependencies: [RouterLink, Card], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommendedProducts, [{
    type: Component,
    args: [{ selector: "app-recommended-products", standalone: true, imports: [RouterLink, Card], template: `<app-card title="\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629" subtitle="\u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A\u0643">
  @if (isLoading) {
    <p class="text-xs text-terracotta-dark text-center">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
  } @else if (products.length === 0) {
    <p class="text-xs text-terracotta-dark text-center">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>
  } @else {
    <div class="grid grid-cols-2 gap-3">
      @for (p of products; track p.id) {
        <a [routerLink]="['/marketplace/product', p.id]" class="p-3 bg-cream rounded-xl hover:bg-blush/30 transition text-center">
          <span class="text-2xl block mb-1">{{ productEmoji(p.category) }}</span>
          <p class="text-xs font-semibold text-navy">{{ p.name }}</p>
          <p class="text-xs text-terracotta">{{ formatPrice(p.price) }}</p>
        </a>
      }
    </div>
  }
</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommendedProducts, { className: "RecommendedProducts", filePath: "src/app/features/dashboard/widgets/recommended-products/recommended-products.ts", lineNumber: 15 });
})();

// src/app/features/dashboard/widgets/ai-widget/ai-widget.ts
var AiWidget = class _AiWidget {
  static \u0275fac = function AiWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiWidget, selectors: [["app-ai-widget"]], decls: 5, vars: 0, consts: [["title", "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A \u2728", "subtitle", "\u0627\u0633\u0623\u0644\u064A \u0639\u0646 \u0623\u064A \u0634\u064A\u0621"], [1, "text-sm", "text-terracotta-dark", "mb-4"], ["routerLink", "/ai/chat", 1, "block", "w-full", "text-center", "bg-navy", "text-white", "py-3", "rounded-xl", "text-sm", "font-semibold", "hover:bg-navy/90", "transition"]], template: function AiWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "p", 1);
      \u0275\u0275text(2, " \u0627\u062D\u0635\u0644\u064A \u0639\u0644\u0649 \u062A\u0648\u0635\u064A\u0627\u062A \u0644\u0644\u062F\u0648\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0623\u0648 \u0627\u0633\u0623\u0644\u064A \u0639\u0646 \u062F\u0631\u0633 \u0645\u0639\u064A\u0651\u0646 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, " \u0627\u0628\u062F\u0626\u064A \u0645\u062D\u0627\u062F\u062B\u0629 ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterLink, Card], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiWidget, [{
    type: Component,
    args: [{
      selector: "app-ai-widget",
      standalone: true,
      imports: [RouterLink, Card],
      template: `
    <app-card title="\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A \u2728" subtitle="\u0627\u0633\u0623\u0644\u064A \u0639\u0646 \u0623\u064A \u0634\u064A\u0621">
      <p class="text-sm text-terracotta-dark mb-4">
        \u0627\u062D\u0635\u0644\u064A \u0639\u0644\u0649 \u062A\u0648\u0635\u064A\u0627\u062A \u0644\u0644\u062F\u0648\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0623\u0648 \u0627\u0633\u0623\u0644\u064A \u0639\u0646 \u062F\u0631\u0633 \u0645\u0639\u064A\u0651\u0646
      </p>
      <a
        routerLink="/ai/chat"
        class="block w-full text-center bg-navy text-white py-3 rounded-xl text-sm font-semibold hover:bg-navy/90 transition"
      >
        \u0627\u0628\u062F\u0626\u064A \u0645\u062D\u0627\u062F\u062B\u0629
      </a>
    </app-card>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiWidget, { className: "AiWidget", filePath: "src/app/features/dashboard/widgets/ai-widget/ai-widget.ts", lineNumber: 23 });
})();

// src/app/features/dashboard/pages/dashboard/dashboard.ts
function Dashboard_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \u0645\u0633\u0627\u062D\u0629 ", ctx_r0.auth.activeProfile(), " \u2014 \u0627\u0633\u062A\u0645\u0631\u064A \u0645\u0646 \u062D\u064A\u062B \u062A\u0648\u0642\u0641\u062A ");
  }
}
function Dashboard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
  }
}
var Dashboard = class _Dashboard {
  auth = inject(AuthService);
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 23, vars: 2, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-6", "lg:p-10"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-navy", "font-display"], [1, "text-terracotta-dark", "text-sm", "mt-1"], [1, "grid", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], ["title", "\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629", 1, "mt-6", "block"], [1, "space-y-2"], ["routerLink", "/lms/catalog", 1, "block", "text-sm", "text-terracotta", "hover:underline"], ["routerLink", "/marketplace/catalog", 1, "block", "text-sm", "text-terracotta", "hover:underline"], ["routerLink", "/ai/chat", 1, "block", "text-sm", "text-terracotta", "hover:underline"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275conditionalCreate(7, Dashboard_Conditional_7_Template, 1, 1)(8, Dashboard_Conditional_8_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275element(11, "app-continue-learning")(12, "app-recommended-products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div");
      \u0275\u0275element(14, "app-ai-widget");
      \u0275\u0275elementStart(15, "app-card", 7)(16, "div", 8)(17, "a", 9);
      \u0275\u0275text(18, "\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u062F\u0648\u0631\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 10);
      \u0275\u0275text(20, "\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 11);
      \u0275\u0275text(22, "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" \u0645\u0631\u062D\u0628\u0627\u064B\u060C ", ((tmp_0_0 = ctx.auth.user()) == null ? null : tmp_0_0.firstName) ?? "\u0628\u0643", " \u{1F44B} ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.activeProfile() ? 7 : 8);
    }
  }, dependencies: [RouterLink, Sidebar, Card, ContinueLearning, RecommendedProducts, AiWidget], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink, Sidebar, Card, ContinueLearning, RecommendedProducts, AiWidget], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />

  <main class="flex-1 p-6 lg:p-10">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-navy font-display">
        \u0645\u0631\u062D\u0628\u0627\u064B\u060C {{ auth.user()?.firstName ?? '\u0628\u0643' }} \u{1F44B}
      </h1>
      <p class="text-terracotta-dark text-sm mt-1">
        @if (auth.activeProfile()) {
          \u0645\u0633\u0627\u062D\u0629 {{ auth.activeProfile() }} \u2014 \u0627\u0633\u062A\u0645\u0631\u064A \u0645\u0646 \u062D\u064A\u062B \u062A\u0648\u0642\u0641\u062A
        } @else {
          \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629
        }
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <app-continue-learning />
        <app-recommended-products />
      </div>
      <div>
        <app-ai-widget />
        <app-card title="\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629" class="mt-6 block">
          <div class="space-y-2">
            <a routerLink="/lms/catalog" class="block text-sm text-terracotta hover:underline">\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u062F\u0648\u0631\u0627\u062A</a>
            <a routerLink="/marketplace/catalog" class="block text-sm text-terracotta hover:underline">\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</a>
            <a routerLink="/ai/chat" class="block text-sm text-terracotta hover:underline">\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A</a>
          </div>
        </app-card>
      </div>
    </div>
  </main>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/dashboard/pages/dashboard/dashboard.ts", lineNumber: 16 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-YD6TOI7X.mjs.map
