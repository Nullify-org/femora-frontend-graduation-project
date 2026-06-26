import './polyfills.server.mjs';
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/select-profile/select-profile.ts
var _forTrack0 = ($index, $item) => $item.id;
function SelectProfile_For_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 22);
    \u0275\u0275domElement(2, "path", 23);
    \u0275\u0275domElementEnd()();
  }
}
function SelectProfile_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 16);
    \u0275\u0275domListener("click", function SelectProfile_For_18_Template_button_click_0_listener() {
      const profile_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(profile_r2));
    });
    \u0275\u0275domElementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 18)(4, "p", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 20);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, SelectProfile_For_18_Conditional_8_Template, 3, 0, "div", 21);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const profile_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-terracotta", ctx_r2.isSelected(profile_r2))("bg-cream", ctx_r2.isSelected(profile_r2))("border-blush", !ctx_r2.isSelected(profile_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.iconFor(profile_r2.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(profile_r2.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r2.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSelected(profile_r2) ? 8 : -1);
  }
}
function SelectProfile_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 15);
    \u0275\u0275domElement(1, "circle", 24);
    \u0275\u0275domElementEnd();
  }
}
var SelectProfile = class _SelectProfile {
  auth = inject(AuthService);
  router = inject(Router);
  notifications = inject(NotificationService);
  profiles = this.auth.pendingProfiles();
  selected = null;
  isLoading = false;
  select(profile) {
    this.selected = profile.name;
  }
  isSelected(profile) {
    return this.selected === profile.name;
  }
  iconFor(icon) {
    const map = {
      "graduation-cap": "\u{1F393}",
      chalkboard: "\u{1F469}\u200D\u{1F3EB}",
      store: "\u{1F3EA}"
    };
    return map[icon] ?? "\u273F";
  }
  confirm() {
    if (!this.selected || this.isLoading)
      return;
    this.isLoading = true;
    this.auth.selectProfile(this.selected).subscribe({
      next: () => {
        this.isLoading = false;
        this.notifications.success("\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A \u0628\u0646\u062C\u0627\u062D");
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.isLoading = false;
        const msg = err?.error?.title ?? err?.error?.message ?? "\u062A\u0639\u0630\u0651\u0631 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A";
        this.notifications.error(msg);
      }
    });
  }
  static \u0275fac = function SelectProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectProfile, selectors: [["app-select-profile"]], decls: 22, vars: 3, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-cream-light", "px-4"], [1, "fixed", "inset-0", "overflow-hidden", "pointer-events-none", "opacity-[0.08]"], ["xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "w-full", "h-full"], ["id", "mashrabiya", "x", "0", "y", "0", "width", "40", "height", "40", "patternUnits", "userSpaceOnUse"], ["d", "M20 0 L40 20 L20 40 L0 20 Z", "fill", "none", "stroke", "#1A1A2E", "stroke-width", "0.5"], ["cx", "20", "cy", "20", "r", "3", "fill", "none", "stroke", "#1A1A2E", "stroke-width", "0.5"], ["width", "100%", "height", "100%", "fill", "url(#mashrabiya)"], [1, "bg-white", "rounded-3xl", "femora-shadow", "border", "border-blush/40", "p-10", "w-full", "max-w-lg", "relative"], [1, "text-center", "mb-2"], [1, "text-2xl", "font-bold", "text-terracotta", "font-display"], [1, "text-2xl", "font-bold", "text-navy", "text-center", "mb-2", "font-display"], [1, "text-sm", "text-terracotta-dark", "text-center", "mb-8"], [1, "grid", "grid-cols-1", "gap-4", "mb-8"], ["type", "button", 1, "relative", "flex", "items-center", "gap-4", "p-5", "rounded-2xl", "border-2", "text-right", "transition", "hover:border-terracotta", "hover:bg-cream", 3, "border-terracotta", "bg-cream", "border-blush"], ["type", "button", 1, "w-full", "bg-terracotta", "text-white", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-40", "disabled:cursor-not-allowed", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", 1, "w-4", "h-4", "animate-spin"], ["type", "button", 1, "relative", "flex", "items-center", "gap-4", "p-5", "rounded-2xl", "border-2", "text-right", "transition", "hover:border-terracotta", "hover:bg-cream", 3, "click"], [1, "text-3xl", "shrink-0"], [1, "flex-1"], [1, "text-sm", "font-semibold", "text-navy"], [1, "text-xs", "text-terracotta-dark"], [1, "w-5", "h-5", "bg-terracotta", "rounded-full", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "viewBox", "0 0 12 12", 1, "w-3", "h-3"], ["d", "M2 6l3 3 5-5", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "3", "stroke-dasharray", "32", "stroke-dashoffset", "12"]], template: function SelectProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2)(3, "defs")(4, "pattern", 3);
      \u0275\u0275domElement(5, "path", 4)(6, "circle", 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(7, "rect", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(8, "div", 7)(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11, "\u273F Femora");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "h2", 10);
      \u0275\u0275text(13, "\u0627\u062E\u062A\u0627\u0631\u064A \u0645\u0633\u0627\u062D\u0629 \u0639\u0645\u0644\u0643");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p", 11);
      \u0275\u0275text(15, " \u0644\u062F\u064A\u0643\u0650 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0631 \u2014 \u0627\u062E\u062A\u0627\u0631\u064A \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F\u064A\u0646 \u0627\u0644\u0628\u062F\u0621 \u0628\u0647 \u0627\u0644\u0622\u0646 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "div", 12);
      \u0275\u0275repeaterCreate(17, SelectProfile_For_18_Template, 9, 10, "button", 13, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "button", 14);
      \u0275\u0275domListener("click", function SelectProfile_Template_button_click_19_listener() {
        return ctx.confirm();
      });
      \u0275\u0275conditionalCreate(20, SelectProfile_Conditional_20_Template, 2, 0, ":svg:svg", 15);
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.profiles);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.selected || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "\u0645\u062A\u0627\u0628\u0639\u0629", " ");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectProfile, [{
    type: Component,
    args: [{ selector: "app-select-profile", standalone: true, imports: [CommonModule], template: `<div class="min-h-screen flex items-center justify-center bg-cream-light px-4">
  <div class="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
    <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mashrabiya" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#1A1A2E" stroke-width="0.5"/>
          <circle cx="20" cy="20" r="3" fill="none" stroke="#1A1A2E" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mashrabiya)"/>
    </svg>
  </div>

  <div class="bg-white rounded-3xl femora-shadow border border-blush/40 p-10 w-full max-w-lg relative">
    <div class="text-center mb-2">
      <span class="text-2xl font-bold text-terracotta font-display">\u273F Femora</span>
    </div>

    <h2 class="text-2xl font-bold text-navy text-center mb-2 font-display">\u0627\u062E\u062A\u0627\u0631\u064A \u0645\u0633\u0627\u062D\u0629 \u0639\u0645\u0644\u0643</h2>
    <p class="text-sm text-terracotta-dark text-center mb-8">
      \u0644\u062F\u064A\u0643\u0650 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0631 \u2014 \u0627\u062E\u062A\u0627\u0631\u064A \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F\u064A\u0646 \u0627\u0644\u0628\u062F\u0621 \u0628\u0647 \u0627\u0644\u0622\u0646
    </p>

    <div class="grid grid-cols-1 gap-4 mb-8">
      @for (profile of profiles; track profile.id) {
        <button
          type="button"
          (click)="select(profile)"
          class="relative flex items-center gap-4 p-5 rounded-2xl border-2 text-right transition hover:border-terracotta hover:bg-cream"
          [class.border-terracotta]="isSelected(profile)"
          [class.bg-cream]="isSelected(profile)"
          [class.border-blush]="!isSelected(profile)"
        >
          <span class="text-3xl shrink-0">{{ iconFor(profile.icon) }}</span>
          <div class="flex-1">
            <p class="text-sm font-semibold text-navy">{{ profile.displayName }}</p>
            <p class="text-xs text-terracotta-dark">{{ profile.description }}</p>
          </div>
          @if (isSelected(profile)) {
            <div class="w-5 h-5 bg-terracotta rounded-full flex items-center justify-center shrink-0">
              <svg class="w-3 h-3" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          }
        </button>
      }
    </div>

    <button
      type="button"
      (click)="confirm()"
      [disabled]="!selected || isLoading"
      class="w-full bg-terracotta text-white py-3.5 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      @if (isLoading) {
        <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="32" stroke-dashoffset="12"/>
        </svg>
      }
      {{ isLoading ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...' : '\u0645\u062A\u0627\u0628\u0639\u0629' }}
    </button>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectProfile, { className: "SelectProfile", filePath: "src/app/features/auth/pages/select-profile/select-profile.ts", lineNumber: 15 });
})();
export {
  SelectProfile
};
//# sourceMappingURL=chunk-4KGQA42E.mjs.map
