import {
  AuthService
} from "./chunk-XBDBTCCP.js";
import "./chunk-L6J77KKO.js";
import "./chunk-4G4TVXPT.js";
import {
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate1
} from "./chunk-CQIDYBZP.js";

// src/app/features/auth/pages/verify-email/verify-email.ts
function VerifyEmail_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, " \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u062A\u0627\u062D\u0629 \u062E\u0644\u0627\u0644 ");
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r0.formatCountdown(), ")");
  }
}
function VerifyEmail_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function VerifyEmail_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resendEmail());
    });
    \u0275\u0275text(1, " \u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0627\u0628\u0637 ");
    \u0275\u0275elementEnd();
  }
}
var VerifyEmail = class _VerifyEmail {
  auth = inject(AuthService);
  email = "";
  countdown = 45;
  timer = null;
  ngOnInit() {
    this.email = this.auth.getPendingEmail() ?? this.auth.user()?.email ?? "";
    this.startCountdown();
  }
  ngOnDestroy() {
    if (this.timer)
      clearInterval(this.timer);
  }
  startCountdown() {
    this.countdown = 45;
    if (this.timer)
      clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else if (this.timer) {
        clearInterval(this.timer);
      }
    }, 1e3);
  }
  formatCountdown() {
    const m = Math.floor(this.countdown / 60);
    const s = this.countdown % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  resendEmail() {
    this.startCountdown();
  }
  static \u0275fac = function VerifyEmail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyEmail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmail, selectors: [["app-verify-email"]], decls: 35, vars: 3, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-[#FAF7F4]", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "left-0", "w-48", "opacity-20"], ["d", "M20 180 Q60 80 180 20 Q120 100 20 180Z", "fill", "#C8956C"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "bottom-0", "right-0", "w-48", "opacity-20"], ["d", "M180 20 Q140 120 20 180 Q80 100 180 20Z", "fill", "#D4856A"], [1, "bg-white", "rounded-3xl", "shadow-sm", "border", "border-[#F0E6DE]", "p-10", "w-full", "max-w-md", "relative"], [1, "flex", "items-center", "justify-center", "gap-1.5", "mb-8"], [1, "w-8", "h-1.5", "rounded-full", "bg-[#C8956C]"], [1, "w-2", "h-2", "rounded-full", "bg-[#E8D5CB]"], [1, "flex", "justify-center", "mb-6"], [1, "w-24", "h-24", "bg-[#FDF0EA]", "rounded-full", "flex", "items-center", "justify-center"], ["viewBox", "0 0 80 80", "fill", "none", 1, "w-14", "h-14"], ["x", "8", "y", "20", "width", "64", "height", "44", "rx", "6", "fill", "#F5C9B0", "stroke", "#D4856A", "stroke-width", "2"], ["d", "M8 26 L40 46 L72 26", "stroke", "#D4856A", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "60", "cy", "26", "r", "10", "fill", "#C8956C"], ["d", "M54 26 L58 30 L67 21", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-2xl", "font-bold", "text-[#3D2314]", "text-center", "mb-2"], [1, "text-sm", "text-[#8B6355]", "text-center", "mb-2"], [1, "text-sm", "font-semibold", "text-[#C8956C]", "text-center", "mb-6"], [1, "text-xs", "text-[#A07060]", "text-center", "mb-8"], [1, "text-center", "mb-6"], ["class", "text-sm text-[#A07060]", 4, "ngIf"], ["class", "text-sm font-semibold text-[#C8956C] hover:text-[#B07855] transition underline", 3, "click", 4, "ngIf"], ["routerLink", "/email-verified", 1, "w-full", "bg-[#C8956C]", "text-white", "py-3", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "transition", "mb-3"], ["routerLink", "/register", 1, "w-full", "border", "border-[#E8D5CB]", "text-[#8B6355]", "py-3", "rounded-xl", "font-medium", "hover:bg-[#FAF7F4]", "transition"], [1, "text-sm", "text-[#A07060]"], [1, "font-semibold", "text-[#C8956C]"], [1, "text-sm", "font-semibold", "text-[#C8956C]", "hover:text-[#B07855]", "transition", "underline", 3, "click"]], template: function VerifyEmail_Template(rf, ctx) {
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
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "span", 8)(9, "span", 8)(10, "span", 9)(11, "span", 9)(12, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "rect", 13)(17, "path", 14)(18, "circle", 15)(19, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "h2", 17);
      \u0275\u0275text(21, "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 18);
      \u0275\u0275text(23, " \u0644\u0642\u062F \u0623\u0631\u0633\u0644\u0646\u0627 \u0631\u0627\u0628\u0637\u0627\u064B \u0644\u062A\u0641\u0639\u064A\u0644 \u062D\u0633\u0627\u0628\u0643 \u0625\u0644\u0649 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 19);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 20);
      \u0275\u0275text(27, " \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0648\u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0646 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628\u0643. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 21);
      \u0275\u0275template(29, VerifyEmail_span_29_Template, 4, 1, "span", 22)(30, VerifyEmail_button_30_Template, 2, 0, "button", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 24);
      \u0275\u0275text(32, " \u0644\u0642\u062F \u062A\u062D\u0642\u0642\u062A \u0645\u0646 \u0628\u0631\u064A\u062F\u064A \u2713 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 25);
      \u0275\u0275text(34, " \u0631\u062C\u0648\u0639 ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275textInterpolate1(" ", ctx.email, " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.countdown > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.countdown === 0);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyEmail, [{
    type: Component,
    args: [{ selector: "app-verify-email", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="min-h-screen flex items-center justify-center bg-[#FAF7F4] px-4">\n\n  <!-- Decorative background leaves -->\n  <div class="fixed inset-0 overflow-hidden pointer-events-none">\n    <svg class="absolute top-0 left-0 w-48 opacity-20" viewBox="0 0 200 200" fill="none">\n      <path d="M20 180 Q60 80 180 20 Q120 100 20 180Z" fill="#C8956C"/>\n    </svg>\n    <svg class="absolute bottom-0 right-0 w-48 opacity-20" viewBox="0 0 200 200" fill="none">\n      <path d="M180 20 Q140 120 20 180 Q80 100 180 20Z" fill="#D4856A"/>\n    </svg>\n  </div>\n\n  <div class="bg-white rounded-3xl shadow-sm border border-[#F0E6DE] p-10 w-full max-w-md relative">\n\n    <!-- Progress steps -->\n    <div class="flex items-center justify-center gap-1.5 mb-8">\n      <span class="w-8 h-1.5 rounded-full bg-[#C8956C]"></span>\n      <span class="w-8 h-1.5 rounded-full bg-[#C8956C]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>\n    </div>\n\n    <!-- Envelope illustration -->\n    <div class="flex justify-center mb-6">\n      <div class="w-24 h-24 bg-[#FDF0EA] rounded-full flex items-center justify-center">\n        <svg class="w-14 h-14" viewBox="0 0 80 80" fill="none">\n          <rect x="8" y="20" width="64" height="44" rx="6" fill="#F5C9B0" stroke="#D4856A" stroke-width="2"/>\n          <path d="M8 26 L40 46 L72 26" stroke="#D4856A" stroke-width="2" stroke-linecap="round"/>\n          <circle cx="60" cy="26" r="10" fill="#C8956C"/>\n          <path d="M54 26 L58 30 L67 21" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </div>\n    </div>\n\n    <h2 class="text-2xl font-bold text-[#3D2314] text-center mb-2">\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</h2>\n    <p class="text-sm text-[#8B6355] text-center mb-2">\n      \u0644\u0642\u062F \u0623\u0631\u0633\u0644\u0646\u0627 \u0631\u0627\u0628\u0637\u0627\u064B \u0644\u062A\u0641\u0639\u064A\u0644 \u062D\u0633\u0627\u0628\u0643 \u0625\u0644\u0649\n    </p>\n    <p class="text-sm font-semibold text-[#C8956C] text-center mb-6">\n      {{ email }}\n    </p>\n\n    <p class="text-xs text-[#A07060] text-center mb-8">\n      \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u0631\u064A\u062F\u0643 \u0648\u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0644\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0646 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628\u0643.\n    </p>\n\n    <!-- Countdown resend -->\n    <div class="text-center mb-6">\n      <span *ngIf="countdown > 0" class="text-sm text-[#A07060]">\n        \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u062A\u0627\u062D\u0629 \u062E\u0644\u0627\u0644\n        <span class="font-semibold text-[#C8956C]">({{ formatCountdown() }})</span>\n      </span>\n      <button\n        *ngIf="countdown === 0"\n        (click)="resendEmail()"\n        class="text-sm font-semibold text-[#C8956C] hover:text-[#B07855] transition underline"\n      >\n        \u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0627\u0628\u0637\n      </button>\n    </div>\n\n    <!-- Actions -->\n    <button\n      routerLink="/email-verified"\n      class="w-full bg-[#C8956C] text-white py-3 rounded-xl font-semibold hover:bg-[#B07855] transition mb-3"\n    >\n      \u0644\u0642\u062F \u062A\u062D\u0642\u0642\u062A \u0645\u0646 \u0628\u0631\u064A\u062F\u064A \u2713\n    </button>\n\n    <button\n      routerLink="/register"\n      class="w-full border border-[#E8D5CB] text-[#8B6355] py-3 rounded-xl font-medium hover:bg-[#FAF7F4] transition"\n    >\n      \u0631\u062C\u0648\u0639\n    </button>\n\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmail, { className: "VerifyEmail", filePath: "src/app/features/auth/pages/verify-email/verify-email.ts", lineNumber: 13 });
})();
export {
  VerifyEmail
};
//# sourceMappingURL=chunk-ZHZMC2KT.js.map
