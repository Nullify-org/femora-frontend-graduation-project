import './polyfills.server.mjs';
import {
  ApprovalService
} from "./chunk-4DUI5CGP.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N3NDYBCB.mjs";
import {
  NotificationService
} from "./chunk-MTCE2STO.mjs";
import "./chunk-YG65EQOF.mjs";
import {
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/dashboard/pages/admin-dashboard/admin-dashboard.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboard_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 4);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A \u0645\u0639\u0644\u0651\u0642\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboard_Conditional_9_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 11)(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 13)(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 16)(10, "button", 17);
    \u0275\u0275listener("click", function AdminDashboard_Conditional_9_For_14_Template_button_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approve(item_r2.id));
    });
    \u0275\u0275text(11, " \u2705 \u0645\u0648\u0627\u0641\u0642\u0629 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function AdminDashboard_Conditional_9_For_14_Template_button_click_12_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openReject(item_r2.id));
    });
    \u0275\u0275text(13, " \u274C \u0631\u0641\u0636 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(item_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 3, item_r2.createdAt, "short"));
  }
}
function AdminDashboard_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 8)(2, "thead", 9)(3, "tr")(4, "th", 10);
    \u0275\u0275text(5, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 10);
    \u0275\u0275text(7, "\u0627\u0644\u0646\u0648\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 10);
    \u0275\u0275text(9, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, AdminDashboard_Conditional_9_For_14_Template, 14, 6, "tr", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.pending());
  }
}
function AdminDashboard_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 19)(2, "h3", 20);
    \u0275\u0275text(3, "\u0633\u0628\u0628 \u0627\u0644\u0631\u0641\u0636 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboard_Conditional_10_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.rejectNote, $event) || (ctx_r2.rejectNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "button", 23);
    \u0275\u0275listener("click", function AdminDashboard_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.rejectTargetId.set(null));
    });
    \u0275\u0275text(7, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function AdminDashboard_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmReject());
    });
    \u0275\u0275text(9, "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0631\u0641\u0636");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rejectNote);
  }
}
var AdminDashboard = class _AdminDashboard {
  approvalsApi = inject(ApprovalService);
  notifications = inject(NotificationService);
  pending = signal([], ...ngDevMode ? [{ debugName: "pending" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  rejectNote = "";
  rejectTargetId = signal(null, ...ngDevMode ? [{ debugName: "rejectTargetId" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    runInBrowser(() => this.loadPending());
  }
  loadPending() {
    this.loading.set(true);
    this.approvalsApi.getPending().subscribe({
      next: (items) => {
        this.pending.set(items ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.pending.set([]);
        this.loading.set(false);
        this.notifications.error("\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629");
      }
    });
  }
  approve(id) {
    this.approvalsApi.review(id, { isApproved: true }).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0628\u0646\u062C\u0627\u062D");
        this.loadPending();
      },
      error: () => this.notifications.error("\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629")
    });
  }
  openReject(id) {
    this.rejectTargetId.set(id);
    this.rejectNote = "";
  }
  confirmReject() {
    const id = this.rejectTargetId();
    if (!id)
      return;
    this.approvalsApi.review(id, { isApproved: false, note: this.rejectNote || void 0 }).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0637\u0644\u0628");
        this.rejectTargetId.set(null);
        this.loadPending();
      },
      error: () => this.notifications.error("\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0631\u0641\u0636")
    });
  }
  typeLabel(type) {
    const labels = {
      InstructorVerification: "\u062A\u062D\u0642\u0642 \u0645\u062F\u0631\u0628",
      SellerVerification: "\u062A\u062D\u0642\u0642 \u0628\u0627\u0626\u0639",
      CourseApproval: "\u0645\u0648\u0627\u0641\u0642\u0629 \u062F\u0648\u0631\u0629",
      ProductApproval: "\u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0646\u062A\u062C"
    };
    return labels[type] ?? type;
  }
  static \u0275fac = function AdminDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboard, selectors: [["app-admin-dashboard"]], decls: 11, vars: 2, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-6", "lg:p-10"], [1, "text-2xl", "font-bold", "text-text-dark", "font-display", "mb-2"], [1, "text-text-light", "text-sm", "mb-8"], [1, "text-text-medium"], [1, "bg-warm-white", "rounded-2xl", "p-10", "text-center", "femora-shadow"], [1, "bg-warm-white", "rounded-2xl", "femora-shadow", "overflow-hidden"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "text-sm"], [1, "bg-cream", "border-b", "border-sand/50"], [1, "text-start", "p-4", "font-semibold", "text-text-dark"], [1, "border-b", "border-sand/30", "hover:bg-cream/50"], [1, "p-4", "text-text-medium"], [1, "p-4"], [1, "bg-primary/10", "text-primary", "text-xs", "px-2", "py-1", "rounded-full"], [1, "p-4", "text-text-light"], [1, "p-4", "flex", "gap-2"], ["type", "button", 1, "bg-success", "text-white", "px-3", "py-1.5", "rounded-lg", "text-xs", "hover:opacity-90", 3, "click"], ["type", "button", 1, "bg-error", "text-white", "px-3", "py-1.5", "rounded-lg", "text-xs", "hover:opacity-90", 3, "click"], [1, "bg-warm-white", "rounded-2xl", "p-6", "w-full", "max-w-md", "femora-shadow"], [1, "font-bold", "text-text-dark", "mb-3"], ["rows", "3", "placeholder", "\u0627\u0643\u062A\u0628\u064A \u0633\u0628\u0628 \u0627\u0644\u0631\u0641\u0636...", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", "mb-4", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "justify-end"], ["type", "button", 1, "px-4", "py-2", "text-sm", "text-text-medium", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-sm", "bg-error", "text-white", "rounded-xl", 3, "click"]], template: function AdminDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "h1", 2);
      \u0275\u0275text(4, "\u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "\u0625\u062F\u0627\u0631\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0648\u0627\u0644\u062A\u062D\u0642\u0642");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, AdminDashboard_Conditional_7_Template, 2, 0, "p", 4)(8, AdminDashboard_Conditional_8_Template, 3, 0, "div", 5)(9, AdminDashboard_Conditional_9_Template, 15, 0, "div", 6);
      \u0275\u0275conditionalCreate(10, AdminDashboard_Conditional_10_Template, 10, 1, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 7 : ctx.pending().length === 0 ? 8 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.rejectTargetId() ? 10 : -1);
    }
  }, dependencies: [Sidebar, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboard, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [Sidebar, FormsModule, DatePipe], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />

  <main class="flex-1 p-6 lg:p-10">
    <h1 class="text-2xl font-bold text-text-dark font-display mb-2">\u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629</h1>
    <p class="text-text-light text-sm mb-8">\u0625\u062F\u0627\u0631\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0648\u0627\u0644\u062A\u062D\u0642\u0642</p>

    @if (loading()) {
      <p class="text-text-medium">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
    } @else if (pending().length === 0) {
      <div class="bg-warm-white rounded-2xl p-10 text-center femora-shadow">
        <p class="text-text-medium">\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A \u0645\u0639\u0644\u0651\u0642\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>
      </div>
    } @else {
      <div class="bg-warm-white rounded-2xl femora-shadow overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-cream border-b border-sand/50">
            <tr>
              <th class="text-start p-4 font-semibold text-text-dark">\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</th>
              <th class="text-start p-4 font-semibold text-text-dark">\u0627\u0644\u0646\u0648\u0639</th>
              <th class="text-start p-4 font-semibold text-text-dark">\u0627\u0644\u062A\u0627\u0631\u064A\u062E</th>
              <th class="text-start p-4 font-semibold text-text-dark">\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>
            </tr>
          </thead>
          <tbody>
            @for (item of pending(); track item.id) {
              <tr class="border-b border-sand/30 hover:bg-cream/50">
                <td class="p-4 text-text-medium">{{ item.userId }}</td>
                <td class="p-4">
                  <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{{ typeLabel(item.type) }}</span>
                </td>
                <td class="p-4 text-text-light">{{ item.createdAt | date: 'short' }}</td>
                <td class="p-4 flex gap-2">
                  <button type="button" (click)="approve(item.id)" class="bg-success text-white px-3 py-1.5 rounded-lg text-xs hover:opacity-90">
                    \u2705 \u0645\u0648\u0627\u0641\u0642\u0629
                  </button>
                  <button type="button" (click)="openReject(item.id)" class="bg-error text-white px-3 py-1.5 rounded-lg text-xs hover:opacity-90">
                    \u274C \u0631\u0641\u0636
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

    @if (rejectTargetId()) {
      <div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
        <div class="bg-warm-white rounded-2xl p-6 w-full max-w-md femora-shadow">
          <h3 class="font-bold text-text-dark mb-3">\u0633\u0628\u0628 \u0627\u0644\u0631\u0641\u0636 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</h3>
          <textarea
            [(ngModel)]="rejectNote"
            rows="3"
            class="w-full border border-sand rounded-xl p-3 text-sm mb-4"
            placeholder="\u0627\u0643\u062A\u0628\u064A \u0633\u0628\u0628 \u0627\u0644\u0631\u0641\u0636..."
          ></textarea>
          <div class="flex gap-2 justify-end">
            <button type="button" (click)="rejectTargetId.set(null)" class="px-4 py-2 text-sm text-text-medium">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="button" (click)="confirmReject()" class="px-4 py-2 text-sm bg-error text-white rounded-xl">\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0631\u0641\u0636</button>
          </div>
        </div>
      </div>
    }
  </main>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboard, { className: "AdminDashboard", filePath: "src/app/features/dashboard/pages/admin-dashboard/admin-dashboard.ts", lineNumber: 15 });
})();
export {
  AdminDashboard
};
//# sourceMappingURL=chunk-FSTM327H.mjs.map
