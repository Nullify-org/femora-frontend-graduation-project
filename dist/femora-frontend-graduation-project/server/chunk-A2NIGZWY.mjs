import './polyfills.server.mjs';
import {
  ApiClient
} from "./chunk-F6FSQHYX.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-2K2LDCAY.mjs";

// src/app/features/ai-assistant/services/chat.service.ts
var ChatService = class _ChatService {
  api = inject(ApiClient);
  base = "/api/ai";
  sendMessage(message, conversationId) {
    return this.api.post(`${this.base}/chat`, { message, conversationId });
  }
  getConversations() {
    return this.api.get(`${this.base}/conversations`);
  }
  getConversation(id) {
    return this.api.get(`${this.base}/conversations/${id}`);
  }
  setInterests(courseCategoryIds, productCategoryIds) {
    return this.api.post(`${this.base}/interests`, { courseCategoryIds, productCategoryIds });
  }
  recommendedCourses(top = 6) {
    return this.api.get(`${this.base}/recommendations/courses`, {
      params: { top: String(top) }
    });
  }
  static \u0275fac = function ChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ChatService
};
//# sourceMappingURL=chunk-A2NIGZWY.mjs.map
