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

// src/app/features/messaging/pages/conversations/conversations.ts
var Conversations = class _Conversations {
  static \u0275fac = function Conversations_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Conversations)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Conversations, selectors: [["app-conversations"]], decls: 1, vars: 0, consts: [["title", "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A"]], template: function Conversations_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-feature-shell", 0);
    }
  }, dependencies: [FeatureShell], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Conversations, [{
    type: Component,
    args: [{
      selector: "app-conversations",
      standalone: true,
      imports: [FeatureShell],
      template: `<app-feature-shell title="\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Conversations, { className: "Conversations", filePath: "src/app/features/messaging/pages/conversations/conversations.ts", lineNumber: 10 });
})();
export {
  Conversations
};
//# sourceMappingURL=chunk-BGGOEXGU.mjs.map
