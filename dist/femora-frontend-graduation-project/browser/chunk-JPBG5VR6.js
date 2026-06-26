import {
  Sidebar
} from "./chunk-KPU4IQ44.js";
import {
  Component,
  Input,
  RouterLink,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CQIDYBZP.js";

// src/app/shared/components/feature-shell/feature-shell.ts
var FeatureShell = class _FeatureShell {
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function FeatureShell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureShell)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeatureShell, selectors: [["app-feature-shell"]], inputs: { title: [1, "title"] }, decls: 9, vars: 1, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "text-2xl", "font-bold", "text-navy", "font-display"], [1, "text-terracotta-dark", "mt-2", "mb-6"], ["routerLink", "/dashboard", 1, "text-terracotta", "hover:underline", "text-sm"]], template: function FeatureShell_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0642\u064A\u062F \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u2014 \u0642\u0631\u064A\u0628\u0627\u064B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275text(8, "\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.title());
    }
  }, dependencies: [RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureShell, [{
    type: Component,
    args: [{
      selector: "app-feature-shell",
      standalone: true,
      imports: [RouterLink, Sidebar],
      template: `
    <div class="flex min-h-screen bg-cream-light">
      <app-sidebar />
      <main class="flex-1 p-8">
        <h1 class="text-2xl font-bold text-navy font-display">{{ title() }}</h1>
        <p class="text-terracotta-dark mt-2 mb-6">\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0642\u064A\u062F \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u2014 \u0642\u0631\u064A\u0628\u0627\u064B</p>
        <a routerLink="/dashboard" class="text-terracotta hover:underline text-sm">\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645</a>
      </main>
    </div>
  `
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureShell, { className: "FeatureShell", filePath: "src/app/shared/components/feature-shell/feature-shell.ts", lineNumber: 20 });
})();

export {
  FeatureShell
};
//# sourceMappingURL=chunk-JPBG5VR6.js.map
