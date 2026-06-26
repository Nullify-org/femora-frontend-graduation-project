import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/register/register.ts
function Register_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function Register_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "circle", 30);
    \u0275\u0275elementEnd();
  }
}
var Register = class _Register {
  auth = inject(AuthService);
  router = inject(Router);
  notifications = inject(NotificationService);
  firstName = "";
  lastName = "";
  email = "";
  password = "";
  confirmPassword = "";
  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  errorMessage = "";
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  register() {
    this.errorMessage = "";
    if (!this.firstName || !this.lastName || !this.email || !this.password) {
      this.errorMessage = "\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644";
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "\u0643\u0644\u0645\u062A\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u062A\u064A\u0646";
      return;
    }
    if (this.password.length < 8) {
      this.errorMessage = "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 8 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644";
      return;
    }
    this.isLoading = true;
    this.auth.register({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.auth.setPendingEmail(this.email);
        this.notifications.success("\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628\u0643 \u0628\u0646\u062C\u0627\u062D!");
        this.router.navigate(["/verify-email"]);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? err?.error?.message ?? "\u062A\u0639\u0630\u0651\u0631 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628";
      }
    });
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 58, vars: 13, consts: [[1, "min-h-screen", "flex", "bg-cream-light"], [1, "hidden", "lg:flex", "w-1/2", "bg-cream", "items-center", "justify-center", "p-12", "relative", "overflow-hidden"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "left-0", "w-64", "opacity-20"], ["d", "M5 5 Q80 60 5 200 Q80 130 200 5Z", "fill", "#C96A3A"], [1, "relative", "z-10", "max-w-sm", "text-center"], [1, "text-4xl", "font-bold", "text-terracotta", "font-display", "tracking-wide"], [1, "text-sm", "text-terracotta-dark", "mt-2", "tracking-widest", "uppercase"], [1, "text-xl", "font-bold", "text-navy", "mb-3", "mt-10", "font-display"], [1, "text-sm", "text-terracotta-dark", "leading-relaxed"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "p-6"], [1, "w-full", "max-w-md"], [1, "lg:hidden", "text-center", "mb-8"], [1, "text-3xl", "font-bold", "text-terracotta", "font-display"], [1, "text-2xl", "font-bold", "text-navy", "mb-1", "font-display"], [1, "text-sm", "text-terracotta-dark", "mb-7"], [1, "space-y-4", 3, "ngSubmit"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3"], [1, "grid", "grid-cols-2", "gap-3"], [1, "block", "text-sm", "font-semibold", "text-navy", "mb-1.5"], ["type", "text", "name", "firstName", "placeholder", "\u0646\u0648\u0631", "dir", "auto", 1, "w-full", "border", "border-blush", "bg-white", "rounded-xl", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "\u0645\u0627\u0647\u0631", "dir", "auto", 1, "w-full", "border", "border-blush", "bg-white", "rounded-xl", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "nour.maher@example.com", "dir", "auto", 1, "w-full", "border", "border-blush", "bg-white", "rounded-xl", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta", 3, "ngModelChange", "ngModel"], [1, "relative"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "border", "border-blush", "bg-white", "rounded-xl", "px-4", "py-3", "pl-11", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "left-3.5", "top-1/2", "-translate-y-1/2", "text-terracotta-dark", 3, "click"], ["name", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "border", "border-blush", "bg-white", "rounded-xl", "px-4", "py-3", "pl-11", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta", 3, "ngModelChange", "type", "ngModel"], ["type", "submit", 1, "w-full", "bg-terracotta", "text-white", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "w-4", "h-4", "animate-spin"], [1, "text-center", "text-sm", "text-terracotta-dark", "mt-6"], ["routerLink", "/login", 1, "font-semibold", "text-terracotta", "hover:underline", "mr-1"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "stroke-dasharray", "32", "stroke-dashoffset", "12"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "\u273F Femora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "\u062A\u0639\u0644\u0651\u0645\u064A \xB7 \u0627\u0635\u0646\u0639\u064A \xB7 \u0628\u064A\u0639\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h2", 7);
      \u0275\u0275text(10, "\u0627\u0628\u062F\u0626\u064A \u0631\u062D\u0644\u062A\u0643 \u0627\u0644\u064A\u0648\u0645 \u{1F338}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, " \u0627\u0646\u0636\u0645\u064A \u0644\u0622\u0644\u0627\u0641 \u0627\u0644\u0633\u064A\u062F\u0627\u062A \u0627\u0644\u0645\u0635\u0631\u064A\u0627\u062A \u0627\u0644\u0644\u0627\u062A\u064A \u064A\u062D\u0648\u0651\u0644\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0647\u0646 \u0625\u0644\u0649 \u062F\u062E\u0644 \u062D\u0642\u064A\u0642\u064A ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h1", 12);
      \u0275\u0275text(17, "\u273F Femora");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "h2", 13);
      \u0275\u0275text(19, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 14);
      \u0275\u0275text(21, "\u0644\u0646\u0628\u062F\u0623 \u0628\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646\u0643");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "form", 15);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_22_listener() {
        return ctx.register();
      });
      \u0275\u0275conditionalCreate(23, Register_Conditional_23_Template, 2, 1, "div", 16);
      \u0275\u0275elementStart(24, "div", 17)(25, "div")(26, "label", 18);
      \u0275\u0275text(27, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.firstName, $event) || (ctx.firstName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div")(30, "label", 18);
      \u0275\u0275text(31, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.lastName, $event) || (ctx.lastName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div")(34, "label", 18);
      \u0275\u0275text(35, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div")(38, "label", 18);
      \u0275\u0275text(39, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 22)(41, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 24);
      \u0275\u0275listener("click", function Register_Template_button_click_42_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div")(45, "label", 18);
      \u0275\u0275text(46, "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 22)(48, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 24);
      \u0275\u0275listener("click", function Register_Template_button_click_49_listener() {
        return ctx.toggleConfirmPassword();
      });
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "button", 26);
      \u0275\u0275conditionalCreate(52, Register_Conditional_52_Template, 2, 0, ":svg:svg", 27);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "p", 28);
      \u0275\u0275text(55, " \u0644\u062F\u064A\u0643\u0650 \u062D\u0633\u0627\u0628\u061F ");
      \u0275\u0275elementStart(56, "a", 29);
      \u0275\u0275text(57, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275conditional(ctx.errorMessage ? 23 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.firstName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "\u{1F648}" : "\u{1F441}", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showConfirmPassword ? "\u{1F648}" : "\u{1F441}", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0646\u0634\u0627\u0621..." : "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628", " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="min-h-screen flex bg-cream-light">

  <!-- Left Side -->
  <div class="hidden lg:flex w-1/2 bg-cream items-center justify-center p-12 relative overflow-hidden">
    <svg class="absolute top-0 left-0 w-64 opacity-20" viewBox="0 0 200 200" fill="none">
      <path d="M5 5 Q80 60 5 200 Q80 130 200 5Z" fill="#C96A3A"/>
    </svg>
    <div class="relative z-10 max-w-sm text-center">
      <h1 class="text-4xl font-bold text-terracotta font-display tracking-wide">\u273F Femora</h1>
      <p class="text-sm text-terracotta-dark mt-2 tracking-widest uppercase">\u062A\u0639\u0644\u0651\u0645\u064A \xB7 \u0627\u0635\u0646\u0639\u064A \xB7 \u0628\u064A\u0639\u064A</p>
      <h2 class="text-xl font-bold text-navy mb-3 mt-10 font-display">\u0627\u0628\u062F\u0626\u064A \u0631\u062D\u0644\u062A\u0643 \u0627\u0644\u064A\u0648\u0645 \u{1F338}</h2>
      <p class="text-sm text-terracotta-dark leading-relaxed">
        \u0627\u0646\u0636\u0645\u064A \u0644\u0622\u0644\u0627\u0641 \u0627\u0644\u0633\u064A\u062F\u0627\u062A \u0627\u0644\u0645\u0635\u0631\u064A\u0627\u062A \u0627\u0644\u0644\u0627\u062A\u064A \u064A\u062D\u0648\u0651\u0644\u0646 \u0645\u0647\u0627\u0631\u0627\u062A\u0647\u0646 \u0625\u0644\u0649 \u062F\u062E\u0644 \u062D\u0642\u064A\u0642\u064A
      </p>
    </div>
  </div>

  <!-- Right Side -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-6">
    <div class="w-full max-w-md">
      <div class="lg:hidden text-center mb-8">
        <h1 class="text-3xl font-bold text-terracotta font-display">\u273F Femora</h1>
      </div>

      <h2 class="text-2xl font-bold text-navy mb-1 font-display">\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628</h2>
      <p class="text-sm text-terracotta-dark mb-7">\u0644\u0646\u0628\u062F\u0623 \u0628\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646\u0643</p>

      <form class="space-y-4" (ngSubmit)="register()">
        @if (errorMessage) {
          <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {{ errorMessage }}
          </div>
        }

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-navy mb-1.5">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644</label>
            <input
              type="text"
              [(ngModel)]="firstName"
              name="firstName"
              placeholder="\u0646\u0648\u0631"
              dir="auto"
              class="w-full border border-blush bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold text-navy mb-1.5">\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629</label>
            <input
              type="text"
              [(ngModel)]="lastName"
              name="lastName"
              placeholder="\u0645\u0627\u0647\u0631"
              dir="auto"
              class="w-full border border-blush bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-navy mb-1.5">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A</label>
          <input
            type="email"
            [(ngModel)]="email"
            name="email"
            placeholder="nour.maher@example.com"
            dir="auto"
            class="w-full border border-blush bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-navy mb-1.5">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label>
          <div class="relative">
            <input
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="password"
              name="password"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              class="w-full border border-blush bg-white rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <button
              type="button"
              (click)="togglePassword()"
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-terracotta-dark"
            >
              {{ showPassword ? '\u{1F648}' : '\u{1F441}' }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-navy mb-1.5">\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label>
          <div class="relative">
            <input
              [type]="showConfirmPassword ? 'text' : 'password'"
              [(ngModel)]="confirmPassword"
              name="confirmPassword"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              class="w-full border border-blush bg-white rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <button
              type="button"
              (click)="toggleConfirmPassword()"
              class="absolute left-3.5 top-1/2 -translate-y-1/2 text-terracotta-dark"
            >
              {{ showConfirmPassword ? '\u{1F648}' : '\u{1F441}' }}
            </button>
          </div>
        </div>

        <button
          type="submit"
          [disabled]="isLoading"
          class="w-full bg-terracotta text-white py-3.5 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-60 flex items-center justify-center gap-2"
        >
          @if (isLoading) {
            <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="32" stroke-dashoffset="12"/>
            </svg>
          }
          {{ isLoading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0646\u0634\u0627\u0621...' : '\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628' }}
        </button>
      </form>

      <p class="text-center text-sm text-terracotta-dark mt-6">
        \u0644\u062F\u064A\u0643\u0650 \u062D\u0633\u0627\u0628\u061F
        <a routerLink="/login" class="font-semibold text-terracotta hover:underline mr-1">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>
      </p>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/features/auth/pages/register/register.ts", lineNumber: 14 });
})();
export {
  Register
};
//# sourceMappingURL=chunk-JK7F2NIA.mjs.map
