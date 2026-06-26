import './polyfills.server.mjs';
import {
  FeatureShell
} from "./chunk-TMIPHLOX.mjs";
import "./chunk-ABWJUREF.mjs";
import "./chunk-JB67WIXN.mjs";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/profile/pages/preferences/preferences.ts
var Preferences = class _Preferences {
  static \u0275fac = function Preferences_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Preferences)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Preferences, selectors: [["app-preferences"]], decls: 1, vars: 0, consts: [["title", "\u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A"]], template: function Preferences_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-feature-shell", 0);
    }
  }, dependencies: [FeatureShell], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Preferences, [{
    type: Component,
    args: [{
      selector: "app-preferences",
      standalone: true,
      imports: [FeatureShell],
      template: `<app-feature-shell title="\u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Preferences, { className: "Preferences", filePath: "src/app/features/profile/pages/preferences/preferences.ts", lineNumber: 10 });
})();
export {
  Preferences
};
//# sourceMappingURL=chunk-P3HVMVBC.mjs.map
