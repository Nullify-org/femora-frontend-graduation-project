import './polyfills.server.mjs';
import {
  StorageService
} from "./chunk-JJI23ZKM.mjs";
import {
  CommonModule,
  Component,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/choose-role/choose-role.ts
function ChooseRole_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 34);
    \u0275\u0275elementEnd()();
  }
}
function ChooseRole_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 34);
    \u0275\u0275elementEnd()();
  }
}
function ChooseRole_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 34);
    \u0275\u0275elementEnd()();
  }
}
var ChooseRole = class _ChooseRole {
  router = inject(Router);
  storage = inject(StorageService);
  selectedRoles = [];
  toggleRole(role) {
    const idx = this.selectedRoles.indexOf(role);
    if (idx === -1) {
      this.selectedRoles.push(role);
    } else {
      this.selectedRoles.splice(idx, 1);
    }
  }
  hasRole(role) {
    return this.selectedRoles.includes(role);
  }
  next() {
    if (this.selectedRoles.length === 0)
      return;
    this.storage.set("femora_onboarding_roles", this.selectedRoles);
    this.router.navigate(["/onboarding/welcome"]);
  }
  static \u0275fac = function ChooseRole_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChooseRole)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChooseRole, selectors: [["app-choose-role"]], decls: 59, vars: 22, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-[#FAF7F4]", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "top-0", "right-0", "w-56", "opacity-15"], ["d", "M180 10 Q80 80 10 190 Q100 110 180 10Z", "fill", "#C8956C"], ["viewBox", "0 0 200 200", "fill", "none", 1, "absolute", "bottom-0", "left-0", "w-56", "opacity-15"], ["d", "M10 190 Q110 110 190 10 Q100 90 10 190Z", "fill", "#D4856A"], [1, "bg-white", "rounded-3xl", "shadow-sm", "border", "border-[#F0E6DE]", "p-10", "w-full", "max-w-lg", "relative"], [1, "text-center", "mb-2"], [1, "text-2xl", "font-bold", "text-[#C8956C]"], [1, "flex", "items-center", "justify-center", "gap-1.5", "mb-8", "mt-4"], [1, "w-8", "h-1.5", "rounded-full", "bg-[#C8956C]"], [1, "w-2", "h-2", "rounded-full", "bg-[#E8D5CB]"], [1, "text-2xl", "font-bold", "text-[#3D2314]", "text-center", "mb-2"], [1, "text-sm", "text-[#8B6355]", "text-center", "mb-8"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4", "mb-8"], ["type", "button", 1, "relative", "flex", "flex-col", "items-center", "gap-3", "p-5", "rounded-2xl", "border-2", "transition", "hover:border-[#C8956C]", "hover:bg-[#FDF7F4]", "group", 3, "click"], [1, "w-16", "h-16", "rounded-full", "bg-[#FDF0EA]", "flex", "items-center", "justify-center", "group-hover:bg-[#F5DDD0]", "transition"], ["viewBox", "0 0 36 36", "fill", "none", 1, "w-9", "h-9"], ["cx", "18", "cy", "10", "r", "5", "fill", "#C8956C"], ["d", "M8 28c0-5.5 4.5-10 10-10s10 4.5 10 10", "stroke", "#C8956C", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M13 20l3 4 6-6", "stroke", "#D4856A", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-sm", "font-semibold", "text-[#3D2314]"], [1, "text-xs", "text-[#8B6355]", "text-center", "leading-relaxed"], [1, "absolute", "top-2", "right-2", "w-5", "h-5", "bg-[#C8956C]", "rounded-full", "flex", "items-center", "justify-center"], ["cx", "18", "cy", "9", "r", "4.5", "fill", "#C8956C"], ["x", "10", "y", "20", "width", "16", "height", "10", "rx", "3", "fill", "#E8C4A0"], ["d", "M18 14v6M14 17h8", "stroke", "#C8956C", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M8 10h20l-2 14H10L8 10Z", "fill", "#E8C4A0", "stroke", "#C8956C", "stroke-width", "2"], ["cx", "14", "cy", "28", "r", "2", "fill", "#C8956C"], ["cx", "24", "cy", "28", "r", "2", "fill", "#C8956C"], ["d", "M12 14h12M12 18h8", "stroke", "#C8956C", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "w-full", "bg-[#C8956C]", "text-white", "py-3", "rounded-xl", "font-semibold", "hover:bg-[#B07855]", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", "mb-3", 3, "click", "disabled"], ["routerLink", "/onboarding/goal", 1, "w-full", "text-sm", "text-[#8B6355]", "text-center", "hover:text-[#C8956C]", "transition"], ["fill", "white", "viewBox", "0 0 12 12", 1, "w-3", "h-3"], ["d", "M2 6l3 3 5-5", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"]], template: function ChooseRole_Template(rf, ctx) {
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
      \u0275\u0275element(11, "span", 10)(12, "span", 10)(13, "span", 10)(14, "span", 10)(15, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h2", 12);
      \u0275\u0275text(17, "\u0627\u062E\u062A\u0631 \u062F\u0648\u0631\u0643");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 13);
      \u0275\u0275text(19, " \u064A\u0645\u0643\u0646\u0643 \u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0631 \u0648\u0627\u062D\u062F ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "button", 15);
      \u0275\u0275listener("click", function ChooseRole_Template_button_click_21_listener() {
        return ctx.toggleRole("trainee");
      });
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 17);
      \u0275\u0275element(24, "circle", 18)(25, "path", 19)(26, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span", 21);
      \u0275\u0275text(28, "\u0645\u062A\u062F\u0631\u0628\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 22);
      \u0275\u0275text(30, "\u062A\u0639\u0644\u0645\u064A \u0645\u0647\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, ChooseRole_Conditional_31_Template, 3, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 15);
      \u0275\u0275listener("click", function ChooseRole_Template_button_click_32_listener() {
        return ctx.toggleRole("instructor");
      });
      \u0275\u0275elementStart(33, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 17);
      \u0275\u0275element(35, "circle", 24)(36, "rect", 25)(37, "path", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "span", 21);
      \u0275\u0275text(39, "\u0645\u062F\u0631\u0628\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 22);
      \u0275\u0275text(41, "\u0634\u0627\u0631\u0643\u064A \u062E\u0628\u0631\u062A\u0643 \u0648\u062F\u062E\u0644\u0627\u064B \u062B\u0627\u0628\u062A\u0627\u064B");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, ChooseRole_Conditional_42_Template, 3, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 15);
      \u0275\u0275listener("click", function ChooseRole_Template_button_click_43_listener() {
        return ctx.toggleRole("seller");
      });
      \u0275\u0275elementStart(44, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 17);
      \u0275\u0275element(46, "path", 27)(47, "circle", 28)(48, "circle", 29)(49, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "span", 21);
      \u0275\u0275text(51, "\u0628\u0627\u0626\u0639\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 22);
      \u0275\u0275text(53, "\u0628\u064A\u0639\u064A \u0645\u0646\u062A\u062C\u0627\u062A\u0643 \u0648\u0627\u0643\u0633\u0628\u064A \u062F\u062E\u0644\u0627\u064B");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(54, ChooseRole_Conditional_54_Template, 3, 0, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "button", 31);
      \u0275\u0275listener("click", function ChooseRole_Template_button_click_55_listener() {
        return ctx.next();
      });
      \u0275\u0275text(56, " \u0627\u0644\u062A\u0627\u0644\u064A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 32);
      \u0275\u0275text(58, " \u0631\u062C\u0648\u0639 ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275classProp("border-[#C8956C]", ctx.hasRole("trainee"))("bg-[#FDF0EA]", ctx.hasRole("trainee"))("border-[#E8D5CB]", !ctx.hasRole("trainee"));
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.hasRole("trainee") ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("border-[#C8956C]", ctx.hasRole("instructor"))("bg-[#FDF0EA]", ctx.hasRole("instructor"))("border-[#E8D5CB]", !ctx.hasRole("instructor"));
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.hasRole("instructor") ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("border-[#C8956C]", ctx.hasRole("seller"))("bg-[#FDF0EA]", ctx.hasRole("seller"))("border-[#E8D5CB]", !ctx.hasRole("seller"));
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.hasRole("seller") ? 54 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.selectedRoles.length === 0);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChooseRole, [{
    type: Component,
    args: [{ selector: "app-choose-role", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="min-h-screen flex items-center justify-center bg-[#FAF7F4] px-4">

  <!-- Decorative background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <svg class="absolute top-0 right-0 w-56 opacity-15" viewBox="0 0 200 200" fill="none">
      <path d="M180 10 Q80 80 10 190 Q100 110 180 10Z" fill="#C8956C"/>
    </svg>
    <svg class="absolute bottom-0 left-0 w-56 opacity-15" viewBox="0 0 200 200" fill="none">
      <path d="M10 190 Q110 110 190 10 Q100 90 10 190Z" fill="#D4856A"/>
    </svg>
  </div>

  <div class="bg-white rounded-3xl shadow-sm border border-[#F0E6DE] p-10 w-full max-w-lg relative">

    <!-- Logo -->
    <div class="text-center mb-2">
      <span class="text-2xl font-bold text-[#C8956C]">\u273F Femora</span>
    </div>

    <!-- Progress steps -->
    <div class="flex items-center justify-center gap-1.5 mb-8 mt-4">
      <span class="w-8 h-1.5 rounded-full bg-[#C8956C]"></span>
      <span class="w-8 h-1.5 rounded-full bg-[#C8956C]"></span>
      <span class="w-8 h-1.5 rounded-full bg-[#C8956C]"></span>
      <span class="w-8 h-1.5 rounded-full bg-[#C8956C]"></span>
      <span class="w-2 h-2 rounded-full bg-[#E8D5CB]"></span>
    </div>

    <h2 class="text-2xl font-bold text-[#3D2314] text-center mb-2">\u0627\u062E\u062A\u0631 \u062F\u0648\u0631\u0643</h2>
    <p class="text-sm text-[#8B6355] text-center mb-8">
      \u064A\u0645\u0643\u0646\u0643 \u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0631 \u0648\u0627\u062D\u062F
    </p>

    <!-- Role cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

      <!-- Trainee -->
      <button
        type="button"
        (click)="toggleRole('trainee')"
        [class.border-[#C8956C]]="hasRole('trainee')"
        [class.bg-[#FDF0EA]]="hasRole('trainee')"
        [class.border-[#E8D5CB]]="!hasRole('trainee')"
        class="relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition hover:border-[#C8956C] hover:bg-[#FDF7F4] group"
      >
        <div class="w-16 h-16 rounded-full bg-[#FDF0EA] flex items-center justify-center group-hover:bg-[#F5DDD0] transition">
          <svg class="w-9 h-9" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="10" r="5" fill="#C8956C"/>
            <path d="M8 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#C8956C" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M13 20l3 4 6-6" stroke="#D4856A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="text-sm font-semibold text-[#3D2314]">\u0645\u062A\u062F\u0631\u0628\u0629</span>
        <span class="text-xs text-[#8B6355] text-center leading-relaxed">\u062A\u0639\u0644\u0645\u064A \u0645\u0647\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629</span>
        @if (hasRole('trainee')) {
          <div class="absolute top-2 right-2 w-5 h-5 bg-[#C8956C] rounded-full flex items-center justify-center">
            <svg class="w-3 h-3" fill="white" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
        }
      </button>

      <!-- Instructor -->
      <button
        type="button"
        (click)="toggleRole('instructor')"
        [class.border-[#C8956C]]="hasRole('instructor')"
        [class.bg-[#FDF0EA]]="hasRole('instructor')"
        [class.border-[#E8D5CB]]="!hasRole('instructor')"
        class="relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition hover:border-[#C8956C] hover:bg-[#FDF7F4] group"
      >
        <div class="w-16 h-16 rounded-full bg-[#FDF0EA] flex items-center justify-center group-hover:bg-[#F5DDD0] transition">
          <svg class="w-9 h-9" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="9" r="4.5" fill="#C8956C"/>
            <rect x="10" y="20" width="16" height="10" rx="3" fill="#E8C4A0"/>
            <path d="M18 14v6M14 17h8" stroke="#C8956C" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="text-sm font-semibold text-[#3D2314]">\u0645\u062F\u0631\u0628\u0629</span>
        <span class="text-xs text-[#8B6355] text-center leading-relaxed">\u0634\u0627\u0631\u0643\u064A \u062E\u0628\u0631\u062A\u0643 \u0648\u062F\u062E\u0644\u0627\u064B \u062B\u0627\u0628\u062A\u0627\u064B</span>
        @if (hasRole('instructor')) {
          <div class="absolute top-2 right-2 w-5 h-5 bg-[#C8956C] rounded-full flex items-center justify-center">
            <svg class="w-3 h-3" fill="white" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
        }
      </button>

      <!-- Seller -->
      <button
        type="button"
        (click)="toggleRole('seller')"
        [class.border-[#C8956C]]="hasRole('seller')"
        [class.bg-[#FDF0EA]]="hasRole('seller')"
        [class.border-[#E8D5CB]]="!hasRole('seller')"
        class="relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition hover:border-[#C8956C] hover:bg-[#FDF7F4] group"
      >
        <div class="w-16 h-16 rounded-full bg-[#FDF0EA] flex items-center justify-center group-hover:bg-[#F5DDD0] transition">
          <svg class="w-9 h-9" viewBox="0 0 36 36" fill="none">
            <path d="M8 10h20l-2 14H10L8 10Z" fill="#E8C4A0" stroke="#C8956C" stroke-width="2"/>
            <circle cx="14" cy="28" r="2" fill="#C8956C"/>
            <circle cx="24" cy="28" r="2" fill="#C8956C"/>
            <path d="M12 14h12M12 18h8" stroke="#C8956C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="text-sm font-semibold text-[#3D2314]">\u0628\u0627\u0626\u0639\u0629</span>
        <span class="text-xs text-[#8B6355] text-center leading-relaxed">\u0628\u064A\u0639\u064A \u0645\u0646\u062A\u062C\u0627\u062A\u0643 \u0648\u0627\u0643\u0633\u0628\u064A \u062F\u062E\u0644\u0627\u064B</span>
        @if (hasRole('seller')) {
          <div class="absolute top-2 right-2 w-5 h-5 bg-[#C8956C] rounded-full flex items-center justify-center">
            <svg class="w-3 h-3" fill="white" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
        }
      </button>

    </div>

    <!-- Next -->
    <button
      (click)="next()"
      [disabled]="selectedRoles.length === 0"
      class="w-full bg-[#C8956C] text-white py-3 rounded-xl font-semibold hover:bg-[#B07855] transition disabled:opacity-40 disabled:cursor-not-allowed mb-3"
    >
      \u0627\u0644\u062A\u0627\u0644\u064A
    </button>

    <button
      routerLink="/onboarding/goal"
      class="w-full text-sm text-[#8B6355] text-center hover:text-[#C8956C] transition"
    >
      \u0631\u062C\u0648\u0639
    </button>

  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChooseRole, { className: "ChooseRole", filePath: "src/app/features/auth/pages/choose-role/choose-role.ts", lineNumber: 13 });
})();
export {
  ChooseRole
};
//# sourceMappingURL=chunk-V2PAWWWB.mjs.map
