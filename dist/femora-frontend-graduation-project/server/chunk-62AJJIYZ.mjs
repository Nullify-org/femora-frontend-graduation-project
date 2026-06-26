import './polyfills.server.mjs';
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  CourseService
} from "./chunk-OMOOG6AX.mjs";
import {
  courseEmoji,
  formatPrice
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/lms/pages/course-catalog/course-catalog.ts
var _c0 = (a0) => ["/lms/course", a0];
var _forTrack0 = ($index, $item) => $item.id;
function CourseCatalog_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CourseCatalog_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function CourseCatalog_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0648\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd();
  }
}
function CourseCatalog_Conditional_15_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r2.category);
  }
}
function CourseCatalog_Conditional_15_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r2.level);
  }
}
function CourseCatalog_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "h3", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CourseCatalog_Conditional_15_For_2_Conditional_6_Template, 2, 1, "p", 15);
    \u0275\u0275elementStart(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, CourseCatalog_Conditional_15_For_2_Conditional_10_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, course_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.courseEmoji(course_r2.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r2.category ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(course_r2.price));
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r2.level ? 10 : -1);
  }
}
function CourseCatalog_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, CourseCatalog_Conditional_15_For_2_Template, 11, 8, "a", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.courses);
  }
}
var CourseCatalog = class _CourseCatalog {
  coursesApi = inject(CourseService);
  courses = [];
  isLoading = true;
  errorMessage = "";
  search = "";
  formatPrice = formatPrice;
  courseEmoji = courseEmoji;
  constructor() {
    runInBrowser(() => this.loadCourses());
  }
  loadCourses() {
    this.isLoading = true;
    this.errorMessage = "";
    const params = { PageSize: 24 };
    if (this.search.trim())
      params["Search"] = this.search.trim();
    this.coursesApi.list(params).subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062F\u0648\u0631\u0627\u062A";
        this.isLoading = false;
      }
    });
  }
  onSearch() {
    this.loadCourses();
  }
  static \u0275fac = function CourseCatalog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseCatalog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseCatalog, selectors: [["app-course-catalog"]], decls: 16, vars: 3, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-6xl", "mx-auto"], [1, "text-2xl", "font-bold", "text-navy", "font-display"], [1, "text-terracotta-dark", "mt-2", "mb-6"], [1, "mb-8", "flex", "gap-3", 3, "ngSubmit"], ["type", "search", "name", "search", "placeholder", "\u0627\u0628\u062D\u062B\u064A \u0639\u0646 \u062F\u0648\u0631\u0629...", 1, "flex-1", "border", "border-blush", "rounded-xl", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-terracotta/30", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "bg-terracotta", "text-white", "px-6", "py-3", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mb-6"], [1, "text-terracotta-dark", "text-center", "py-12"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-white", "rounded-2xl", "overflow-hidden", "femora-shadow", "border", "border-blush/30", "hover:-translate-y-1", "transition-transform", "block", 3, "routerLink"], [1, "h-36", "bg-gradient-to-br", "from-blush", "to-cream", "flex", "items-center", "justify-center", "text-5xl"], [1, "p-5"], [1, "font-bold", "text-navy", "font-display"], [1, "text-xs", "text-terracotta-dark", "mt-1"], [1, "flex", "items-center", "justify-between", "mt-4"], [1, "text-terracotta", "font-bold", "text-sm"], [1, "text-xs", "bg-cream", "px-2", "py-1", "rounded-lg", "text-terracotta-dark"]], template: function CourseCatalog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "\u0643\u062A\u0627\u0644\u0648\u062C \u0627\u0644\u062F\u0648\u0631\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "\u0627\u0633\u062A\u0643\u0634\u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0648\u0627\u0628\u062F\u0626\u064A \u0627\u0644\u062A\u0639\u0644\u0651\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 5);
      \u0275\u0275listener("ngSubmit", function CourseCatalog_Template_form_ngSubmit_8_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementStart(9, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CourseCatalog_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275text(11, " \u0628\u062D\u062B ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, CourseCatalog_Conditional_12_Template, 2, 1, "div", 8);
      \u0275\u0275conditionalCreate(13, CourseCatalog_Conditional_13_Template, 2, 0, "p", 9)(14, CourseCatalog_Conditional_14_Template, 2, 0, "p", 9)(15, CourseCatalog_Conditional_15_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 13 : ctx.courses.length === 0 ? 14 : 15);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseCatalog, [{
    type: Component,
    args: [{ selector: "app-course-catalog", standalone: true, imports: [CommonModule, FormsModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold text-navy font-display">\u0643\u062A\u0627\u0644\u0648\u062C \u0627\u0644\u062F\u0648\u0631\u0627\u062A</h1>
      <p class="text-terracotta-dark mt-2 mb-6">\u0627\u0633\u062A\u0643\u0634\u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0648\u0627\u0628\u062F\u0626\u064A \u0627\u0644\u062A\u0639\u0644\u0651\u0645</p>

      <form class="mb-8 flex gap-3" (ngSubmit)="onSearch()">
        <input
          type="search"
          [(ngModel)]="search"
          name="search"
          placeholder="\u0627\u0628\u062D\u062B\u064A \u0639\u0646 \u062F\u0648\u0631\u0629..."
          class="flex-1 border border-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
        />
        <button type="submit" class="bg-terracotta text-white px-6 py-3 rounded-xl font-semibold hover:bg-terracotta-dark transition">
          \u0628\u062D\u062B
        </button>
      </form>

      @if (errorMessage) {
        <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">
          {{ errorMessage }}
        </div>
      }

      @if (isLoading) {
        <p class="text-terracotta-dark text-center py-12">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
      } @else if (courses.length === 0) {
        <p class="text-terracotta-dark text-center py-12">\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0648\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>
      } @else {
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (course of courses; track course.id) {
            <a
              [routerLink]="['/lms/course', course.id]"
              class="bg-white rounded-2xl overflow-hidden femora-shadow border border-blush/30 hover:-translate-y-1 transition-transform block"
            >
              <div class="h-36 bg-gradient-to-br from-blush to-cream flex items-center justify-center text-5xl">
                {{ courseEmoji(course.category) }}
              </div>
              <div class="p-5">
                <h3 class="font-bold text-navy font-display">{{ course.title }}</h3>
                @if (course.category) {
                  <p class="text-xs text-terracotta-dark mt-1">{{ course.category }}</p>
                }
                <div class="flex items-center justify-between mt-4">
                  <span class="text-terracotta font-bold text-sm">{{ formatPrice(course.price) }}</span>
                  @if (course.level) {
                    <span class="text-xs bg-cream px-2 py-1 rounded-lg text-terracotta-dark">{{ course.level }}</span>
                  }
                </div>
              </div>
            </a>
          }
        </div>
      }
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseCatalog, { className: "CourseCatalog", filePath: "src/app/features/lms/pages/course-catalog/course-catalog.ts", lineNumber: 17 });
})();
export {
  CourseCatalog
};
//# sourceMappingURL=chunk-62AJJIYZ.mjs.map
