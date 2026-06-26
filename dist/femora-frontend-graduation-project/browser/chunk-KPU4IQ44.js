import {
  LucideBell,
  LucideBookOpen,
  LucideCpu,
  LucideLayoutDashboard,
  LucidePackage,
  LucideUser
} from "./chunk-EREYMOSF.js";
import {
  Component,
  Input,
  RouterLink,
  RouterLinkActive,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CQIDYBZP.js";

// src/app/shared/components/sidebar/sidebar.ts
var _forTrack0 = ($index, $item) => $item.path;
function Sidebar_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function Sidebar_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function Sidebar_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function Sidebar_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 9);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function Sidebar_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function Sidebar_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 18);
  }
}
function Sidebar_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span", 5);
    \u0275\u0275conditionalCreate(2, Sidebar_For_6_Conditional_2_Template, 1, 1, ":svg:svg", 6);
    \u0275\u0275conditionalCreate(3, Sidebar_For_6_Conditional_3_Template, 1, 1, ":svg:svg", 7);
    \u0275\u0275conditionalCreate(4, Sidebar_For_6_Conditional_4_Template, 1, 1, ":svg:svg", 8);
    \u0275\u0275conditionalCreate(5, Sidebar_For_6_Conditional_5_Template, 1, 1, ":svg:svg", 9);
    \u0275\u0275conditionalCreate(6, Sidebar_For_6_Conditional_6_Template, 1, 1, ":svg:svg", 10);
    \u0275\u0275conditionalCreate(7, Sidebar_For_6_Conditional_7_Template, 1, 1, ":svg:svg", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(link_r1.path === "/dashboard" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.path === "/lms/catalog" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.path === "/marketplace/catalog" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.path === "/ai/chat" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.path === "/messaging" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.path === "/profile/trainee" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r1.label, " ");
  }
}
var Sidebar = class _Sidebar {
  links = input([
    { label: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645", path: "/dashboard", icon: "" },
    { label: "\u062F\u0648\u0631\u0627\u062A\u064A", path: "/lms/catalog", icon: "" },
    { label: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A", path: "/marketplace/catalog", icon: "" },
    { label: "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A", path: "/ai/chat", icon: "" },
    { label: "\u0627\u0644\u0631\u0633\u0627\u0626\u0644", path: "/messaging", icon: "" },
    { label: "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A", path: "/profile/trainee", icon: "" }
  ], ...ngDevMode ? [{ debugName: "links" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], inputs: { links: [1, "links"] }, decls: 7, vars: 0, consts: [[1, "w-64", "shrink-0", "bg-navy", "text-white", "min-h-screen", "p-6", "hidden", "lg:block"], [1, "mb-8"], ["routerLink", "/", 1, "text-xl", "font-bold", "text-terracotta", "font-display"], [1, "space-y-1"], ["routerLinkActive", "bg-white/10 text-terracotta", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-xl", "text-sm", "text-white/80", "hover:bg-white/5", "hover:text-white", "transition", 3, "routerLink"], [1, "w-5", "h-5", "text-white/80"], ["lucideLayoutDashboard", "", 3, "size"], ["lucideBookOpen", "", 3, "size"], ["lucidePackage", "", 3, "size"], ["lucideCpu", "", 3, "size"], ["lucideBell", "", 3, "size"], ["lucideUser", "", 3, "size"]], template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "\u273F Femora");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "nav", 3);
      \u0275\u0275repeaterCreate(5, Sidebar_For_6_Template, 9, 8, "a", 4, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.links());
    }
  }, dependencies: [RouterLink, RouterLinkActive, LucideLayoutDashboard, LucideBookOpen, LucidePackage, LucideCpu, LucideBell, LucideUser], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [RouterLink, RouterLinkActive, LucideLayoutDashboard, LucideBookOpen, LucidePackage, LucideCpu, LucideBell, LucideUser], template: `<aside class="w-64 shrink-0 bg-navy text-white min-h-screen p-6 hidden lg:block">
  <div class="mb-8">
    <a routerLink="/" class="text-xl font-bold text-terracotta font-display">\u273F Femora</a>
  </div>
  <nav class="space-y-1">
    @for (link of links(); track link.path) {
      <a
        [routerLink]="link.path"
        routerLinkActive="bg-white/10 text-terracotta"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
      >
        <span class="w-5 h-5 text-white/80">
          @if (link.path === '/dashboard') {
            <svg lucideLayoutDashboard [size]="18"></svg>
          }
          @if (link.path === '/lms/catalog') {
            <svg lucideBookOpen [size]="18"></svg>
          }
          @if (link.path === '/marketplace/catalog') {
            <svg lucidePackage [size]="18"></svg>
          }
          @if (link.path === '/ai/chat') {
            <svg lucideCpu [size]="18"></svg>
          }
          @if (link.path === '/messaging') {
            <svg lucideBell [size]="18"></svg>
          }
          @if (link.path === '/profile/trainee') {
            <svg lucideUser [size]="18"></svg>
          }
        </span>
        {{ link.label }}
      </a>
    }
  </nav>
</aside>
` }]
  }], null, { links: [{ type: Input, args: [{ isSignal: true, alias: "links", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/shared/components/sidebar/sidebar.ts", lineNumber: 24 });
})();

export {
  Sidebar
};
//# sourceMappingURL=chunk-KPU4IQ44.js.map
