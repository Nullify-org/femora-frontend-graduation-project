import {
  StorageService
} from "./chunk-4G4TVXPT.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CQIDYBZP.js";

// src/app/features/auth/pages/onboarding/goal/goal.ts
function Goal_button_19_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function Goal_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function Goal_button_19_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(option_r2.label));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275template(9, Goal_button_19_span_9_Template, 1, 0, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-[#C8956C]", ctx_r2.selected === option_r2.label)("bg-[#FDF0EA]", ctx_r2.selected === option_r2.label)("border-[#E8D5CB]", ctx_r2.selected !== option_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.emoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.desc);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-[#C8956C]", ctx_r2.selected === option_r2.label)("border-[#E8D5CB]", ctx_r2.selected !== option_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selected === option_r2.label);
  }
}
var Goal = class _Goal {
  router = inject(Router);
  storage = inject(StorageService);
  selected = "";
  options = [
    { label: "\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629", desc: "\u0627\u0643\u062A\u0633\u0628\u064A \u0645\u0647\u0627\u0631\u0627\u062A \u0648\u0637\u0648\u0651\u0631\u064A \u0646\u0641\u0633\u0643 \u0641\u064A \u0645\u062C\u0627\u0644 \u062C\u062F\u064A\u062F", emoji: "\u{1F331}" },
    { label: "\u062A\u0639\u0644\u0645 \u0645\u0647\u0627\u0631\u0627\u062A \u062A\u062C\u0627\u0631\u064A\u0629", desc: "\u062A\u062D\u0633\u064A\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062D\u0631", emoji: "\u{1F4C8}" },
    { label: "\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062F\u0629", desc: "\u0627\u062D\u0635\u0644\u064A \u0639\u0644\u0649 \u0634\u0647\u0627\u062F\u0627\u062A \u0645\u0639\u062A\u0645\u062F\u0629 \u0648\u062A\u0645\u064A\u0632\u064A", emoji: "\u{1F393}" },
    { label: "\u062A\u063A\u064A\u064A\u0631 \u0645\u0633\u0627\u0631 \u0639\u0645\u0644\u064A", desc: "\u0627\u0628\u062F\u0626\u064A \u0645\u0633\u064A\u0631\u0629 \u0645\u0647\u0646\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0628\u062B\u0642\u0629", emoji: "\u{1F680}" },
    { label: "\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0631\u0648\u0639 \u062E\u0627\u0635", desc: "\u0627\u0628\u062F\u0626\u064A \u0645\u0634\u0631\u0648\u0639\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0645\u0646 \u0627\u0644\u0645\u0646\u0632\u0644", emoji: "\u{1F4A1}" }
  ];
  select(label) {
    this.selected = label;
  }
  next() {
    if (!this.selected)
      return;
    this.storage.set("femora_onboarding_goal", this.selected);
    this.router.navigate(["/onboarding/choose-role"]);
  }
  static \u0275fac = function Goal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Goal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Goal, selectors: [["app-goal"]], decls: 25, vars: 2, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-[#FAF7F4]", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "right-0", "w-56", "opacity-10"], ["d", "M190 10 Q80 80 190 190 Q120 100 10 190Z", "fill", "#C8956C"], [1, "bg-white", "rounded-3xl", "shadow-sm", "border", "border-[#F0E6DE]", "p-8", "w-full", "max-w-md", "relative"], [1, "text-center", "mb-2"], [1, "text-xl", "font-bold", "text-[#C8956C]"], [1, "flex", "items-center", "justify-center", "gap-2", "my-5"], [1, "w-2", "h-2", "rounded-full", "bg-[#E8D5CB]"], [1, "w-8", "h-2", "rounded-full", "bg-[#C8956C]"], [1, "text-2xl", "font-bold", "text-[#3D2314]", "text-center", "mb-1"], [1, "text-sm", "text-[#8B6355]", "text-center", "mb-6"], [1, "space-y-3", "mb-8"], ["type", "button", "class", "w-full flex items-center gap-4 border-2 rounded-2xl px-4 py-3.5 text-right transition hover:border-[#C8956C] hover:bg-[#FDF7F4]", 3, "border-[#C8956C]", "bg-[#FDF0EA]", "border-[#E8D5CB]", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "bg-[#C8956C]", "text-white", "py-3", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", "mb-3", 3, "click", "disabled"], [1, "text-center"], ["routerLink", "/onboarding/interests", 1, "text-sm", "text-[#8B6355]", "hover:text-[#C8956C]", "transition"], ["type", "button", 1, "w-full", "flex", "items-center", "gap-4", "border-2", "rounded-2xl", "px-4", "py-3.5", "text-right", "transition", "hover:border-[#C8956C]", "hover:bg-[#FDF7F4]", 3, "click"], [1, "text-2xl", "shrink-0"], [1, "flex-1", "text-right"], [1, "text-sm", "font-semibold", "text-[#3D2314]"], [1, "text-xs", "text-[#8B6355]"], [1, "w-5", "h-5", "rounded-full", "border-2", "flex", "items-center", "justify-center", "shrink-0"], ["class", "w-2.5 h-2.5 rounded-full bg-[#C8956C]", 4, "ngIf"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-[#C8956C]"]], template: function Goal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275text(7, "\u273F Femora");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275element(9, "span", 8)(10, "span", 8)(11, "span", 8)(12, "span", 9)(13, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h2", 10);
      \u0275\u0275text(15, "\u0645\u0627 \u0647\u0648 \u0647\u062F\u0641\u0643 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u061F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 11);
      \u0275\u0275text(17, "\u0627\u062E\u062A\u0627\u0631\u064A \u0647\u062F\u0641\u0627\u064B \u0648\u0627\u062D\u062F\u0627\u064B \u064A\u0646\u0627\u0633\u0628 \u0637\u0645\u0648\u062D\u0627\u062A\u0643");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275template(19, Goal_button_19_Template, 10, 14, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function Goal_Template_button_click_20_listener() {
        return ctx.next();
      });
      \u0275\u0275text(21, " \u0627\u0644\u062A\u0627\u0644\u064A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15)(23, "a", 16);
      \u0275\u0275text(24, "\u0631\u062C\u0648\u0639");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.options);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.selected);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Goal, [{
    type: Component,
    args: [{ selector: "app-goal", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="min-h-screen flex items-center justify-center bg-[#FAF7F4] px-4">\n\n  <!-- Decorative background -->\n  <div class="fixed inset-0 overflow-hidden pointer-events-none">\n    <svg class="absolute top-0 right-0 w-56 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M190 10 Q80 80 190 190 Q120 100 10 190Z" fill="#C8956C"/>\n    </svg>\n  </div>\n\n  <div class="bg-white rounded-3xl shadow-sm border border-[#F0E6DE] p-8 w-full max-w-md relative">\n\n    <!-- Logo -->\n    <div class="text-center mb-2">\n      <span class="text-xl font-bold text-[#C8956C]">\u273F Femora</span>\n    </div>\n\n    <!-- Progress Dots -->\n    <div class="flex items-center justify-center gap-2 my-5">\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-8 h-2 rounded-full bg-[#C8956C]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n    </div>\n\n    <h2 class="text-2xl font-bold text-[#3D2314] text-center mb-1">\u0645\u0627 \u0647\u0648 \u0647\u062F\u0641\u0643 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u061F</h2>\n    <p class="text-sm text-[#8B6355] text-center mb-6">\u0627\u062E\u062A\u0627\u0631\u064A \u0647\u062F\u0641\u0627\u064B \u0648\u0627\u062D\u062F\u0627\u064B \u064A\u0646\u0627\u0633\u0628 \u0637\u0645\u0648\u062D\u0627\u062A\u0643</p>\n\n    <!-- Options List -->\n    <div class="space-y-3 mb-8">\n      <button\n        *ngFor="let option of options"\n        type="button"\n        (click)="select(option.label)"\n        [class.border-[#C8956C]]="selected === option.label"\n        [class.bg-[#FDF0EA]]="selected === option.label"\n        [class.border-[#E8D5CB]]="selected !== option.label"\n        class="w-full flex items-center gap-4 border-2 rounded-2xl px-4 py-3.5 text-right transition hover:border-[#C8956C] hover:bg-[#FDF7F4]"\n      >\n        <span class="text-2xl shrink-0">{{ option.emoji }}</span>\n        <div class="flex-1 text-right">\n          <p class="text-sm font-semibold text-[#3D2314]">{{ option.label }}</p>\n          <p class="text-xs text-[#8B6355]">{{ option.desc }}</p>\n        </div>\n        <!-- Radio -->\n        <span\n          class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"\n          [class.border-[#C8956C]]="selected === option.label"\n          [class.border-[#E8D5CB]]="selected !== option.label"\n        >\n          <span *ngIf="selected === option.label" class="w-2.5 h-2.5 rounded-full bg-[#C8956C]"></span>\n        </span>\n      </button>\n    </div>\n\n    <button\n      type="button"\n      (click)="next()"\n      [disabled]="!selected"\n      class="w-full bg-[#C8956C] text-white py-3 rounded-xl font-semibold hover:bg-[#B07855] transition disabled:opacity-40 disabled:cursor-not-allowed mb-3"\n    >\n      \u0627\u0644\u062A\u0627\u0644\u064A\n    </button>\n\n    <div class="text-center">\n      <a routerLink="/onboarding/interests" class="text-sm text-[#8B6355] hover:text-[#C8956C] transition">\u0631\u062C\u0648\u0639</a>\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Goal, { className: "Goal", filePath: "src/app/features/auth/pages/onboarding/goal/goal.ts", lineNumber: 18 });
})();
export {
  Goal
};
//# sourceMappingURL=chunk-OHIENCJZ.js.map
