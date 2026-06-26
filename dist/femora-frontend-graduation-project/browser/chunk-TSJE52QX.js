import {
  StorageService
} from "./chunk-4G4TVXPT.js";
import {
  CommonModule,
  Component,
  NgForOf,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CQIDYBZP.js";

// src/app/features/auth/pages/onboarding/interests/interests.ts
function Interests_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function Interests_button_21_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(option_r2));
    });
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275classProp("bg-[#FDF0EA]", option_r2.selected)("border-[#C8956C]", option_r2.selected)("text-[#7A4B2A]", option_r2.selected)("border-[#E8D5CB]", !option_r2.selected)("text-[#8B6355]", !option_r2.selected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.emoji);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
var Interests = class _Interests {
  router = inject(Router);
  storage = inject(StorageService);
  options = [
    { label: "\u0627\u0644\u0643\u0631\u0648\u0634\u064A\u0647 \u0648\u0627\u0644\u062A\u0631\u064A\u0643\u0648", emoji: "\u{1F9F6}", selected: false },
    { label: "\u0627\u0644\u0637\u0628\u062E", emoji: "\u{1F373}", selected: false },
    { label: "\u0627\u0644\u0631\u0633\u0645 \u0648\u0627\u0644\u0641\u0646\u0648\u0646", emoji: "\u{1F3A8}", selected: false },
    { label: "\u0627\u0644\u0641\u062E\u0627\u0631 \u0648\u0627\u0644\u0633\u064A\u0631\u0627\u0645\u064A\u0643", emoji: "\u{1F3FA}", selected: false },
    { label: "\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u062C\u0648\u0647\u0631\u0627\u062A", emoji: "\u{1F48D}", selected: false },
    { label: "\u0627\u0644\u0625\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A", emoji: "\u{1F45C}", selected: false },
    { label: "\u0627\u0644\u062F\u064A\u0643\u0648\u0631 \u0627\u0644\u0645\u0646\u0632\u0644\u064A", emoji: "\u{1F3E1}", selected: false },
    { label: "\u062A\u0635\u0648\u064A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A", emoji: "\u{1F4F8}", selected: false },
    { label: "\u0623\u0639\u0645\u0627\u0644 \u062E\u0634\u0628\u064A\u0629", emoji: "\u{1FAB5}", selected: false },
    { label: "\u0623\u062E\u0631\u0649", emoji: "\u2728", selected: false }
  ];
  toggle(option) {
    option.selected = !option.selected;
  }
  next() {
    const selected = this.options.filter((o) => o.selected).map((o) => o.label);
    this.storage.set("femora_onboarding_interests", selected);
    this.router.navigate(["/onboarding/goal"]);
  }
  hasSelection() {
    return this.options.some((o) => o.selected);
  }
  static \u0275fac = function Interests_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Interests)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Interests, selectors: [["app-interests"]], decls: 27, vars: 2, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-[#FAF7F4]", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "left-0", "w-56", "opacity-10"], ["d", "M10 10 Q70 70 10 190 Q80 130 190 10Z", "fill", "#C8956C"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "bottom-0", "right-0", "w-56", "opacity-10"], ["d", "M190 190 Q130 130 190 10 Q120 80 10 190Z", "fill", "#D4856A"], [1, "bg-white", "rounded-3xl", "shadow-sm", "border", "border-[#F0E6DE]", "p-8", "w-full", "max-w-md", "relative"], [1, "text-center", "mb-2"], [1, "text-xl", "font-bold", "text-[#C8956C]"], [1, "flex", "items-center", "justify-center", "gap-2", "my-5"], [1, "w-2", "h-2", "rounded-full", "bg-[#E8D5CB]"], [1, "w-8", "h-2", "rounded-full", "bg-[#C8956C]"], [1, "text-2xl", "font-bold", "text-[#3D2314]", "text-center", "mb-1"], [1, "text-sm", "text-[#8B6355]", "text-center", "mb-6"], [1, "grid", "grid-cols-2", "gap-3", "mb-8"], ["type", "button", "class", "flex flex-col items-center gap-2 border-2 rounded-2xl py-4 px-3 text-sm font-medium transition hover:border-[#C8956C] hover:bg-[#FDF7F4]", 3, "bg-[#FDF0EA]", "border-[#C8956C]", "text-[#7A4B2A]", "border-[#E8D5CB]", "text-[#8B6355]", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "bg-[#C8956C]", "text-white", "py-3", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "transition", "mb-3", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "text-center"], ["routerLink", "/verify-email", 1, "text-sm", "text-[#8B6355]", "hover:text-[#C8956C]", "transition"], ["type", "button", 1, "flex", "flex-col", "items-center", "gap-2", "border-2", "rounded-2xl", "py-4", "px-3", "text-sm", "font-medium", "transition", "hover:border-[#C8956C]", "hover:bg-[#FDF7F4]", 3, "click"], [1, "text-xl"]], template: function Interests_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "span", 8);
      \u0275\u0275text(9, "\u273F Femora");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275element(11, "span", 10)(12, "span", 10)(13, "span", 11)(14, "span", 10)(15, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h2", 12);
      \u0275\u0275text(17, "\u0645\u0627 \u0647\u064A \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A\u0643\u061F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 13);
      \u0275\u0275text(19, "\u0627\u062E\u062A\u0627\u0631\u064A \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0647\u0645\u0643 \u0644\u062A\u062D\u0635\u0644\u064A \u0639\u0644\u0649 \u062A\u062C\u0631\u0628\u0629 \u0645\u062E\u0635\u0635\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275template(21, Interests_button_21_Template, 4, 12, "button", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275listener("click", function Interests_Template_button_click_22_listener() {
        return ctx.next();
      });
      \u0275\u0275text(23, " \u0627\u0644\u062A\u0627\u0644\u064A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17)(25, "a", 18);
      \u0275\u0275text(26, "\u0631\u062C\u0648\u0639");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.options);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.hasSelection());
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Interests, [{
    type: Component,
    args: [{ selector: "app-interests", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="min-h-screen flex items-center justify-center bg-[#FAF7F4] px-4">\n\n  <!-- Decorative background -->\n  <div class="fixed inset-0 overflow-hidden pointer-events-none">\n    <svg class="absolute top-0 left-0 w-56 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M10 10 Q70 70 10 190 Q80 130 190 10Z" fill="#C8956C"/>\n    </svg>\n    <svg class="absolute bottom-0 right-0 w-56 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M190 190 Q130 130 190 10 Q120 80 10 190Z" fill="#D4856A"/>\n    </svg>\n  </div>\n\n  <div class="bg-white rounded-3xl shadow-sm border border-[#F0E6DE] p-8 w-full max-w-md relative">\n\n    <!-- Logo -->\n    <div class="text-center mb-2">\n      <span class="text-xl font-bold text-[#C8956C]">\u273F Femora</span>\n    </div>\n\n    <!-- Progress Dots -->\n    <div class="flex items-center justify-center gap-2 my-5">\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-8 h-2 rounded-full bg-[#C8956C]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n    </div>\n\n    <h2 class="text-2xl font-bold text-[#3D2314] text-center mb-1">\u0645\u0627 \u0647\u064A \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A\u0643\u061F</h2>\n    <p class="text-sm text-[#8B6355] text-center mb-6">\u0627\u062E\u062A\u0627\u0631\u064A \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0647\u0645\u0643 \u0644\u062A\u062D\u0635\u0644\u064A \u0639\u0644\u0649 \u062A\u062C\u0631\u0628\u0629 \u0645\u062E\u0635\u0635\u0629</p>\n\n    <!-- Options Grid -->\n    <div class="grid grid-cols-2 gap-3 mb-8">\n      <button\n        *ngFor="let option of options"\n        type="button"\n        (click)="toggle(option)"\n        [class.bg-[#FDF0EA]]="option.selected"\n        [class.border-[#C8956C]]="option.selected"\n        [class.text-[#7A4B2A]]="option.selected"\n        [class.border-[#E8D5CB]]="!option.selected"\n        [class.text-[#8B6355]]="!option.selected"\n        class="flex flex-col items-center gap-2 border-2 rounded-2xl py-4 px-3 text-sm font-medium transition hover:border-[#C8956C] hover:bg-[#FDF7F4]"\n      >\n        <span class="text-xl">{{ option.emoji }}</span>\n        {{ option.label }}\n      </button>\n    </div>\n\n    <!-- Next Button -->\n    <button\n      type="button"\n      (click)="next()"\n      [disabled]="!hasSelection()"\n      class="w-full bg-[#C8956C] text-white py-3 rounded-xl font-semibold hover:bg-[#B07855] transition mb-3 disabled:opacity-40 disabled:cursor-not-allowed"\n    >\n      \u0627\u0644\u062A\u0627\u0644\u064A\n    </button>\n\n    <div class="text-center">\n      <a routerLink="/verify-email" class="text-sm text-[#8B6355] hover:text-[#C8956C] transition">\u0631\u062C\u0648\u0639</a>\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Interests, { className: "Interests", filePath: "src/app/features/auth/pages/onboarding/interests/interests.ts", lineNumber: 18 });
})();
export {
  Interests
};
//# sourceMappingURL=chunk-TSJE52QX.js.map
