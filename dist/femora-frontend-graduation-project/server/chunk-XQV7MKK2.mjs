import './polyfills.server.mjs';
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N3NDYBCB.mjs";
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
  NgIf,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/login/login.ts
function Login_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function Login__svg_svg_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 86);
    \u0275\u0275element(1, "path", 87)(2, "circle", 88);
    \u0275\u0275elementEnd();
  }
}
function Login__svg_svg_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 86);
    \u0275\u0275element(1, "path", 89)(2, "line", 90);
    \u0275\u0275elementEnd();
  }
}
function Login__svg_svg_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "circle", 92);
    \u0275\u0275elementEnd();
  }
}
var Login = class _Login {
  auth = inject(AuthService);
  router = inject(Router);
  notifications = inject(NotificationService);
  email = "";
  password = "";
  rememberMe = false;
  showPassword = false;
  isLoading = false;
  errorMessage = "";
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (!this.email || !this.password) {
      this.errorMessage = "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631";
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.auth.signin({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.requiresProfileSelection) {
          this.router.navigate(["/select-profile"]);
        } else {
          this.notifications.success("\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643!");
          this.router.navigate(["/dashboard"]);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? err?.error?.message ?? "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629";
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 133, vars: 11, consts: [[1, "min-h-screen", "flex", "bg-[#FAF7F4]"], [1, "hidden", "lg:flex", "w-1/2", "bg-[#FDF0EA]", "items-center", "justify-center", "p-12", "relative", "overflow-hidden"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "left-0", "w-64", "opacity-20"], ["d", "M5 5 Q80 60 5 200 Q80 130 200 5Z", "fill", "#C8956C"], ["d", "M5 5 Q90 90 5 200", "stroke", "#B07855", "stroke-width", "1.5", "fill", "none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "bottom-0", "right-0", "w-64", "opacity-20"], ["d", "M195 195 Q120 140 195 0 Q120 70 0 195Z", "fill", "#D4856A"], ["d", "M195 195 Q110 110 195 0", "stroke", "#B07855", "stroke-width", "1.5", "fill", "none"], ["viewBox", "0 0 100 100", "fill", "none", 1, "absolute", "top-1/3", "right-8", "w-24", "opacity-15"], ["d", "M90 10 Q40 50 10 90 Q50 60 90 10Z", "fill", "#C8956C"], [1, "relative", "z-10", "max-w-sm", "text-center"], [1, "mb-8"], [1, "text-4xl", "font-bold", "text-[#7A4B2A]", "tracking-wide"], [1, "text-sm", "text-[#A07060]", "mt-2", "tracking-widest", "uppercase"], [1, "flex", "justify-center", "mb-8"], [1, "w-52", "h-52", "rounded-full", "bg-white/60", "flex", "items-center", "justify-center"], ["viewBox", "0 0 160 160", "fill", "none", 1, "w-40", "h-40"], ["cx", "80", "cy", "120", "rx", "38", "ry", "28", "fill", "#E8C4A0"], ["d", "M45 105 Q60 90 80 88 Q100 90 115 105 L118 135 Q80 145 42 135Z", "fill", "#C8956C"], ["cx", "80", "cy", "62", "r", "24", "fill", "#E8C4A0"], ["cx", "80", "cy", "58", "rx", "26", "ry", "20", "fill", "#3D2314"], ["cx", "80", "cy", "74", "rx", "28", "ry", "14", "fill", "#3D2314", "opacity", "0.85"], ["cx", "74", "cy", "64", "rx", "2.5", "ry", "3", "fill", "#3D2314"], ["cx", "86", "cy", "64", "rx", "2.5", "ry", "3", "fill", "#3D2314"], ["d", "M75 72 Q80 76 85 72", "stroke", "#B07855", "stroke-width", "1.5", "stroke-linecap", "round", "fill", "none"], ["cx", "58", "cy", "108", "rx", "10", "ry", "8", "fill", "#F5DDD0", "opacity", "0.8"], ["d", "M55 106 Q58 103 61 106 Q58 109 55 106Z", "fill", "#C8956C"], ["cx", "102", "cy", "108", "rx", "10", "ry", "8", "fill", "#F5DDD0", "opacity", "0.8"], ["x", "20", "y", "50", "font-size", "12", "fill", "#C8956C"], ["x", "128", "y", "46", "font-size", "10", "fill", "#D4856A"], ["x", "30", "y", "130", "font-size", "8", "fill", "#E8C4A0"], ["x", "118", "y", "138", "font-size", "7", "fill", "#C8956C"], [1, "text-xl", "font-bold", "text-[#3D2314]", "mb-3"], [1, "text-sm", "text-[#8B6355]", "leading-relaxed"], [1, "flex", "justify-center", "gap-6", "mt-6"], [1, "text-center"], [1, "text-lg", "font-bold", "text-[#7A4B2A]"], [1, "text-xs", "text-[#A07060]"], [1, "w-px", "bg-[#E8D5CB]"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "p-6", "relative"], [1, "lg:hidden", "fixed", "top-0", "left-0", "w-32", "opacity-10", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none"], [1, "w-full", "max-w-md"], [1, "lg:hidden", "text-center", "mb-8"], [1, "text-3xl", "font-bold", "text-[#C8956C]"], [1, "text-xs", "text-[#A07060]", "mt-1", "tracking-widest", "uppercase"], [1, "text-2xl", "font-bold", "text-[#3D2314]", "mb-1"], [1, "text-sm", "text-[#8B6355]", "mb-7"], [1, "space-y-3", "mb-6"], ["type", "button", 1, "w-full", "flex", "items-center", "justify-center", "gap-3", "border", "border-[#E8D5CB]", "rounded-xl", "py-3", "bg-white", "hover:bg-[#FDF7F4]", "hover:border-[#C8956C]", "transition", "text-sm", "font-medium", "text-[#3D2314]"], ["viewBox", "0 0 48 48", 1, "w-5", "h-5", "shrink-0"], ["fill", "#FFC107", "d", "M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-2.9-.4-4.5z"], ["fill", "#FF3D00", "d", "M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5c-7.7 0-14.3 4.4-17.7 10.2z"], ["fill", "#4CAF50", "d", "M24 45.5c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 36.7 26.9 37.5 24 37.5c-5.3 0-9.8-3.6-11.3-8.5l-6.6 5.1C9.5 40.9 16.2 45.5 24 45.5z"], ["fill", "#1976D2", "d", "M43.6 20.5H42V20H24v8h11.3c-1 2.8-3 5.2-5.6 6.7l6.6 5.4C40.7 36.9 44.5 31.6 44.5 25c0-1.5-.2-2.9-.4-4.5z"], ["fill", "#1877F2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "shrink-0"], ["d", "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79v8.44C19.61 23.07 24 18.07 24 12.07z"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "flex-1", "h-px", "bg-[#F0E6DE]"], [1, "text-xs", "text-[#A07060]", "px-1"], [1, "space-y-4"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3"], [1, "block", "text-sm", "font-semibold", "text-[#3D2314]", "mb-1.5"], [1, "relative"], ["type", "email", "placeholder", "nour.maher@example.com", 1, "w-full", "border", "border-[#E8D5CB]", "bg-white", "rounded-xl", "px-4", "py-3", "pr-11", "text-sm", "text-[#3D2314]", "placeholder-[#C4A898]", "focus:outline-none", "focus:ring-2", "focus:ring-[#C8956C]", "focus:border-transparent", "transition", 3, "ngModelChange", "ngModel"], [1, "absolute", "right-3.5", "top-1/2", "-translate-y-1/2", "pointer-events-none"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", 1, "w-4.5", "h-4.5", "text-[#C4A898]"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-sm", "font-semibold", "text-[#3D2314]"], ["href", "#", 1, "text-xs", "text-[#C8956C]", "hover:text-[#B07855]", "hover:underline", "transition"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "border", "border-[#E8D5CB]", "bg-white", "rounded-xl", "px-4", "py-3", "pr-11", "pl-11", "text-sm", "text-[#3D2314]", "placeholder-[#C4A898]", "focus:outline-none", "focus:ring-2", "focus:ring-[#C8956C]", "focus:border-transparent", "transition", 3, "ngModelChange", "type", "ngModel"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["type", "button", 1, "absolute", "left-3.5", "top-1/2", "-translate-y-1/2", "text-[#C4A898]", "hover:text-[#8B6355]", "transition", 3, "click"], ["class", "w-4.5 h-4.5", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", 4, "ngIf"], [1, "flex", "items-center", "gap-2.5"], ["type", "checkbox", "id", "remember", 1, "w-4", "h-4", "rounded", "border-[#E8D5CB]", "accent-[#C8956C]", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["for", "remember", 1, "text-sm", "text-[#8B6355]", "cursor-pointer", "select-none"], ["type", "button", 1, "w-full", "bg-[#C8956C]", "text-white", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "active:scale-[0.98]", "transition", "disabled:opacity-60", "disabled:cursor-not-allowed", "mt-2", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["class", "w-4 h-4 animate-spin", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "flex", "items-center", "gap-3", "my-6"], [1, "text-[#C8956C]", "text-xs"], [1, "text-center", "text-sm", "text-[#8B6355]"], ["routerLink", "/register", 1, "font-semibold", "text-[#C8956C]", "hover:text-[#B07855]", "hover:underline", "transition", "mr-1"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", 1, "w-4.5", "h-4.5"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["viewBox", "0 0 24 24", "fill", "none", 1, "w-4", "h-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "stroke-dasharray", "32", "stroke-dashoffset", "12"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "h1", 12);
      \u0275\u0275text(13, "\u273F Femora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 13);
      \u0275\u0275text(15, "\u062A\u0639\u0644\u0645 \xB7 \u0625\u0628\u062F\u0627\u0639 \xB7 \u0643\u0633\u0628");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 16);
      \u0275\u0275element(19, "ellipse", 17)(20, "path", 18)(21, "circle", 19)(22, "ellipse", 20)(23, "ellipse", 21)(24, "ellipse", 22)(25, "ellipse", 23)(26, "path", 24)(27, "ellipse", 25)(28, "path", 26)(29, "ellipse", 27);
      \u0275\u0275elementStart(30, "text", 28);
      \u0275\u0275text(31, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "text", 29);
      \u0275\u0275text(33, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "text", 30);
      \u0275\u0275text(35, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "text", 31);
      \u0275\u0275text(37, "\u2726");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "h2", 32);
      \u0275\u0275text(39, "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643! \u{1F338}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p", 33);
      \u0275\u0275text(41, " \u0645\u0646\u0635\u062A\u0643 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u064A\u062F\u0648\u064A\u0629 \u0648\u062A\u062D\u0648\u064A\u0644 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0625\u0644\u0649 \u062F\u062E\u0644 \u062D\u0642\u064A\u0642\u064A \u0645\u0646 \u0634\u063A\u0644\u0643 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 34)(43, "div", 35)(44, "p", 36);
      \u0275\u0275text(45, "+5K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 37);
      \u0275\u0275text(47, "\u0633\u064A\u062F\u0629 \u0645\u0635\u0631\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "div", 38);
      \u0275\u0275elementStart(49, "div", 35)(50, "p", 36);
      \u0275\u0275text(51, "200+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 37);
      \u0275\u0275text(53, "\u062F\u0648\u0631\u0629 \u062A\u062F\u0631\u064A\u0628\u064A\u0629");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "div", 38);
      \u0275\u0275elementStart(55, "div", 35)(56, "p", 36);
      \u0275\u0275text(57, "98%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 37);
      \u0275\u0275text(59, "\u0631\u0636\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0627\u062A");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "div", 39)(61, "div", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 41);
      \u0275\u0275element(63, "path", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "div", 42)(65, "div", 43)(66, "h1", 44);
      \u0275\u0275text(67, "\u273F Femora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 45);
      \u0275\u0275text(69, "\u062A\u0639\u0644\u0645 \xB7 \u0625\u0628\u062F\u0627\u0639 \xB7 \u0643\u0633\u0628");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "h2", 46);
      \u0275\u0275text(71, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 47);
      \u0275\u0275text(73, "\u0623\u0647\u0644\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643\u060C \u0646\u0648\u0631\u062A\u0650 Femora \u{1F49B}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 48)(75, "button", 49);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 50);
      \u0275\u0275element(77, "path", 51)(78, "path", 52)(79, "path", 53)(80, "path", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, " \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0628\u0640 Google ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "button", 49);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(83, "svg", 55);
      \u0275\u0275element(84, "path", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, " \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0628\u0640 Facebook ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(86, "div", 57);
      \u0275\u0275element(87, "div", 58);
      \u0275\u0275elementStart(88, "span", 59);
      \u0275\u0275text(89, "\u0623\u0648 \u0628\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "div", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 60);
      \u0275\u0275conditionalCreate(92, Login_Conditional_92_Template, 2, 1, "div", 61);
      \u0275\u0275elementStart(93, "div")(94, "label", 62);
      \u0275\u0275text(95, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 63)(97, "input", 64);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_97_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 65);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 66);
      \u0275\u0275element(100, "path", 67)(101, "polyline", 68);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(102, "div")(103, "div", 69)(104, "label", 70);
      \u0275\u0275text(105, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "a", 71);
      \u0275\u0275text(107, "\u0646\u0633\u064A\u062A\u0650 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 63)(109, "input", 72);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_109_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 65);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(111, "svg", 66);
      \u0275\u0275element(112, "rect", 73)(113, "path", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(114, "button", 75);
      \u0275\u0275listener("click", function Login_Template_button_click_114_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275template(115, Login__svg_svg_115_Template, 3, 0, "svg", 76)(116, Login__svg_svg_116_Template, 3, 0, "svg", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 77)(118, "input", 78);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_118_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "label", 79);
      \u0275\u0275text(120, "\u062A\u0630\u0643\u0631\u064A\u0646\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "button", 80);
      \u0275\u0275listener("click", function Login_Template_button_click_121_listener() {
        return ctx.login();
      });
      \u0275\u0275template(122, Login__svg_svg_122_Template, 2, 0, "svg", 81);
      \u0275\u0275text(123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 82);
      \u0275\u0275element(125, "div", 58);
      \u0275\u0275elementStart(126, "span", 83);
      \u0275\u0275text(127, "\u273F");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "div", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p", 84);
      \u0275\u0275text(130, " \u0644\u064A\u0633 \u0644\u062F\u064A\u0643\u0650 \u062D\u0633\u0627\u0628\u061F ");
      \u0275\u0275elementStart(131, "a", 85);
      \u0275\u0275text(132, " \u0623\u0646\u0634\u0626\u064A \u062D\u0633\u0627\u0628\u0643 \u0645\u062C\u0627\u0646\u0627\u064B ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(92);
      \u0275\u0275conditional(ctx.errorMessage ? 92 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(12);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-label", ctx.showPassword ? "\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" : "\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.rememberMe);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062F\u062E\u0648\u0644..." : "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644", " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="min-h-screen flex bg-[#FAF7F4]">

  <!-- Left Side: Illustration / Brand -->
  <div class="hidden lg:flex w-1/2 bg-[#FDF0EA] items-center justify-center p-12 relative overflow-hidden">

    <!-- Decorative SVG leaves -->
    <svg class="absolute top-0 left-0 w-64 opacity-20" viewBox="0 0 200 200" fill="none">
      <path d="M5 5 Q80 60 5 200 Q80 130 200 5Z" fill="#C8956C"/>
      <path d="M5 5 Q90 90 5 200" stroke="#B07855" stroke-width="1.5" fill="none"/>
    </svg>
    <svg class="absolute bottom-0 right-0 w-64 opacity-20" viewBox="0 0 200 200" fill="none">
      <path d="M195 195 Q120 140 195 0 Q120 70 0 195Z" fill="#D4856A"/>
      <path d="M195 195 Q110 110 195 0" stroke="#B07855" stroke-width="1.5" fill="none"/>
    </svg>
    <svg class="absolute top-1/3 right-8 w-24 opacity-15" viewBox="0 0 100 100" fill="none">
      <path d="M90 10 Q40 50 10 90 Q50 60 90 10Z" fill="#C8956C"/>
    </svg>

    <!-- Brand content -->
    <div class="relative z-10 max-w-sm text-center">

      <!-- Logo -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-[#7A4B2A] tracking-wide">\u273F Femora</h1>
        <p class="text-sm text-[#A07060] mt-2 tracking-widest uppercase">\u062A\u0639\u0644\u0645 \xB7 \u0625\u0628\u062F\u0627\u0639 \xB7 \u0643\u0633\u0628</p>
      </div>

      <!-- Illustration -->
      <div class="flex justify-center mb-8">
        <div class="w-52 h-52 rounded-full bg-white/60 flex items-center justify-center">
          <svg viewBox="0 0 160 160" fill="none" class="w-40 h-40">
            <!-- Body -->
            <ellipse cx="80" cy="120" rx="38" ry="28" fill="#E8C4A0"/>
            <!-- Dress/top -->
            <path d="M45 105 Q60 90 80 88 Q100 90 115 105 L118 135 Q80 145 42 135Z" fill="#C8956C"/>
            <!-- Head -->
            <circle cx="80" cy="62" r="24" fill="#E8C4A0"/>
            <!-- Hair / Hijab -->
            <ellipse cx="80" cy="58" rx="26" ry="20" fill="#3D2314"/>
            <ellipse cx="80" cy="74" rx="28" ry="14" fill="#3D2314" opacity="0.85"/>
            <!-- Face details -->
            <ellipse cx="74" cy="64" rx="2.5" ry="3" fill="#3D2314"/>
            <ellipse cx="86" cy="64" rx="2.5" ry="3" fill="#3D2314"/>
            <path d="M75 72 Q80 76 85 72" stroke="#B07855" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <!-- Craft in hands (yarn / crochet) -->
            <ellipse cx="58" cy="108" rx="10" ry="8" fill="#F5DDD0" opacity="0.8"/>
            <path d="M55 106 Q58 103 61 106 Q58 109 55 106Z" fill="#C8956C"/>
            <ellipse cx="102" cy="108" rx="10" ry="8" fill="#F5DDD0" opacity="0.8"/>
            <!-- Sparkles -->
            <text x="20" y="50" font-size="12" fill="#C8956C">\u2726</text>
            <text x="128" y="46" font-size="10" fill="#D4856A">\u2726</text>
            <text x="30" y="130" font-size="8" fill="#E8C4A0">\u2726</text>
            <text x="118" y="138" font-size="7" fill="#C8956C">\u2726</text>
          </svg>
        </div>
      </div>

      <h2 class="text-xl font-bold text-[#3D2314] mb-3">\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643! \u{1F338}</h2>
      <p class="text-sm text-[#8B6355] leading-relaxed">
        \u0645\u0646\u0635\u062A\u0643 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u062D\u0631\u0641 \u0627\u0644\u064A\u062F\u0648\u064A\u0629 \u0648\u062A\u062D\u0648\u064A\u0644 \u0645\u0647\u0627\u0631\u0627\u062A\u0643 \u0625\u0644\u0649 \u062F\u062E\u0644 \u062D\u0642\u064A\u0642\u064A \u0645\u0646 \u0634\u063A\u0644\u0643
      </p>

      <!-- Small stats -->
      <div class="flex justify-center gap-6 mt-6">
        <div class="text-center">
          <p class="text-lg font-bold text-[#7A4B2A]">+5K</p>
          <p class="text-xs text-[#A07060]">\u0633\u064A\u062F\u0629 \u0645\u0635\u0631\u064A\u0629</p>
        </div>
        <div class="w-px bg-[#E8D5CB]"></div>
        <div class="text-center">
          <p class="text-lg font-bold text-[#7A4B2A]">200+</p>
          <p class="text-xs text-[#A07060]">\u062F\u0648\u0631\u0629 \u062A\u062F\u0631\u064A\u0628\u064A\u0629</p>
        </div>
        <div class="w-px bg-[#E8D5CB]"></div>
        <div class="text-center">
          <p class="text-lg font-bold text-[#7A4B2A]">98%</p>
          <p class="text-xs text-[#A07060]">\u0631\u0636\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0627\u062A</p>
        </div>
      </div>

    </div>
  </div>

  <!-- Right Side: Form -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-6 relative">

    <!-- Small leaf decoration (mobile) -->
    <div class="lg:hidden fixed top-0 left-0 w-32 opacity-10 pointer-events-none">
      <svg viewBox="0 0 200 200" fill="none"><path d="M5 5 Q80 60 5 200 Q80 130 200 5Z" fill="#C8956C"/></svg>
    </div>

    <div class="w-full max-w-md">

      <!-- Mobile logo -->
      <div class="lg:hidden text-center mb-8">
        <h1 class="text-3xl font-bold text-[#C8956C]">\u273F Femora</h1>
        <p class="text-xs text-[#A07060] mt-1 tracking-widest uppercase">\u062A\u0639\u0644\u0645 \xB7 \u0625\u0628\u062F\u0627\u0639 \xB7 \u0643\u0633\u0628</p>
      </div>

      <h2 class="text-2xl font-bold text-[#3D2314] mb-1">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</h2>
      <p class="text-sm text-[#8B6355] mb-7">\u0623\u0647\u0644\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643\u060C \u0646\u0648\u0631\u062A\u0650 Femora \u{1F49B}</p>

      <!-- Social Login -->
      <div class="space-y-3 mb-6">

        <button
          type="button"
          class="w-full flex items-center justify-center gap-3 border border-[#E8D5CB] rounded-xl py-3 bg-white hover:bg-[#FDF7F4] hover:border-[#C8956C] transition text-sm font-medium text-[#3D2314]"
        >
          <svg class="w-5 h-5 shrink-0" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-2.9-.4-4.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5c-7.7 0-14.3 4.4-17.7 10.2z"/>
            <path fill="#4CAF50" d="M24 45.5c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 36.7 26.9 37.5 24 37.5c-5.3 0-9.8-3.6-11.3-8.5l-6.6 5.1C9.5 40.9 16.2 45.5 24 45.5z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-3 5.2-5.6 6.7l6.6 5.4C40.7 36.9 44.5 31.6 44.5 25c0-1.5-.2-2.9-.4-4.5z"/>
          </svg>
          \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0628\u0640 Google
        </button>

        <button
          type="button"
          class="w-full flex items-center justify-center gap-3 border border-[#E8D5CB] rounded-xl py-3 bg-white hover:bg-[#FDF7F4] hover:border-[#C8956C] transition text-sm font-medium text-[#3D2314]"
        >
          <svg class="w-5 h-5 shrink-0" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79v8.44C19.61 23.07 24 18.07 24 12.07z"/>
          </svg>
          \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0628\u0640 Facebook
        </button>

      </div>

      <!-- Divider -->
      <div class="flex items-center gap-3 mb-6">
        <div class="flex-1 h-px bg-[#F0E6DE]"></div>
        <span class="text-xs text-[#A07060] px-1">\u0623\u0648 \u0628\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</span>
        <div class="flex-1 h-px bg-[#F0E6DE]"></div>
      </div>

      <!-- Form -->
      <div class="space-y-4">

        @if (errorMessage) {
          <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {{ errorMessage }}
          </div>
        }

        <!-- Email -->
        <div>
          <label class="block text-sm font-semibold text-[#3D2314] mb-1.5">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</label>
          <div class="relative">
            <input
              type="email"
              [(ngModel)]="email"
              placeholder="nour.maher@example.com"
              class="w-full border border-[#E8D5CB] bg-white rounded-xl px-4 py-3 pr-11 text-sm text-[#3D2314] placeholder-[#C4A898] focus:outline-none focus:ring-2 focus:ring-[#C8956C] focus:border-transparent transition"
            />
            <div class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg class="w-4.5 h-4.5 text-[#C4A898]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="text-sm font-semibold text-[#3D2314]">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label>
            <a href="#" class="text-xs text-[#C8956C] hover:text-[#B07855] hover:underline transition">\u0646\u0633\u064A\u062A\u0650 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F</a>
          </div>
          <div class="relative">
            <input
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="password"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              class="w-full border border-[#E8D5CB] bg-white rounded-xl px-4 py-3 pr-11 pl-11 text-sm text-[#3D2314] placeholder-[#C4A898] focus:outline-none focus:ring-2 focus:ring-[#C8956C] focus:border-transparent transition"
            />
            <!-- Lock icon left -->
            <div class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg class="w-4.5 h-4.5 text-[#C4A898]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <!-- Show/hide toggle -->
            <button
              type="button"
              (click)="togglePassword()"
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C4A898] hover:text-[#8B6355] transition"
              [attr.aria-label]="showPassword ? '\u0625\u062E\u0641\u0627\u0621 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631' : '\u0625\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631'"
            >
              <!-- Eye open -->
              <svg *ngIf="!showPassword" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <!-- Eye off -->
              <svg *ngIf="showPassword" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Remember me -->
        <div class="flex items-center gap-2.5">
          <input
            type="checkbox"
            id="remember"
            [(ngModel)]="rememberMe"
            class="w-4 h-4 rounded border-[#E8D5CB] accent-[#C8956C] cursor-pointer"
          />
          <label for="remember" class="text-sm text-[#8B6355] cursor-pointer select-none">\u062A\u0630\u0643\u0631\u064A\u0646\u064A</label>
        </div>

        <!-- Submit -->
        <button
          type="button"
          (click)="login()"
          [disabled]="isLoading"
          class="w-full bg-[#C8956C] text-white py-3.5 rounded-xl font-semibold hover:bg-[#B07855] active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed mt-2 flex items-center justify-center gap-2"
        >
          <svg *ngIf="isLoading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="32" stroke-dashoffset="12"/>
          </svg>
          {{ isLoading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062F\u062E\u0648\u0644...' : '\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644' }}
        </button>

      </div>

      <!-- Divider -->
      <div class="flex items-center gap-3 my-6">
        <div class="flex-1 h-px bg-[#F0E6DE]"></div>
        <span class="text-[#C8956C] text-xs">\u273F</span>
        <div class="flex-1 h-px bg-[#F0E6DE]"></div>
      </div>

      <!-- Sign up link -->
      <p class="text-center text-sm text-[#8B6355]">
        \u0644\u064A\u0633 \u0644\u062F\u064A\u0643\u0650 \u062D\u0633\u0627\u0628\u061F
        <a routerLink="/register" class="font-semibold text-[#C8956C] hover:text-[#B07855] hover:underline transition mr-1">
          \u0623\u0646\u0634\u0626\u064A \u062D\u0633\u0627\u0628\u0643 \u0645\u062C\u0627\u0646\u0627\u064B
        </a>
      </p>

    </div>
  </div>

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/features/auth/pages/login/login.ts", lineNumber: 14 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-XQV7MKK2.mjs.map
