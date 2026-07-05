import { Routes } from '@angular/router';
import { authGuard, guestGuard, profileSelectionGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';
import { adminGuard } from './core/auth/admin.guard';
import { notAdminGuard } from './core/auth/not-admin.guard';

export const routes: Routes = [
  {
  path: '',
  loadComponent: () =>
    import('./core/pages/home-redirect/home-redirect')
      .then((m) => m.HomeRedirect),
  },

  {
  path: 'landing',
  loadComponent: () =>
    import('./features/landing/pages/landing/landing')
      .then((m) => m.Landing),
  },

  { path: 'auth/login',    redirectTo: 'login',          pathMatch: 'full' },
  { path: 'auth/register', redirectTo: 'register',        pathMatch: 'full' },
  { path: 'courses',       redirectTo: 'lms/catalog',     pathMatch: 'full' },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./features/lms/pages/course-details/course-details').then((m) => m.CourseDetails),
  },
  { path: 'cart', redirectTo: 'marketplace/cart', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./features/auth/pages/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./features/auth/pages/register/register').then((m) => m.Register),
  },

  {
    path: 'forgot-password',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./features/auth/pages/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },
  {
    path: 'reset-password',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./features/auth/pages/reset-password/reset-password').then((m) => m.ResetPassword),
  },

  // ✅ Google OAuth Callback — لازم يكون بدون guard
  {
    path: 'signin-google',
    loadComponent: () =>
      import('./features/auth/pages/signin-google/signin-google').then((m) => m.SigninGoogle),
  },

  {
    path: 'verify-email',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/auth/pages/verify-email/verify-email').then((m) => m.VerifyEmail),
  },
  {
    path: 'email-verified',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/auth/pages/email-verified/email-verified').then((m) => m.EmailVerified),
  },
  {
    path: 'select-profile',
    canActivate: [profileSelectionGuard],
    loadComponent: () =>
      import('./features/auth/pages/select-profile/select-profile').then((m) => m.SelectProfile),
  },
  {
    path: 'onboarding/interests',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/auth/pages/onboarding/interests/interests').then((m) => m.Interests),
  },
  {
    path: 'onboarding/goal',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/auth/pages/onboarding/goal/goal').then((m) => m.Goal),
  },
  {
    path: 'onboarding/choose-role',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/auth/pages/choose-role/choose-role').then((m) => m.ChooseRole),
  },
  {
    path: 'onboarding/welcome',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/auth/pages/onboarding/welcome/welcome').then((m) => m.Welcome),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-redirect/dashboard-redirect').then(
            (m) => m.DashboardRedirect,
          ),
      },
      {
        path: 'trainee',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'instructor',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-dashboard/instructor-dashboard')
            .then((m) => m.InstructorDashboard),
      },
      {
        path: 'instructor/courses',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-courses/instructor-courses')
            .then((m) => m.InstructorCourses),
      },
      {
        path: 'instructor/courses/:id',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-course-details/instructor-course-details')
            .then((m) => m.InstructorCourseDetails),
      },
      {
        path: 'instructor/course-create',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-course-create/instructor-course-create')
            .then((m) => m.InstructorCourseCreate),
      },
      {
        path: 'instructor/course-edit/:id',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-course-edit/instructor-course-edit')
            .then((m) => m.InstructorCourseEdit),
      },
      {
        path: 'instructor/module-edit/:moduleId',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-module-edit/instructor-module-edit')
            .then((m) => m.InstructorModuleEdit),
      },
      {
        path: 'instructor/lesson-edit/:lessonId',
        canActivate: [roleGuard],
        data: { roles: ['Instructor'] },
        loadComponent: () =>
          import('./features/lms/pages/instructor-lesson-edit/instructor-lesson-edit')
            .then((m) => m.InstructorLessonEdit),
      },
      // -------------------------------
      {
        path: 'seller',
        canActivate: [roleGuard],
        data: { roles: ['Seller'] },
        loadComponent: () =>
          import('./features/marketplace/pages/seller-dashboard/seller-dashboard').then(
            (m) => m.SellerDashboard,
          ),
      },
      {
        path: 'seller/orders',
        redirectTo: 'seller',
        pathMatch: 'full',
      },
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./features/dashboard/pages/admin-dashboard/admin-dashboard').then(
            (m) => m.AdminDashboard,
          ),
      },
      {
        path: 'buyer',
        loadComponent: () =>
          import('./features/dashboard/pages/buyer-dashboard/buyer-dashboard').then(
            (m) => m.BuyerDashboard,
          ),
      },
      {
        path: 'users',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./features/dashboard/pages/admin-users/admin-users').then((m) => m.AdminUsers),
      },
      {
        path: 'orders',
        canActivate: [adminGuard],
        loadComponent: () =>
          import('./features/dashboard/pages/admin-orders/admin-orders').then((m) => m.AdminOrders),
      },
      // TODO: Products/Courses/Reports admin pages aren't built yet — point them at the
      // admin dashboard for now instead of letting the wildcard route bounce to landing.
      { path: 'products', redirectTo: '/dashboard/admin' },
      { path: 'courses', redirectTo: '/dashboard/admin' },
      { path: 'reports', redirectTo: '/dashboard/admin' },
    ],
  },
  {
    path: 'lms/catalog',
    loadComponent: () =>
      import('./features/lms/pages/course-catalog/course-catalog').then((m) => m.CourseCatalog),
  },
  {
    path: 'lms/course/:id',
    loadComponent: () =>
      import('./features/lms/pages/course-details/course-details').then((m) => m.CourseDetails),
  },

  {
    path: 'lms/player/:enrollmentId',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/lms/pages/course-player/course-player').then((m) => m.CoursePlayer),
  },
  {
    path: 'lms/player/:enrollmentId/lesson/:lessonId',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/lms/pages/lesson-player/lesson-player').then((m) => m.LessonPlayer),
  },
  {
    path: 'lms/my-learning',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './features/lms/pages/my-learning/my-learning'
      ).then(
        (m) => m.MyLearning
      ),
  },
  {
    path: 'lms/quiz/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/lms/pages/quiz/quiz').then((m) => m.Quiz),
  },
