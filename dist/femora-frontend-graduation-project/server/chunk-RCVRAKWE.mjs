import './polyfills.server.mjs';
import {
  EnrollmentService
} from "./chunk-ODBVHNPW.mjs";
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
  NotificationService
} from "./chunk-MTCE2STO.mjs";
import {
  AuthService
} from "./chunk-RERPWI7G.mjs";
import "./chunk-YG65EQOF.mjs";
import "./chunk-JJI23ZKM.mjs";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Router,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/lms/pages/course-details/course-details.ts
var _c0 = (a0) => ["/lms/player", a0];
function CourseDetails_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CourseDetails_Conditional_8_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.course.level, " ");
  }
}
function CourseDetails_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CourseDetails_Conditional_8_Conditional_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.course.category, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.course.level ? 2 : -1);
  }
}
function CourseDetails_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.course.description);
  }
}
function CourseDetails_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CourseDetails_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1, " \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062F\u0648\u0631\u0629 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r0.course.id));
  }
}
function CourseDetails_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CourseDetails_Conditional_8_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.enroll());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.isEnrolling);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEnrolling ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0633\u062C\u064A\u0644..." : "\u0633\u062C\u0651\u0644\u064A \u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0629", " ");
  }
}
function CourseDetails_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "h1", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CourseDetails_Conditional_8_Conditional_6_Template, 3, 2, "p", 10);
    \u0275\u0275conditionalCreate(7, CourseDetails_Conditional_8_Conditional_7_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, CourseDetails_Conditional_8_Conditional_10_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275conditionalCreate(12, CourseDetails_Conditional_8_Conditional_12_Template, 2, 3, "a", 15)(13, CourseDetails_Conditional_8_Conditional_13_Template, 2, 2, "button", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.courseEmoji(ctx_r0.course.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.course.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.course.category || ctx_r0.course.level ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.course.description ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.course.price));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMessage ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isEnrolled ? 12 : 13);
  }
}
var CourseDetails = class _CourseDetails {
  route = inject(ActivatedRoute);
  router = inject(Router);
  coursesApi = inject(CourseService);
  enrollmentsApi = inject(EnrollmentService);
  auth = inject(AuthService);
  notifications = inject(NotificationService);
  course = null;
  isLoading = true;
  isEnrolling = false;
  isEnrolled = false;
  errorMessage = "";
  formatPrice = formatPrice;
  courseEmoji = courseEmoji;
  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get("id");
      if (!id) {
        this.errorMessage = "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u062F\u0648\u0631\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D";
        this.isLoading = false;
        return;
      }
      this.coursesApi.getById(id).subscribe({
        next: (course) => {
          this.course = course;
          this.isLoading = false;
          if (this.auth.isAuthenticated()) {
            this.checkEnrollment(id);
          }
        },
        error: () => {
          this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062F\u0648\u0631\u0629";
          this.isLoading = false;
        }
      });
    });
  }
  enroll() {
    if (!this.course)
      return;
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.isEnrolling = true;
    this.enrollmentsApi.enroll(this.course.id).subscribe({
      next: () => {
        this.isEnrolling = false;
        this.isEnrolled = true;
        this.notifications.success("\u062A\u0645 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D!");
        this.router.navigate(["/lms/player", this.course.id]);
      },
      error: (err) => {
        this.isEnrolling = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0629";
      }
    });
  }
  checkEnrollment(courseId) {
    this.enrollmentsApi.isEnrolled(courseId).subscribe({
      next: (enrolled) => this.isEnrolled = enrolled
    });
  }
  static \u0275fac = function CourseDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetails)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetails, selectors: [["app-course-details"]], decls: 9, vars: 1, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-3xl", "mx-auto"], ["routerLink", "/lms/catalog", 1, "text-terracotta", "hover:underline", "text-sm", "mb-6", "inline-block"], [1, "text-terracotta-dark"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "rounded-xl", "px-4", "py-3"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "overflow-hidden"], [1, "h-48", "bg-gradient-to-br", "from-blush", "to-cream", "flex", "items-center", "justify-center", "text-7xl"], [1, "p-8"], [1, "text-3xl", "font-bold", "text-navy", "font-display"], [1, "text-sm", "text-terracotta-dark", "mt-2"], [1, "text-terracotta-dark", "mt-4", "leading-relaxed"], [1, "text-2xl", "font-bold", "text-terracotta", "mt-6"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mt-4"], [1, "flex", "gap-3", "mt-6"], [1, "bg-terracotta", "text-white", "px-6", "py-3", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", 3, "routerLink"], ["type", "button", 1, "bg-terracotta", "text-white", "px-6", "py-3", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", 3, "disabled"], ["type", "button", 1, "bg-terracotta", "text-white", "px-6", "py-3", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", 3, "click", "disabled"]], template: function CourseDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "a", 3);
      \u0275\u0275text(5, "\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u062A");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, CourseDetails_Conditional_6_Template, 2, 0, "p", 4)(7, CourseDetails_Conditional_7_Template, 2, 1, "div", 5)(8, CourseDetails_Conditional_8_Template, 14, 7, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isLoading ? 6 : ctx.errorMessage && !ctx.course ? 7 : ctx.course ? 8 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetails, [{
    type: Component,
    args: [{ selector: "app-course-details", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-3xl mx-auto">
      <a routerLink="/lms/catalog" class="text-terracotta hover:underline text-sm mb-6 inline-block">\u2190 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u062A</a>

      @if (isLoading) {
        <p class="text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
      } @else if (errorMessage && !course) {
        <div class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3">{{ errorMessage }}</div>
      } @else if (course) {
        <div class="bg-white rounded-2xl femora-shadow border border-blush/30 overflow-hidden">
          <div class="h-48 bg-gradient-to-br from-blush to-cream flex items-center justify-center text-7xl">
            {{ courseEmoji(course.category) }}
          </div>
          <div class="p-8">
            <h1 class="text-3xl font-bold text-navy font-display">{{ course.title }}</h1>
            @if (course.category || course.level) {
              <p class="text-sm text-terracotta-dark mt-2">
                {{ course.category }} @if (course.level) { \xB7 {{ course.level }} }
              </p>
            }
            @if (course.description) {
              <p class="text-terracotta-dark mt-4 leading-relaxed">{{ course.description }}</p>
            }
            <p class="text-2xl font-bold text-terracotta mt-6">{{ formatPrice(course.price) }}</p>

            @if (errorMessage) {
              <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mt-4">
                {{ errorMessage }}
              </div>
            }

            <div class="flex gap-3 mt-6">
              @if (isEnrolled) {
                <a
                  [routerLink]="['/lms/player', course.id]"
                  class="bg-terracotta text-white px-6 py-3 rounded-xl font-semibold hover:bg-terracotta-dark transition"
                >
                  \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062F\u0648\u0631\u0629
                </a>
              } @else {
                <button
                  type="button"
                  (click)="enroll()"
                  [disabled]="isEnrolling"
                  class="bg-terracotta text-white px-6 py-3 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-60"
                >
                  {{ isEnrolling ? '\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0633\u062C\u064A\u0644...' : '\u0633\u062C\u0651\u0644\u064A \u0641\u064A \u0627\u0644\u062F\u0648\u0631\u0629' }}
                </button>
              }
            </div>
          </div>
        </div>
      }
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetails, { className: "CourseDetails", filePath: "src/app/features/lms/pages/course-details/course-details.ts", lineNumber: 20 });
})();
export {
  CourseDetails
};
//# sourceMappingURL=chunk-RCVRAKWE.mjs.map
