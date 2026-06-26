import './polyfills.server.mjs';
import {
  ChatService
} from "./chunk-A2NIGZWY.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  unwrapList
} from "./chunk-VM6QK2IN.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-N3NDYBCB.mjs";
import "./chunk-MTCE2STO.mjs";
import "./chunk-YG65EQOF.mjs";
import {
  CommonModule,
  Component,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/ai-assistant/pages/chat/chat.ts
var _forTrack0 = ($index, $item) => $item.conversationId;
function Chat_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0628\u0639\u062F");
    \u0275\u0275elementEnd();
  }
}
function Chat_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function Chat_Conditional_14_For_2_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openConversation(c_r2.conversationId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-cream", ctx_r2.activeConversationId === c_r2.conversationId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.title ?? "\u0645\u062D\u0627\u062F\u062B\u0629", " ");
  }
}
function Chat_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, Chat_Conditional_14_For_2_Template, 2, 3, "button", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.conversations);
  }
}
function Chat_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Chat_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, " \u0645\u0631\u062D\u0628\u0627\u064B! \u0627\u0633\u0623\u0644\u064A\u0646\u064A \u0639\u0646 \u0627\u0644\u062F\u0648\u0631\u0627\u062A\u060C \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0623\u0648 \u0623\u064A \u0634\u064A\u0621 \u064A\u062E\u0635 \u0645\u0634\u0631\u0648\u0639\u0643\u0650 \u0627\u0644\u0645\u0646\u0632\u0644\u064A. ");
    \u0275\u0275elementEnd();
  }
}
function Chat_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    \u0275\u0275classProp("ml-auto", msg_r4.role === "user")("bg-terracotta", msg_r4.role === "user")("text-white", msg_r4.role === "user")("bg-cream", msg_r4.role !== "user")("text-navy", msg_r4.role !== "user");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r4.content, " ");
  }
}
function Chat_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Chat_Conditional_19_For_1_Template, 2, 11, "div", 21, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.messages);
  }
}
function Chat_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u0643\u062A\u0627\u0628\u0629...");
    \u0275\u0275elementEnd();
  }
}
function Chat_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
var Chat = class _Chat {
  chatApi = inject(ChatService);
  conversations = [];
  messages = [];
  activeConversationId = null;
  draft = "";
  isLoading = false;
  isSending = false;
  errorMessage = "";
  constructor() {
    runInBrowser(() => this.loadConversations());
  }
  loadConversations() {
    this.chatApi.getConversations().subscribe({
      next: (res) => {
        this.conversations = unwrapList(res);
      }
    });
  }
  startNewChat() {
    this.activeConversationId = null;
    this.messages = [];
    this.draft = "";
  }
  openConversation(id) {
    this.activeConversationId = id;
    this.isLoading = true;
    this.chatApi.getConversation(id).subscribe({
      next: (conversation) => {
        this.messages = conversation.messages ?? [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629";
        this.isLoading = false;
      }
    });
  }
  send() {
    const text = this.draft.trim();
    if (!text || this.isSending)
      return;
    this.messages = [...this.messages, { role: "user", content: text }];
    this.draft = "";
    this.isSending = true;
    this.errorMessage = "";
    this.chatApi.sendMessage(text, this.activeConversationId ?? void 0).subscribe({
      next: (res) => {
        this.activeConversationId = res.conversationId;
        if (res.reply) {
          this.messages = [...this.messages, { role: "assistant", content: res.reply }];
        }
        this.isSending = false;
        this.loadConversations();
      },
      error: (err) => {
        this.isSending = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629";
      }
    });
  }
  static \u0275fac = function Chat_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Chat)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Chat, selectors: [["app-chat"]], decls: 26, vars: 6, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-5xl", "mx-auto", "h-[calc(100vh-4rem)]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-2xl", "font-bold", "text-navy", "font-display"], ["type", "button", 1, "text-sm", "text-terracotta", "hover:underline", 3, "click"], [1, "flex", "flex-1", "gap-4", "min-h-0"], [1, "w-56", "shrink-0", "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-4", "overflow-y-auto", "hidden", "md:block"], [1, "text-xs", "font-semibold", "text-terracotta-dark", "mb-3"], [1, "text-xs", "text-terracotta-dark"], [1, "space-y-1"], [1, "flex-1", "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "flex", "flex-col", "min-h-0"], [1, "flex-1", "overflow-y-auto", "p-6", "space-y-4"], [1, "text-terracotta-dark", "text-sm"], [1, "text-terracotta-dark", "text-sm", "text-center", "mt-12"], [1, "px-6", "pb-2"], [1, "p-4", "border-t", "border-blush/30", "flex", "gap-3", 3, "ngSubmit"], ["type", "text", "name", "draft", "placeholder", "\u0627\u0643\u062A\u0628\u064A \u0631\u0633\u0627\u0644\u062A\u0643\u0650...", 1, "flex-1", "border", "border-blush", "rounded-xl", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta/30", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "bg-terracotta", "text-white", "px-5", "py-3", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", 3, "disabled"], ["type", "button", 1, "w-full", "text-right", "text-sm", "px-3", "py-2", "rounded-lg", "hover:bg-cream", "transition", "truncate", 3, "bg-cream"], ["type", "button", 1, "w-full", "text-right", "text-sm", "px-3", "py-2", "rounded-lg", "hover:bg-cream", "transition", "truncate", 3, "click"], [1, "max-w-[85%]", "px-4", "py-3", "rounded-2xl", "text-sm", "leading-relaxed", 3, "ml-auto", "bg-terracotta", "text-white", "bg-cream", "text-navy"], [1, "max-w-[85%]", "px-4", "py-3", "rounded-2xl", "text-sm", "leading-relaxed"], [1, "text-red-600", "text-xs"]], template: function Chat_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function Chat_Template_button_click_7_listener() {
        return ctx.startNewChat();
      });
      \u0275\u0275text(8, " \u0645\u062D\u0627\u062F\u062B\u0629 \u062C\u062F\u064A\u062F\u0629 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "aside", 7)(11, "p", 8);
      \u0275\u0275text(12, "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, Chat_Conditional_13_Template, 2, 0, "p", 9)(14, Chat_Conditional_14_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
      \u0275\u0275conditionalCreate(17, Chat_Conditional_17_Template, 2, 0, "p", 13)(18, Chat_Conditional_18_Template, 2, 0, "p", 14)(19, Chat_Conditional_19_Template, 2, 0);
      \u0275\u0275conditionalCreate(20, Chat_Conditional_20_Template, 2, 0, "p", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, Chat_Conditional_21_Template, 3, 1, "div", 15);
      \u0275\u0275elementStart(22, "form", 16);
      \u0275\u0275listener("ngSubmit", function Chat_Template_form_ngSubmit_22_listener() {
        return ctx.send();
      });
      \u0275\u0275elementStart(23, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function Chat_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.draft, $event) || (ctx.draft = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275text(25, " \u0625\u0631\u0633\u0627\u0644 ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.conversations.length === 0 ? 13 : 14);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading ? 17 : ctx.messages.length === 0 ? 18 : 19);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isSending ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSending || !ctx.draft.trim());
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chat, [{
    type: Component,
    args: [{ selector: "app-chat", standalone: true, imports: [CommonModule, FormsModule, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-5xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-bold text-navy font-display">\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A</h1>
        <button type="button" (click)="startNewChat()" class="text-sm text-terracotta hover:underline">
          \u0645\u062D\u0627\u062F\u062B\u0629 \u062C\u062F\u064A\u062F\u0629
        </button>
      </div>

      <div class="flex flex-1 gap-4 min-h-0">
        <aside class="w-56 shrink-0 bg-white rounded-2xl femora-shadow border border-blush/30 p-4 overflow-y-auto hidden md:block">
          <p class="text-xs font-semibold text-terracotta-dark mb-3">\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A</p>
          @if (conversations.length === 0) {
            <p class="text-xs text-terracotta-dark">\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0628\u0639\u062F</p>
          } @else {
            <div class="space-y-1">
              @for (c of conversations; track c.conversationId) {
                <button
                  type="button"
                  (click)="openConversation(c.conversationId)"
                  class="w-full text-right text-sm px-3 py-2 rounded-lg hover:bg-cream transition truncate"
                  [class.bg-cream]="activeConversationId === c.conversationId"
                >
                  {{ c.title ?? '\u0645\u062D\u0627\u062F\u062B\u0629' }}
                </button>
              }
            </div>
          }
        </aside>

        <div class="flex-1 bg-white rounded-2xl femora-shadow border border-blush/30 flex flex-col min-h-0">
          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            @if (isLoading) {
              <p class="text-terracotta-dark text-sm">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
            } @else if (messages.length === 0) {
              <p class="text-terracotta-dark text-sm text-center mt-12">
                \u0645\u0631\u062D\u0628\u0627\u064B! \u0627\u0633\u0623\u0644\u064A\u0646\u064A \u0639\u0646 \u0627\u0644\u062F\u0648\u0631\u0627\u062A\u060C \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0623\u0648 \u0623\u064A \u0634\u064A\u0621 \u064A\u062E\u0635 \u0645\u0634\u0631\u0648\u0639\u0643\u0650 \u0627\u0644\u0645\u0646\u0632\u0644\u064A.
              </p>
            } @else {
              @for (msg of messages; track $index) {
                <div
                  class="max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  [class.ml-auto]="msg.role === 'user'"
                  [class.bg-terracotta]="msg.role === 'user'"
                  [class.text-white]="msg.role === 'user'"
                  [class.bg-cream]="msg.role !== 'user'"
                  [class.text-navy]="msg.role !== 'user'"
                >
                  {{ msg.content }}
                </div>
              }
            }
            @if (isSending) {
              <p class="text-xs text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u0643\u062A\u0627\u0628\u0629...</p>
            }
          </div>

          @if (errorMessage) {
            <div class="px-6 pb-2">
              <p class="text-red-600 text-xs">{{ errorMessage }}</p>
            </div>
          }

          <form class="p-4 border-t border-blush/30 flex gap-3" (ngSubmit)="send()">
            <input
              type="text"
              [(ngModel)]="draft"
              name="draft"
              placeholder="\u0627\u0643\u062A\u0628\u064A \u0631\u0633\u0627\u0644\u062A\u0643\u0650..."
              class="flex-1 border border-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
            />
            <button
              type="submit"
              [disabled]="isSending || !draft.trim()"
              class="bg-terracotta text-white px-5 py-3 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-60"
            >
              \u0625\u0631\u0633\u0627\u0644
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chat, { className: "Chat", filePath: "src/app/features/ai-assistant/pages/chat/chat.ts", lineNumber: 16 });
})();
export {
  Chat
};
//# sourceMappingURL=chunk-77LXFO3W.mjs.map