//   { path: 'lms/instructor',       redirectTo: 'dashboard/instructor', pathMatch: 'full' },

  {
    path: 'lms/instructor',
    redirectTo: 'dashboard/instructor',
    pathMatch: 'full',
  },
  {
    path: 'marketplace/catalog',
    loadComponent: () =>
      import('./features/marketplace/pages/product-catalog/product-catalog').then(
        (m) => m.ProductCatalog,
      ),
  },
  {
    path: 'marketplace/product/:id',
    loadComponent: () =>
      import('./features/marketplace/pages/product-details/product-details').then(
        (m) => m.ProductDetails,
      ),
  },
  {
    path: 'marketplace/cart',
    canActivate: [authGuard],
    loadComponent: () => import('./features/marketplace/pages/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'marketplace/checkout',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/marketplace/pages/checkout/checkout').then((m) => m.Checkout),
  },
  { path: 'marketplace/seller', redirectTo: 'dashboard/seller', pathMatch: 'full' },
  {
    path: 'payment-success',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/payments/pages/payment-success/payment-success').then(
        (m) => m.PaymentSuccess,
      ),
  },
  {
    path: 'payment-cancel',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/payments/pages/payment-cancel/payment-cancel').then(
        (m) => m.PaymentCancel,
      ),
  },
  {
    path: 'ai/chat',
    canActivate: [authGuard, notAdminGuard],
    loadComponent: () =>
      import('./features/ai-assistant/pages/chat/chat').then((m) => m.Chat),
  },
  {
    path: 'messaging',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/messaging/pages/conversations/conversations').then(
        (m) => m.Conversations,
      ),
  },
  { path: 'profile',       redirectTo: 'profile/trainee',      pathMatch: 'full' },
  {
    path: 'profile/edit',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/pages/edit-profile/edit-profile').then((m) => m.EditProfile),
  },
  { path: 'profile/settings', redirectTo: 'profile/preferences', pathMatch: 'full' },
  { path: 'dashboard/settings', redirectTo: 'profile/preferences', pathMatch: 'full' },
  {
    path: 'profile/trainee',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/pages/trainee-profile/trainee-profile').then(
        (m) => m.TraineeProfile,
      ),
  },
  {
    path: 'profile/instructor',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/pages/instructor-profile/instructor-profile').then(
        (m) => m.InstructorProfile,
      ),
  },
  {
    path: 'profile/seller',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/pages/seller-profile/seller-profile').then(
        (m) => m.SellerProfile,
      ),
  },
  {
    path: 'profile/preferences',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/pages/preferences/preferences').then((m) => m.Preferences),
  },
  { path: '**', redirectTo: '' },

  
];