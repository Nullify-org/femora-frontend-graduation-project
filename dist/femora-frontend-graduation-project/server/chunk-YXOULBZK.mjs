import './polyfills.server.mjs';
import {
  Sidebar
} from "./chunk-ABWJUREF.mjs";
import {
  ApiClient,
  runInBrowser
} from "./chunk-F6FSQHYX.mjs";
import "./chunk-JB67WIXN.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
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
  ActivatedRoute,
  CommonModule,
  Component,
  Injectable,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2K2LDCAY.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/lms/services/quiz.service.ts
var QuizService = class _QuizService {
  api = inject(ApiClient);
  base = "/api/quizzes";
  generate(moduleId, questionCount = 5) {
    return this.api.post(`${this.base}/generate`, { moduleId, questionCount });
  }
  getById(quizId) {
    return this.api.get(`${this.base}/${quizId}`);
  }
  submit(quizId, body) {
    return this.api.post(`${this.base}/${quizId}/submit`, body);
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/lms/pages/quiz/quiz.ts
var _c0 = (a0) => ["/lms/player", a0];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.questionId;
var _forTrack1 = ($index, $item) => $item.choiceId;
function Quiz_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Quiz_Conditional_5_Template(rf, ctx) {
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
function Quiz_Conditional_6_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u062F\u0648\u0631\u0629 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r0.quiz.courseId));
  }
}
function Quiz_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Quiz_Conditional_6_Conditional_2_Conditional_7_Template, 2, 3, "a", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result.isPassed ? "\u{1F389}" : "\u{1F4DD}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.result.score, " / ", ctx_r0.result.maxScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.result.isPassed ? "\u0646\u062C\u062D\u062A\u0650 \u0641\u064A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631!" : "\u0644\u0645 \u062A\u0646\u062C\u062D\u064A \u0647\u0630\u0647 \u0627\u0644\u0645\u0631\u0629 \u2014 \u062D\u0627\u0648\u0644\u064A \u0645\u062C\u062F\u062F\u0627\u064B", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.quiz.courseId ? 7 : -1);
  }
}
function Quiz_Conditional_6_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function Quiz_Conditional_6_Conditional_3_For_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 17)(1, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function Quiz_Conditional_6_Conditional_3_For_3_For_5_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const question_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.answers[question_r4.questionId], $event) || (ctx_r0.answers[question_r4.questionId] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const choice_r5 = ctx.$implicit;
    const question_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("name", question_r4.questionId)("value", choice_r5.choiceId);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.answers[question_r4.questionId]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(choice_r5.text);
  }
}
function Quiz_Conditional_6_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, Quiz_Conditional_6_Conditional_3_For_3_For_5_Template, 4, 4, "label", 17, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(question_r4.text);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(question_r4.choices ?? \u0275\u0275pureFunction0(1, _c1));
  }
}
function Quiz_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, Quiz_Conditional_6_Conditional_3_Conditional_0_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275repeaterCreate(2, Quiz_Conditional_6_Conditional_3_For_3_Template, 6, 2, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function Quiz_Conditional_6_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.errorMessage ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.quiz.questions ?? \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644..." : "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u062C\u0627\u0628\u0627\u062A", " ");
  }
}
function Quiz_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, Quiz_Conditional_6_Conditional_2_Template, 8, 5, "div", 6)(3, Quiz_Conditional_6_Conditional_3_Template, 6, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.quiz.title ?? "\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result ? 2 : 3);
  }
}
var Quiz = class _Quiz {
  route = inject(ActivatedRoute);
  quizApi = inject(QuizService);
  auth = inject(AuthService);
  notifications = inject(NotificationService);
  quiz = null;
  answers = {};
  result = null;
  isLoading = true;
  isSubmitting = false;
  errorMessage = "";
  constructor() {
    runInBrowser(() => {
      const id = this.route.snapshot.paramMap.get("id");
      if (!id) {
        this.errorMessage = "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D";
        this.isLoading = false;
        return;
      }
      this.quizApi.getById(id).subscribe({
        next: (quiz) => {
          this.quiz = __spreadProps(__spreadValues({}, quiz), { quizId: quiz.quizId ?? id });
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631";
          this.isLoading = false;
        }
      });
    });
  }
  submit() {
    if (!this.quiz)
      return;
    const answers = Object.entries(this.answers).map(([questionId, choiceId]) => ({
      questionId,
      choiceId
    }));
    if (!answers.length) {
      this.errorMessage = "\u064A\u0631\u062C\u0649 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0644\u0649 \u0633\u0624\u0627\u0644 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.quizApi.submit(this.quiz.quizId, {
      traineeProfileId: this.auth.user()?.id,
      answers
    }).subscribe({
      next: (result) => {
        this.result = result;
        this.isSubmitting = false;
        this.notifications.success(result.isPassed ? "\u0623\u062D\u0633\u0646\u062A\u0650! \u0646\u062C\u062D\u062A\u0650 \u0641\u064A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631" : "\u062D\u0627\u0648\u0644\u064A \u0645\u0631\u0629 \u0623\u062E\u0631\u0649");
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.title ?? err?.error?.detail ?? "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u062C\u0627\u0628\u0627\u062A";
      }
    });
  }
  static \u0275fac = function Quiz_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Quiz)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Quiz, selectors: [["app-quiz"]], decls: 7, vars: 1, consts: [[1, "flex", "min-h-screen", "bg-cream-light"], [1, "flex-1", "p-8"], [1, "max-w-2xl", "mx-auto"], [1, "text-terracotta-dark"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "rounded-xl", "px-4", "py-3"], [1, "text-2xl", "font-bold", "text-navy", "font-display", "mb-2"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-8", "text-center"], [1, "text-4xl", "mb-4"], [1, "text-xl", "font-bold", "text-navy"], [1, "text-terracotta-dark", "mt-2"], [1, "inline-block", "mt-6", "text-terracotta", "hover:underline", 3, "routerLink"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "text-sm", "rounded-xl", "px-4", "py-3", "mb-4"], [1, "space-y-6"], [1, "bg-white", "rounded-2xl", "femora-shadow", "border", "border-blush/30", "p-6"], ["type", "button", 1, "w-full", "mt-8", "bg-terracotta", "text-white", "py-3.5", "rounded-xl", "font-semibold", "hover:bg-terracotta-dark", "transition", "disabled:opacity-60", 3, "click", "disabled"], [1, "font-semibold", "text-navy", "mb-4"], [1, "space-y-2"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-cream", "cursor-pointer"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel"], [1, "text-sm", "text-terracotta-dark"]], template: function Quiz_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2);
      \u0275\u0275conditionalCreate(4, Quiz_Conditional_4_Template, 2, 0, "p", 3)(5, Quiz_Conditional_5_Template, 2, 1, "div", 4)(6, Quiz_Conditional_6_Template, 4, 2);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading ? 4 : ctx.errorMessage && !ctx.quiz ? 5 : ctx.quiz ? 6 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterLink, Sidebar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Quiz, [{
    type: Component,
    args: [{ selector: "app-quiz", standalone: true, imports: [CommonModule, FormsModule, RouterLink, Sidebar], template: `<div class="flex min-h-screen bg-cream-light">
  <app-sidebar />
  <main class="flex-1 p-8">
    <div class="max-w-2xl mx-auto">
      @if (isLoading) {
        <p class="text-terracotta-dark">\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...</p>
      } @else if (errorMessage && !quiz) {
        <div class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3">{{ errorMessage }}</div>
      } @else if (quiz) {
        <h1 class="text-2xl font-bold text-navy font-display mb-2">{{ quiz.title ?? '\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631' }}</h1>

        @if (result) {
          <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-8 text-center">
            <p class="text-4xl mb-4">{{ result.isPassed ? '\u{1F389}' : '\u{1F4DD}' }}</p>
            <p class="text-xl font-bold text-navy">{{ result.score }} / {{ result.maxScore }}</p>
            <p class="text-terracotta-dark mt-2">
              {{ result.isPassed ? '\u0646\u062C\u062D\u062A\u0650 \u0641\u064A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631!' : '\u0644\u0645 \u062A\u0646\u062C\u062D\u064A \u0647\u0630\u0647 \u0627\u0644\u0645\u0631\u0629 \u2014 \u062D\u0627\u0648\u0644\u064A \u0645\u062C\u062F\u062F\u0627\u064B' }}
            </p>
            @if (quiz.courseId) {
              <a [routerLink]="['/lms/player', quiz.courseId]" class="inline-block mt-6 text-terracotta hover:underline">
                \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u062F\u0648\u0631\u0629
              </a>
            }
          </div>
        } @else {
          @if (errorMessage) {
            <div class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
              {{ errorMessage }}
            </div>
          }

          <div class="space-y-6">
            @for (question of quiz.questions ?? []; track question.questionId) {
              <div class="bg-white rounded-2xl femora-shadow border border-blush/30 p-6">
                <p class="font-semibold text-navy mb-4">{{ question.text }}</p>
                <div class="space-y-2">
                  @for (choice of question.choices ?? []; track choice.choiceId) {
                    <label class="flex items-center gap-3 p-3 rounded-xl hover:bg-cream cursor-pointer">
                      <input
                        type="radio"
                        [name]="question.questionId"
                        [value]="choice.choiceId"
                        [(ngModel)]="answers[question.questionId]"
                      />
                      <span class="text-sm text-terracotta-dark">{{ choice.text }}</span>
                    </label>
                  }
                </div>
              </div>
            }
          </div>

          <button
            type="button"
            (click)="submit()"
            [disabled]="isSubmitting"
            class="w-full mt-8 bg-terracotta text-white py-3.5 rounded-xl font-semibold hover:bg-terracotta-dark transition disabled:opacity-60"
          >
            {{ isSubmitting ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644...' : '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u062C\u0627\u0628\u0627\u062A' }}
          </button>
        }
      }
    </div>
  </main>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Quiz, { className: "Quiz", filePath: "src/app/features/lms/pages/quiz/quiz.ts", lineNumber: 18 });
})();
export {
  Quiz
};
//# sourceMappingURL=chunk-YXOULBZK.mjs.map
