import './polyfills.server.mjs';
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
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/onboarding/welcome/welcome.ts
var Welcome = class _Welcome {
  static \u0275fac = function Welcome_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Welcome)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Welcome, selectors: [["app-welcome"]], decls: 62, vars: 0, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-[#FAF7F4]", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "left-0", "w-72", "opacity-10"], ["d", "M10 10 Q60 80 10 190 Q80 120 190 10Z", "fill", "#C8956C"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "bottom-0", "right-0", "w-72", "opacity-10"], ["d", "M190 190 Q140 110 190 10 Q120 80 10 190Z", "fill", "#D4856A"], [1, "bg-white", "rounded-3xl", "shadow-sm", "border", "border-[#F0E6DE]", "px-10", "py-12", "w-full", "max-w-lg", "relative"], [1, "flex", "justify-center", "mb-6"], [1, "relative", "w-40", "h-40"], [1, "w-40", "h-40", "rounded-full", "bg-[#FDF0EA]", "flex", "items-center", "justify-center"], ["viewBox", "0 0 100 100", "fill", "none", 1, "w-28", "h-28"], ["cx", "50", "cy", "28", "r", "14", "fill", "#E8C4A0"], ["d", "M28 70c0-12 10-22 22-22s22 10 22 22", "fill", "#C8956C"], ["d", "M36 22 Q50 10 64 22 Q64 15 50 12 Q36 15 36 22Z", "fill", "#3D2314"], ["cx", "50", "cy", "35", "rx", "14", "ry", "8", "fill", "#D4856A", "opacity", "0.5"], ["cx", "50", "cy", "75", "rx", "16", "ry", "8", "fill", "#E8C4A0", "opacity", "0.6"], ["x", "18", "y", "50", "font-size", "10", "fill", "#C8956C"], ["x", "72", "y", "44", "font-size", "8", "fill", "#D4856A"], ["x", "30", "y", "82", "font-size", "6", "fill", "#E8C4A0"], [1, "absolute", "-top-2", "right-4", "text-[#C8956C]", "text-2xl"], [1, "absolute", "-bottom-2", "left-4", "text-[#D4856A]", "text-sm"], [1, "text-3xl", "font-bold", "text-[#3D2314]", "text-center", "mb-2"], [1, "text-sm", "text-[#8B6355]", "text-center", "leading-relaxed", "mb-8", "max-w-sm", "mx-auto"], [1, "grid", "grid-cols-1", "gap-3", "mb-8"], [1, "flex", "items-center", "gap-3", "bg-[#FDF7F4]", "rounded-xl", "p-3.5", "border", "border-[#F0E6DE]"], [1, "w-10", "h-10", "rounded-full", "bg-[#FDF0EA]", "flex", "items-center", "justify-center", "shrink-0"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#C8956C", "stroke-width", "2", 1, "w-5", "h-5"], ["d", "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"], [1, "text-sm", "font-semibold", "text-[#3D2314]"], [1, "text-xs", "text-[#8B6355]"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4l3 3"], ["routerLink", "/dashboard", 1, "w-full", "bg-[#C8956C]", "text-white", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "transition", "text-base"]], template: function Welcome_Template(rf, ctx) {
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
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 10);
      \u0275\u0275element(11, "circle", 11)(12, "path", 12)(13, "path", 13)(14, "ellipse", 14)(15, "ellipse", 15);
      \u0275\u0275elementStart(16, "text", 16);
      \u0275\u0275text(17, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "text", 17);
      \u0275\u0275text(19, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "text", 18);
      \u0275\u0275text(21, "\u2726");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 19);
      \u0275\u0275text(23, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 20);
      \u0275\u0275text(25, "\u2726");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "h2", 21);
      \u0275\u0275text(27, " \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0650 \u0641\u064A Femora! \u2728 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 22);
      \u0275\u0275text(29, " \u062A\u0645 \u0625\u0639\u062F\u0627\u062F \u062D\u0633\u0627\u0628\u0643 \u0628\u0646\u062C\u0627\u062D. \u0627\u0643\u062A\u0634\u0641\u064A \u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A\u0643 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629 \u0648\u0627\u0639\u0631\u0641\u064A \u0643\u064A\u0641 \u062A\u062D\u0648\u0644\u064A\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0625\u0644\u0649 \u062F\u062E\u0644 \u062D\u0642\u064A\u0642\u064A. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 24)(32, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 26);
      \u0275\u0275element(34, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div")(36, "p", 28);
      \u0275\u0275text(37, "\u062A\u0639\u0644\u0645\u064A \u0628\u0644\u0627 \u062D\u062F\u0648\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 29);
      \u0275\u0275text(39, "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0622\u0644\u0627\u0641 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 24)(41, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 26);
      \u0275\u0275element(43, "path", 30)(44, "line", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div")(46, "p", 28);
      \u0275\u0275text(47, "\u0628\u064A\u0639\u064A \u0645\u0647\u0627\u0631\u0627\u062A\u0643");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 29);
      \u0275\u0275text(49, "\u0623\u0646\u0634\u0626\u064A \u0645\u062A\u062C\u0631\u0643 \u0648\u0627\u0628\u062F\u0626\u064A \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u064A\u0648\u0645");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 24)(51, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 26);
      \u0275\u0275element(53, "circle", 32)(54, "path", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "div")(56, "p", 28);
      \u0275\u0275text(57, "\u0645\u062C\u062A\u0645\u0639 \u062F\u0627\u0639\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 29);
      \u0275\u0275text(59, "\u0627\u0646\u0636\u0645\u064A \u0644\u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0631\u0623\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "button", 34);
      \u0275\u0275text(61, " \u0627\u0628\u062F\u0626\u064A \u0631\u062D\u0644\u062A\u0643 \u0627\u0644\u0622\u0646 \u{1F680} ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Welcome, [{
    type: Component,
    args: [{ selector: "app-welcome", standalone: true, imports: [RouterLink], template: '<div class="min-h-screen flex items-center justify-center bg-[#FAF7F4] px-4">\n\n  <!-- Decorative background -->\n  <div class="fixed inset-0 overflow-hidden pointer-events-none">\n    <svg class="absolute top-0 left-0 w-72 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M10 10 Q60 80 10 190 Q80 120 190 10Z" fill="#C8956C"/>\n    </svg>\n    <svg class="absolute bottom-0 right-0 w-72 opacity-10" viewBox="0 0 200 200" fill="none">\n      <path d="M190 190 Q140 110 190 10 Q120 80 10 190Z" fill="#D4856A"/>\n    </svg>\n  </div>\n\n  <div class="bg-white rounded-3xl shadow-sm border border-[#F0E6DE] px-10 py-12 w-full max-w-lg relative">\n\n    <!-- Illustration area -->\n    <div class="flex justify-center mb-6">\n      <div class="relative w-40 h-40">\n        <!-- Background circle -->\n        <div class="w-40 h-40 rounded-full bg-[#FDF0EA] flex items-center justify-center">\n          <!-- Craft/skill illustration -->\n          <svg class="w-28 h-28" viewBox="0 0 100 100" fill="none">\n            <!-- Woman with craft -->\n            <circle cx="50" cy="28" r="14" fill="#E8C4A0"/>\n            <path d="M28 70c0-12 10-22 22-22s22 10 22 22" fill="#C8956C"/>\n            <!-- Hair -->\n            <path d="M36 22 Q50 10 64 22 Q64 15 50 12 Q36 15 36 22Z" fill="#3D2314"/>\n            <!-- Hijab hint -->\n            <ellipse cx="50" cy="35" rx="14" ry="8" fill="#D4856A" opacity="0.5"/>\n            <!-- Craft in hands -->\n            <ellipse cx="50" cy="75" rx="16" ry="8" fill="#E8C4A0" opacity="0.6"/>\n            <!-- Sparkles -->\n            <text x="18" y="50" font-size="10" fill="#C8956C">\u2726</text>\n            <text x="72" y="44" font-size="8" fill="#D4856A">\u2726</text>\n            <text x="30" y="82" font-size="6" fill="#E8C4A0">\u2726</text>\n          </svg>\n        </div>\n        <!-- Stars around -->\n        <div class="absolute -top-2 right-4 text-[#C8956C] text-2xl">\u2726</div>\n        <div class="absolute -bottom-2 left-4 text-[#D4856A] text-sm">\u2726</div>\n      </div>\n    </div>\n\n    <h2 class="text-3xl font-bold text-[#3D2314] text-center mb-2">\n      \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0650 \u0641\u064A Femora! \u2728\n    </h2>\n    <p class="text-sm text-[#8B6355] text-center leading-relaxed mb-8 max-w-sm mx-auto">\n      \u062A\u0645 \u0625\u0639\u062F\u0627\u062F \u062D\u0633\u0627\u0628\u0643 \u0628\u0646\u062C\u0627\u062D. \u0627\u0643\u062A\u0634\u0641\u064A \u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A\u0643 \u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629 \u0648\u0627\u0639\u0631\u0641\u064A \u0643\u064A\u0641 \u062A\u062D\u0648\u0644\u064A\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0625\u0644\u0649 \u062F\u062E\u0644 \u062D\u0642\u064A\u0642\u064A.\n    </p>\n\n    <!-- Feature highlights -->\n    <div class="grid grid-cols-1 gap-3 mb-8">\n      <div class="flex items-center gap-3 bg-[#FDF7F4] rounded-xl p-3.5 border border-[#F0E6DE]">\n        <div class="w-10 h-10 rounded-full bg-[#FDF0EA] flex items-center justify-center shrink-0">\n          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#C8956C" stroke-width="2">\n            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>\n          </svg>\n        </div>\n        <div>\n          <p class="text-sm font-semibold text-[#3D2314]">\u062A\u0639\u0644\u0645\u064A \u0628\u0644\u0627 \u062D\u062F\u0648\u062F</p>\n          <p class="text-xs text-[#8B6355]">\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0622\u0644\u0627\u0641 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629</p>\n        </div>\n      </div>\n      <div class="flex items-center gap-3 bg-[#FDF7F4] rounded-xl p-3.5 border border-[#F0E6DE]">\n        <div class="w-10 h-10 rounded-full bg-[#FDF0EA] flex items-center justify-center shrink-0">\n          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#C8956C" stroke-width="2">\n            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>\n            <line x1="7" y1="7" x2="7.01" y2="7"/>\n          </svg>\n        </div>\n        <div>\n          <p class="text-sm font-semibold text-[#3D2314]">\u0628\u064A\u0639\u064A \u0645\u0647\u0627\u0631\u0627\u062A\u0643</p>\n          <p class="text-xs text-[#8B6355]">\u0623\u0646\u0634\u0626\u064A \u0645\u062A\u062C\u0631\u0643 \u0648\u0627\u0628\u062F\u0626\u064A \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u064A\u0648\u0645</p>\n        </div>\n      </div>\n      <div class="flex items-center gap-3 bg-[#FDF7F4] rounded-xl p-3.5 border border-[#F0E6DE]">\n        <div class="w-10 h-10 rounded-full bg-[#FDF0EA] flex items-center justify-center shrink-0">\n          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#C8956C" stroke-width="2">\n            <circle cx="12" cy="12" r="10"/>\n            <path d="M12 8v4l3 3"/>\n          </svg>\n        </div>\n        <div>\n          <p class="text-sm font-semibold text-[#3D2314]">\u0645\u062C\u062A\u0645\u0639 \u062F\u0627\u0639\u0645</p>\n          <p class="text-xs text-[#8B6355]">\u0627\u0646\u0636\u0645\u064A \u0644\u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0631\u0623\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629</p>\n        </div>\n      </div>\n    </div>\n\n    <button\n      routerLink="/dashboard"\n      class="w-full bg-[#C8956C] text-white py-3.5 rounded-xl font-semibold hover:bg-[#B07855] transition text-base"\n    >\n      \u0627\u0628\u062F\u0626\u064A \u0631\u062D\u0644\u062A\u0643 \u0627\u0644\u0622\u0646 \u{1F680}\n    </button>\n\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Welcome, { className: "Welcome", filePath: "src/app/features/auth/pages/onboarding/welcome/welcome.ts", lineNumber: 11 });
})();
export {
  Welcome
};
//# sourceMappingURL=chunk-UB5FTW4C.mjs.map
