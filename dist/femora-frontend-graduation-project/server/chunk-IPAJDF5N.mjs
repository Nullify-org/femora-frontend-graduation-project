import './polyfills.server.mjs';
import {
  ApprovalService
} from "./chunk-4DUI5CGP.mjs";
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  CourseService
} from "./chunk-OMOOG6AX.mjs";
import "./chunk-VM6QK2IN.mjs";
import {
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  Component,
  RouterLink,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/lms/pages/instructor-dashboard/instructor-dashboard.ts
var _c0 = (a0) => ["/courses", a0];
var _forTrack0 = ($index, $item) => $item.id;
function InstructorDashboard_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 11);
    \u0275\u0275text(2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0648\u0631\u0627\u062A \u0628\u0639\u062F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function InstructorDashboard_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate.set(true));
    });
    \u0275\u0275text(4, "\u0623\u0646\u0634\u0626\u064A \u062F\u0648\u0631\u062A\u0643 \u0627\u0644\u0623\u0648\u0644\u0649");
    \u0275\u0275elementEnd()();
  }
}
function InstructorDashboard_Conditional_15_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function InstructorDashboard_Conditional_15_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const course_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.publishCourse(course_r4.id));
    });
    \u0275\u0275text(1, "\u0646\u0634\u0631");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboard_Conditional_15_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u0645\u0646\u0634\u0648\u0631\u0629");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboard_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "a", 17);
    \u0275\u0275text(7, "\u0639\u0631\u0636");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, InstructorDashboard_Conditional_15_For_2_Conditional_8_Template, 2, 0, "button", 18)(9, InstructorDashboard_Conditional_15_For_2_Conditional_9_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", course_r4.category, " \xB7 ", course_r4.level);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, course_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(course_r4.isPublished !== true ? 8 : 9);
  }
}
function InstructorDashboard_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, InstructorDashboard_Conditional_15_For_2_Template, 10, 7, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.courses());
  }
}
function InstructorDashboard_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 21)(2, "h3", 22);
    \u0275\u0275text(3, "\u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 \u0643\u0645\u062F\u0631\u0628\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboard_Conditional_16_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applyBio, $event) || (ctx_r1.applyBio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboard_Conditional_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.applyPortfolio, $event) || (ctx_r1.applyPortfolio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "button", 26);
    \u0275\u0275listener("click", function InstructorDashboard_Conditional_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showApply.set(false));
    });
    \u0275\u0275text(8, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function InstructorDashboard_Conditional_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyInstructor());
    });
    \u0275\u0275text(10, "\u0625\u0631\u0633\u0627\u0644");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applyBio);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applyPortfolio);
  }
}
function InstructorDashboard_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28)(2, "h3", 22);
    \u0275\u0275text(3, "\u0625\u0646\u0634\u0627\u0621 \u062F\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboard_Conditional_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.title, $event) || (ctx_r1.newCourse.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboard_Conditional_17_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.description, $event) || (ctx_r1.newCourse.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboard_Conditional_17_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.price, $event) || (ctx_r1.newCourse.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboard_Conditional_17_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.level, $event) || (ctx_r1.newCourse.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 34);
    \u0275\u0275text(10, "\u0645\u0628\u062A\u062F\u0626");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 35);
    \u0275\u0275text(12, "\u0645\u062A\u0648\u0633\u0637");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 36);
    \u0275\u0275text(14, "\u0645\u062A\u0642\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 37);
    \u0275\u0275text(16, "\u062E\u0628\u064A\u0631");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 38)(18, "button", 26);
    \u0275\u0275listener("click", function InstructorDashboard_Conditional_17_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate.set(false));
    });
    \u0275\u0275text(19, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 27);
    \u0275\u0275listener("click", function InstructorDashboard_Conditional_17_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCourse());
    });
    \u0275\u0275text(21, "\u0625\u0646\u0634\u0627\u0621");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.description);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.price);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.level);
  }
}
var InstructorDashboard = class _InstructorDashboard {
  auth = inject(AuthService);
  coursesApi = inject(CourseService);
  approvalsApi = inject(ApprovalService);
  notifications = inject(NotificationService);
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : (
    /* istanbul ignore next */
    []
  ));
  showApply = signal(false, ...ngDevMode ? [{ debugName: "showApply" }] : (
    /* istanbul ignore next */
    []
  ));
  showCreate = signal(false, ...ngDevMode ? [{ debugName: "showCreate" }] : (
    /* istanbul ignore next */
    []
  ));
  applyBio = "";
  applyPortfolio = "";
  newCourse = {
    title: "",
    description: "",
    price: 0,
    category: "Development",
    language: "ar",
    level: "Beginner"
  };
  ngOnInit() {
    runInBrowser(() => this.loadCourses());
  }
  loadCourses() {
    this.coursesApi.list({ PageSize: 50 }).subscribe({
      next: (items) => this.courses.set(items),
      error: () => this.courses.set([])
    });
  }
  applyInstructor() {
    const bio = this.applyBio.trim();
    if (!bio) {
      this.notifications.error("\u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629");
      return;
    }
    this.approvalsApi.applyInstructor(bio, this.applyPortfolio || void 0).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u2014 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629");
        this.showApply.set(false);
      },
      error: () => this.notifications.error("\u0641\u0634\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628")
    });
  }
  createCourse() {
    if (!this.newCourse.title.trim()) {
      this.notifications.error("\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062F\u0648\u0631\u0629 \u0645\u0637\u0644\u0648\u0628");
      return;
    }
    this.coursesApi.create(__spreadValues({
      instructorProfileId: this.auth.user()?.id
    }, this.newCourse)).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062F\u0648\u0631\u0629");
        this.showCreate.set(false);
        this.newCourse = { title: "", description: "", price: 0, category: "Development", language: "ar", level: "Beginner" };
        this.loadCourses();
      },
      error: () => this.notifications.error("\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062F\u0648\u0631\u0629")
    });
  }
  publishCourse(id) {
    this.coursesApi.publish(id).subscribe({
      next: () => {
        this.notifications.success("\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062F\u0648\u0631\u0629 \u0644\u0644\u0645\u0648\u0627\u0641\u0642\u0629");
        this.loadCourses();
      },
      error: () => this.notifications.error("\u0641\u0634\u0644 \u0646\u0634\u0631 \u0627\u0644\u062F\u0648\u0631\u0629")
    });
  }
  static \u0275fac = function InstructorDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDashboard, selectors: [["app-instructor-dashboard"]], decls: 18, vars: 3, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-6", "lg:p-10"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-2xl", "font-bold", "text-text-dark", "font-display"], [1, "text-text-light", "text-sm", "mt-1"], [1, "flex", "gap-2"], ["type", "button", 1, "text-sm", "border", "border-primary", "text-primary", "px-4", "py-2", "rounded-xl", "hover:bg-primary/5", 3, "click"], ["type", "button", 1, "text-sm", "bg-primary", "text-white", "px-4", "py-2", "rounded-xl", "hover:bg-primary-dark", 3, "click"], [1, "bg-warm-white", "rounded-2xl", "p-10", "text-center", "femora-shadow"], [1, "grid", "md:grid-cols-2", "gap-4"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "text-text-medium", "mb-4"], ["type", "button", 1, "bg-primary", "text-white", "px-6", "py-2", "rounded-xl", 3, "click"], [1, "bg-warm-white", "rounded-2xl", "p-5", "femora-shadow", "border", "border-sand/40"], [1, "font-bold", "text-text-dark"], [1, "text-xs", "text-text-light", "mt-1"], [1, "flex", "gap-2", "mt-4"], [1, "text-xs", "border", "border-sand", "px-3", "py-1.5", "rounded-lg", 3, "routerLink"], ["type", "button", 1, "text-xs", "bg-primary", "text-white", "px-3", "py-1.5", "rounded-lg"], [1, "text-xs", "bg-success/10", "text-success", "px-3", "py-1.5", "rounded-lg"], ["type", "button", 1, "text-xs", "bg-primary", "text-white", "px-3", "py-1.5", "rounded-lg", 3, "click"], [1, "bg-warm-white", "rounded-2xl", "p-6", "w-full", "max-w-lg", "femora-shadow"], [1, "font-bold", "text-text-dark", "mb-4"], ["rows", "4", "maxlength", "1000", "placeholder", "\u0627\u0643\u062A\u0628\u064A \u0646\u0628\u0630\u0629 \u0639\u0646 \u062E\u0628\u0631\u062A\u0643...", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", "mb-3", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "\u0631\u0627\u0628\u0637 Portfolio (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", "mb-4", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "justify-end"], ["type", "button", 1, "px-4", "py-2", "text-sm", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-sm", "bg-primary", "text-white", "rounded-xl", 3, "click"], [1, "bg-warm-white", "rounded-2xl", "p-6", "w-full", "max-w-lg", "femora-shadow", "max-h-[90vh]", "overflow-y-auto"], [1, "space-y-3"], ["placeholder", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062F\u0648\u0631\u0629", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "\u0627\u0644\u0648\u0635\u0641", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "\u0627\u0644\u0633\u0639\u0631", 1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", 3, "ngModelChange", "ngModel"], [1, "w-full", "border", "border-sand", "rounded-xl", "p-3", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Advanced"], ["value", "Expert"], [1, "flex", "gap-2", "justify-end", "mt-4"]], template: function InstructorDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
      \u0275\u0275text(6, "\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0627\u0644\u0645\u062F\u0631\u0628\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275listener("click", function InstructorDashboard_Template_button_click_10_listener() {
        return ctx.showApply.set(true);
      });
      \u0275\u0275text(11, " \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function InstructorDashboard_Template_button_click_12_listener() {
        return ctx.showCreate.set(true);
      });
      \u0275\u0275text(13, " + \u062F\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, InstructorDashboard_Conditional_14_Template, 5, 0, "div", 8)(15, InstructorDashboard_Conditional_15_Template, 3, 0, "div", 9);
      \u0275\u0275conditionalCreate(16, InstructorDashboard_Conditional_16_Template, 11, 2, "div", 10);
      \u0275\u0275conditionalCreate(17, InstructorDashboard_Conditional_17_Template, 22, 4, "div", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.courses().length === 0 ? 14 : 15);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showApply() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCreate() ? 17 : -1);
    }
  }, dependencies: [Sidebar, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorDashboard, [{
    type: Component,
    args: [{ selector: "app-instructor-dashboard", standalone: true, imports: [Sidebar, FormsModule, RouterLink], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />

  <main class="flex-1 p-6 lg:p-10">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-text-dark font-display">\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0627\u0644\u0645\u062F\u0631\u0628\u0629</h1>
        <p class="text-text-light text-sm mt-1">\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A</p>
      </div>
      <div class="flex gap-2">
        <button type="button" (click)="showApply.set(true)" class="text-sm border border-primary text-primary px-4 py-2 rounded-xl hover:bg-primary/5">
          \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642
        </button>
        <button type="button" (click)="showCreate.set(true)" class="text-sm bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-dark">
          + \u062F\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629
        </button>
      </div>
    </div>

    @if (courses().length === 0) {
      <div class="bg-warm-white rounded-2xl p-10 text-center femora-shadow">
        <p class="text-text-medium mb-4">\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0648\u0631\u0627\u062A \u0628\u0639\u062F</p>
        <button type="button" (click)="showCreate.set(true)" class="bg-primary text-white px-6 py-2 rounded-xl">\u0623\u0646\u0634\u0626\u064A \u062F\u0648\u0631\u062A\u0643 \u0627\u0644\u0623\u0648\u0644\u0649</button>
      </div>
    } @else {
      <div class="grid md:grid-cols-2 gap-4">
        @for (course of courses(); track course.id) {
          <div class="bg-warm-white rounded-2xl p-5 femora-shadow border border-sand/40">
            <h3 class="font-bold text-text-dark">{{ course.title }}</h3>
            <p class="text-xs text-text-light mt-1">{{ course.category }} \xB7 {{ course.level }}</p>
            <div class="flex gap-2 mt-4">
              <a [routerLink]="['/courses', course.id]" class="text-xs border border-sand px-3 py-1.5 rounded-lg">\u0639\u0631\u0636</a>
              @if (course.isPublished !== true) {
                <button type="button" (click)="publishCourse(course.id)" class="text-xs bg-primary text-white px-3 py-1.5 rounded-lg">\u0646\u0634\u0631</button>
              } @else {
                <span class="text-xs bg-success/10 text-success px-3 py-1.5 rounded-lg">\u0645\u0646\u0634\u0648\u0631\u0629</span>
              }
            </div>
          </div>
        }
      </div>
    }

    @if (showApply()) {
      <div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
        <div class="bg-warm-white rounded-2xl p-6 w-full max-w-lg femora-shadow">
          <h3 class="font-bold text-text-dark mb-4">\u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0642\u0642 \u0643\u0645\u062F\u0631\u0628\u0629</h3>
          <textarea [(ngModel)]="applyBio" rows="4" maxlength="1000" class="w-full border border-sand rounded-xl p-3 text-sm mb-3" placeholder="\u0627\u0643\u062A\u0628\u064A \u0646\u0628\u0630\u0629 \u0639\u0646 \u062E\u0628\u0631\u062A\u0643..."></textarea>
          <input [(ngModel)]="applyPortfolio" type="url" class="w-full border border-sand rounded-xl p-3 text-sm mb-4" placeholder="\u0631\u0627\u0628\u0637 Portfolio (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" />
          <div class="flex gap-2 justify-end">
            <button type="button" (click)="showApply.set(false)" class="px-4 py-2 text-sm">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="button" (click)="applyInstructor()" class="px-4 py-2 text-sm bg-primary text-white rounded-xl">\u0625\u0631\u0633\u0627\u0644</button>
          </div>
        </div>
      </div>
    }

    @if (showCreate()) {
      <div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
        <div class="bg-warm-white rounded-2xl p-6 w-full max-w-lg femora-shadow max-h-[90vh] overflow-y-auto">
          <h3 class="font-bold text-text-dark mb-4">\u0625\u0646\u0634\u0627\u0621 \u062F\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629</h3>
          <div class="space-y-3">
            <input [(ngModel)]="newCourse.title" class="w-full border border-sand rounded-xl p-3 text-sm" placeholder="\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062F\u0648\u0631\u0629" />
            <textarea [(ngModel)]="newCourse.description" rows="3" class="w-full border border-sand rounded-xl p-3 text-sm" placeholder="\u0627\u0644\u0648\u0635\u0641"></textarea>
            <input [(ngModel)]="newCourse.price" type="number" class="w-full border border-sand rounded-xl p-3 text-sm" placeholder="\u0627\u0644\u0633\u0639\u0631" />
            <select [(ngModel)]="newCourse.level" class="w-full border border-sand rounded-xl p-3 text-sm">
              <option value="Beginner">\u0645\u0628\u062A\u062F\u0626</option>
              <option value="Intermediate">\u0645\u062A\u0648\u0633\u0637</option>
              <option value="Advanced">\u0645\u062A\u0642\u062F\u0645</option>
              <option value="Expert">\u062E\u0628\u064A\u0631</option>
            </select>
          </div>
          <div class="flex gap-2 justify-end mt-4">
            <button type="button" (click)="showCreate.set(false)" class="px-4 py-2 text-sm">\u0625\u0644\u063A\u0627\u0621</button>
            <button type="button" (click)="createCourse()" class="px-4 py-2 text-sm bg-primary text-white rounded-xl">\u0625\u0646\u0634\u0627\u0621</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDashboard, { className: "InstructorDashboard", filePath: "src/app/features/lms/pages/instructor-dashboard/instructor-dashboard.ts", lineNumber: 18 });
})();
export {
  InstructorDashboard
};
//# sourceMappingURL=chunk-IPAJDF5N.mjs.map
