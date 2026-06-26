import {
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-CQIDYBZP.js";

// src/app/features/auth/pages/email-verified/email-verified.ts
var EmailVerified = class _EmailVerified {
  static \u0275fac = function EmailVerified_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailVerified)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailVerified, selectors: [["app-email-verified"]], decls: 25, vars: 0, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-[#FAF7F4]", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "right-0", "w-64", "opacity-10"], ["d", "M190 5 Q80 90 5 195 Q100 105 190 5Z", "fill", "#C8956C"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "bottom-0", "left-0", "w-64", "opacity-10"], ["d", "M5 195 Q115 105 195 5 Q95 95 5 195Z", "fill", "#D4856A"], ["viewBox", "0 0 100 100", "fill", "none", 1, "absolute", "top-8", "left-8", "w-32", "opacity-20"], ["d", "M10 90 Q30 40 90 10 Q60 50 10 90Z", "fill", "#C8956C"], ["d", "M10 90 Q50 60 90 10", "stroke", "#B07855", "stroke-width", "1.5"], [1, "bg-white", "rounded-3xl", "shadow-sm", "border", "border-[#F0E6DE]", "px-10", "py-12", "w-full", "max-w-md", "relative", "text-center"], [1, "flex", "justify-center", "mb-6"], ["src", "/images/success-approval-state.png", "alt", "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0646\u062C\u0627\u062D", 1, "w-40", "h-40", "object-cover", "rounded-full", "ring-4", "ring-[#EAF3DE]"], [1, "text-2xl", "font-bold", "text-[#3D2314]", "mb-3"], [1, "text-sm", "text-[#8B6355]", "leading-relaxed", "mb-8"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "flex-1", "h-px", "bg-[#F0E6DE]"], [1, "text-[#C8956C]", "text-xs"], ["routerLink", "/onboarding/interests", 1, "w-full", "bg-[#C8956C]", "text-white", "py-3", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "transition"]], template: function EmailVerified_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7)(8, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10);
      \u0275\u0275element(11, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h2", 12);
      \u0275\u0275text(13, "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0646\u062C\u0627\u062D! \u{1F389}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 13);
      \u0275\u0275text(15, " \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0646\u062C\u0627\u062D.");
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17, " \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u0627\u0644\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0628\u0643\u0627\u0645\u0644 \u0645\u0646\u0635\u0629 Femora \u0644\u0644\u062A\u0639\u0644\u0645 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0627\u0644\u0643\u0633\u0628 \u0645\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0643. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275element(19, "div", 15);
      \u0275\u0275elementStart(20, "span", 16);
      \u0275\u0275text(21, "\u273F");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275text(24, " \u0645\u062A\u0627\u0628\u0639\u0629 \u2014 \u0644\u0646\u062E\u0635\u0651\u0635 \u062A\u062C\u0631\u0628\u062A\u0643 ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailVerified, [{
    type: Component,
    args: [{ selector: "app-email-verified", standalone: true, imports: [RouterLink], template: '<div class="min-h-screen flex items-center justify-center bg-[#FAF7F4] px-4">\n\n  <!-- Decorative background -->\n  <div class="fixed inset-0 overflow-hidden pointer-events-none">\n    <svg class="absolute top-0 right-0 w-64 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M190 5 Q80 90 5 195 Q100 105 190 5Z" fill="#C8956C"/>\n    </svg>\n    <svg class="absolute bottom-0 left-0 w-64 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M5 195 Q115 105 195 5 Q95 95 5 195Z" fill="#D4856A"/>\n    </svg>\n    <!-- Small leaf top left -->\n    <svg class="absolute top-8 left-8 w-32 opacity-20" viewBox="0 0 100 100" fill="none">\n      <path d="M10 90 Q30 40 90 10 Q60 50 10 90Z" fill="#C8956C"/>\n      <path d="M10 90 Q50 60 90 10" stroke="#B07855" stroke-width="1.5"/>\n    </svg>\n  </div>\n\n  <div class="bg-white rounded-3xl shadow-sm border border-[#F0E6DE] px-10 py-12 w-full max-w-md relative text-center">\n\n    <!-- Success illustration -->\n    <div class="flex justify-center mb-6">\n      <img\n        src="/images/success-approval-state.png"\n        alt="\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0646\u062C\u0627\u062D"\n        class="w-40 h-40 object-cover rounded-full ring-4 ring-[#EAF3DE]"\n      />\n    </div>\n\n    <h2 class="text-2xl font-bold text-[#3D2314] mb-3">\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0646\u062C\u0627\u062D! \u{1F389}</h2>\n    <p class="text-sm text-[#8B6355] leading-relaxed mb-8">\n      \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0646\u062C\u0627\u062D.<br>\n      \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u0627\u0644\u0627\u0633\u062A\u0645\u062A\u0627\u0639 \u0628\u0643\u0627\u0645\u0644 \u0645\u0646\u0635\u0629 Femora \u0644\u0644\u062A\u0639\u0644\u0645 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0627\u0644\u0643\u0633\u0628 \u0645\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0643.\n    </p>\n\n    <!-- Divider with decorative element -->\n    <div class="flex items-center gap-3 mb-6">\n      <div class="flex-1 h-px bg-[#F0E6DE]"></div>\n      <span class="text-[#C8956C] text-xs">\u273F</span>\n      <div class="flex-1 h-px bg-[#F0E6DE]"></div>\n    </div>\n\n    <button\n      routerLink="/onboarding/interests"\n      class="w-full bg-[#C8956C] text-white py-3 rounded-xl font-semibold hover:bg-[#B07855] transition"\n    >\n      \u0645\u062A\u0627\u0628\u0639\u0629 \u2014 \u0644\u0646\u062E\u0635\u0651\u0635 \u062A\u062C\u0631\u0628\u062A\u0643\n    </button>\n\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailVerified, { className: "EmailVerified", filePath: "src/app/features/auth/pages/email-verified/email-verified.ts", lineNumber: 11 });
})();
export {
  EmailVerified
};
//# sourceMappingURL=chunk-56LQBEL7.js.map
