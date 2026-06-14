# FemoraFrontendGraduationProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



made by Mohamed Mostafa 
Project Structure based on  Last Updated ERD 

src/app/
│
├── core/                          → خدمات أساسية + يتحمل مرة واحدة فقط
│   ├── auth/
│   │   ├── auth.service.ts        → Login, Signup, Refresh Token
│   │   ├── auth.guard.ts          → حماية المسارات حسب الدخول
│   │   ├── role.guard.ts          → حماية حسب الدور (Buyer/Seller/Instructor)
│   │   └── jwt.interceptor.ts     → إضافة التوكن لكل Request
│   ├── models/                    → Interfaces مشتركة (User, Course, Product...)
│   └── services/
│       ├── notification.service.ts
│       └── storage.service.ts
│
├── shared/                         → كومبونانتس وعناصر UI مشتركة
│   ├── components/
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── card/
│   │   └── modal/
│   ├── pipes/
│   └── directives/
│
├── features/
│   │
│   ├── auth/                       → Sign Up, Login, Verification, Onboarding
│   │   ├── pages/
│   │   │   ├── sign-up/
│   │   │   ├── login/
│   │   │   ├── interests/          (شاشة 3: What are you interested in)
│   │   │   ├── goal/                (شاشة 4: Your goal)
│   │   │   └── verify-email/
│   │   ├── auth-routing.module.ts
│   │   └── auth.module.ts
│   │
│   ├── profile/                    → SellerProfile / InstructorProfile / TraineeProfile / Preferences
│   │   ├── pages/
│   │   │   ├── seller-profile/
│   │   │   ├── instructor-profile/
│   │   │   ├── trainee-profile/
│   │   │   └── preferences/
│   │   ├── services/profile.service.ts
│   │   └── profile.module.ts
│   │
│   ├── dashboard/                  → الشاشة الرئيسية بعد تسجيل الدخول
│   │   ├── pages/dashboard/
│   │   ├── widgets/
│   │   │   ├── continue-learning/
│   │   │   ├── recommended-products/
│   │   │   └── ai-widget/
│   │   └── dashboard.module.ts
│   │
│   ├── lms/                         → Course, Module, Lesson, Enrollment, Quiz...
│   │   ├── pages/
│   │   │   ├── course-catalog/
│   │   │   ├── course-details/
│   │   │   ├── course-player/       → عرض الـLessons والـResources
│   │   │   ├── quiz/
│   │   │   ├── assignment-submission/
│   │   │   └── instructor-dashboard/
│   │   ├── services/
│   │   │   ├── course.service.ts
│   │   │   ├── enrollment.service.ts
│   │   │   └── quiz.service.ts
│   │   ├── lms-routing.module.ts
│   │   └── lms.module.ts
│   │
│   ├── marketplace/                 → Product, Cart, Order, Payment
│   │   ├── pages/
│   │   │   ├── product-catalog/
│   │   │   ├── product-details/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   └── seller-dashboard/
│   │   ├── services/
│   │   │   ├── product.service.ts
│   │   │   ├── cart.service.ts
│   │   │   └── order.service.ts
│   │   ├── marketplace-routing.module.ts
│   │   └── marketplace.module.ts
│   │
│   ├── ai-assistant/                 → Conversation, Message, Recommendation
│   │   ├── pages/chat/
│   │   ├── components/
│   │   │   ├── chat-window/
│   │   │   ├── sources-panel/        (RAG sources)
│   │   │   └── suggestions/
│   │   ├── services/chat.service.ts
│   │   └── ai-assistant.module.ts
│   │
│   └── messaging/                    → Conversation بين Buyer/Seller/Instructor
│       ├── pages/conversations/
│       └── messaging.module.ts
│
├── app-routing.module.ts            → تجميع كل الـLazy Routes
├── app.module.ts
└── app.component.ts