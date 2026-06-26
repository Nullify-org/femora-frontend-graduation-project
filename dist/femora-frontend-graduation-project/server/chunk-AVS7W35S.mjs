import './polyfills.server.mjs';
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
import "./chunk-MTCE2STO.mjs";
import "./chunk-YG65EQOF.mjs";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  RouterLink,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2K2LDCAY.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/lms/pages/course-player/course-player.ts
var _c0 = (a0) => ["/lms/course", a0];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function CoursePlayer_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function CoursePlayer_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CoursePlayer_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 15);
    \u0275\u0275text(3, " \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062F\u0631\u0633 \u0645\u062A\u0627\u062D \u0645\u0646 \u0627\u0644\u062E\u0627\u062F\u0645. \u064A\u0645\u0643\u0646\u0643\u0650 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062A\u0639\u0644\u0651\u0645 \u0648\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u064A\u0646 \u0627\u0644\u062F\u0631\u0648\u0633 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedLesson.title);
  }
}
function CoursePlayer_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "\u0627\u062E\u062A\u0631\u0650\u064A \u062F\u0631\u0633\u0627\u064B \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0644\u0644\u0628\u062F\u0621.");
    \u0275\u0275elementEnd();
  }
}
function CoursePlayer_Conditional_6_Conditional_12_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CoursePlayer_Conditional_6_Conditional_12_For_2_For_5_Template_button_click_0_listener() {
      const lesson_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectLesson(lesson_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-terracotta", (ctx_r0.selectedLesson == null ? null : ctx_r0.selectedLesson.id) === lesson_r3.id)("text-white", (ctx_r0.selectedLesson == null ? null : ctx_r0.selectedLesson.id) === lesson_r3.id)("hover:bg-cream", (ctx_r0.selectedLesson == null ? null : ctx_r0.selectedLesson.id) !== lesson_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lesson_r3.title, " ");
  }
}
function CoursePlayer_Conditional_6_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, CoursePlayer_Conditional_6_Conditional_12_For_2_For_5_Template, 2, 7, "button", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(module_r4.lessons ?? \u0275\u0275pureFunction0(1, _c1));
  }
}
function CoursePlayer_Conditional_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, CoursePlayer_Conditional_6_Conditional_12_For_2_Template, 6, 2, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.course.modules);
  }
}
function CoursePlayer_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u062D\u062F\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u0628\u0639\u062F.");
    \u0275\u0275elementEnd();
  }
}
function CoursePlayer_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 6);
    \u0275\u0275text(2, "\u2190 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062F\u0648\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "div", 9);
    \u0275\u0275conditionalCreate(7, CoursePlayer_Conditional_6_Conditional_7_Template, 4, 1)(8, CoursePlayer_Conditional_6_Conditional_8_Template, 2, 0, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "h3", 11);
    \u0275\u0275text(11, "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062F\u0648\u0631\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CoursePlayer_Conditional_6_Conditional_12_Template, 3, 0, "div", 12)(13, CoursePlayer_Conditional_6_Conditional_13_Template, 2, 0, "p", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx_r0.course.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.course.title);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.selectedLesson ? 7 : 8);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((ctx_r0.course.modules == null ? null : ctx_r0.course.modules.length) ? 12 : 13);
  }
}
var CoursePlayer = class _CoursePlayer {
  route = inject(ActivatedRoute);
  coursesApi = inject(CourseService);
  course = null;
  selectedLesson = null;
  isLoading = true;
  errorMessage = "";
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
          this.selectedLesson = course.modules?.[0]?.lessons?.[0] ?? null;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062F\u0648\u0631\u0629";
          this.isLoading = false;
        }
      });
    });
  }
  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
  static \u0275fac = function CoursePlayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursePlayer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursePlayer, selectors: [["app-course-player"]], decls: 7, vars: 1, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-5xl", "mx-auto"], [1, "text-terracotta-dark"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "rounded-xl", "px-4", "py-3"], [1, "mb-6"], [1, "text-terracotta", "hover:underline", "text-sm", 3, "routerLink"], [1, "text-2xl", "font-bold", "text-navy", "font-display", "mt-2"], [1, "grid", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-8", "min-h-64"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-5"], [1, "font-bold", "text-navy", "mb-4"], [1, "space-y-4"], [1, "text-sm", "text-terracotta-dark"], [1, "text-xl", "font-bold", "text-navy", "font-display"], [1, "text-terracotta-dark", "mt-4", "leading-relaxed"], [1, "text-sm", "font-semibold", "text-terracotta", "mb-2"], [1, "space-y-1"], ["type", "button", 1, "w-full", "text-right", "text-sm", "px-3", "py-2", "rounded-lg", "transition", 3, "bg-terracotta", "text-white", "hover:bg-cream"], ["type", "button", 1, "w-full", "text-right", "text-sm", "px-3", "py-2", "rounded-lg", "transition", 3, "click"]], template: function CoursePlayer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2);
      \u0275\u0275conditionalCreate(4, CoursePlayer_Conditional_4_Template, 2, 0, "p", 3)(5, CoursePlayer_Conditional_5_Template, 2, 1, "div", 4)(6, CoursePlayer_Conditional_6_Template, 14, 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading ? 4 : ctx.errorMessage ? 5 : ctx.course ? 6 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursePlayer, [{
    type: Component,
    args: [{ selector: "app-course-player", standalone: true, imports: [CommonModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-5xl mx-auto">
      @if (isLoading) {
        <p class="text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
      } @else if (errorMessage) {
        <div class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3">{{ errorMessage }}</div>
      } @else if (course) {
        <div class="mb-6">
          <a [routerLink]="['/lms/course', course.id]" class="text-terracotta hover:underline text-sm">\u2190 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062F\u0648\u0631\u0629</a>
          <h1 class="text-2xl font-bold text-navy font-display mt-2">{{ course.title }}</h1>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-white rounded-2xl femora-shadow border border-blush/30 p-8 min-h-64">
            @if (selectedLesson) {
              <h2 class="text-xl font-bold text-navy font-display">{{ selectedLesson.title }}</h2>
              <p class="text-terracotta-dark mt-4 leading-relaxed">
                \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062F\u0631\u0633 \u0645\u062A\u0627\u062D \u0645\u0646 \u0627\u0644\u062E\u0627\u062F\u0645. \u064A\u0645\u0643\u0646\u0643\u0650 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062A\u0639\u0644\u0651\u0645 \u0648\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u064A\u0646 \u0627\u0644\u062F\u0631\u0648\u0633 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629.
              </p>
            } @else {
              <p class="text-terracotta-dark">\u0627\u062E\u062A\u0631\u0650\u064A \u062F\u0631\u0633\u0627\u064B \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0644\u0644\u0628\u062F\u0621.</p>
            }
          </div>

          <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-5">
            <h3 class="font-bold text-navy mb-4">\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062F\u0648\u0631\u0629</h3>
            @if (course.modules?.length) {
              <div class="space-y-4">
                @for (module of course.modules; track module.id) {
                  <div>
                    <p class="text-sm font-semibold text-terracotta mb-2">{{ module.title }}</p>
                    <div class="space-y-1">
                      @for (lesson of module.lessons ?? []; track lesson.id) {
                        <button
                          type="button"
                          (click)="selectLesson(lesson)"
                          class="w-full text-right text-sm px-3 py-2 rounded-lg transition"
                          [class.bg-terracotta]="selectedLesson?.id === lesson.id"
                          [class.text-white]="selectedLesson?.id === lesson.id"
                          [class.hover:bg-cream]="selectedLesson?.id !== lesson.id"
                        >
                          {{ lesson.title }}
                        </button>
                      }
                    </div>
                  </div>
                }
              </div>
            } @else {
              <p class="text-sm text-terracotta-dark">\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u062D\u062F\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u0628\u0639\u062F.</p>
            }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursePlayer, { className: "CoursePlayer", filePath: "src/app/features/lms/pages/course-player/course-player.ts", lineNumber: 15 });
})();
export {
  CoursePlayer
};
//# sourceMappingURL=chunk-AVS7W35S.mjs.map
