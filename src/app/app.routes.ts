import { Routes } from '@angular/router';
import { authGuard, guestGuard, profileSelectionGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/landing/landing').then((m) => m.Landing),
  },
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
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard').then((m) => m.Dashboard),
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
    path: 'lms/player/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/lms/pages/course-player/course-player').then((m) => m.CoursePlayer),
  },
  {
    path: 'lms/quiz/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./features/lms/pages/quiz/quiz').then((m) => m.Quiz),
  },
  {
    path: 'lms/instructor',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Instructor'] },
    loadComponent: () =>
      import('./features/lms/pages/instructor-dashboard/instructor-dashboard').then(
        (m) => m.InstructorDashboard,
      ),
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
  {
    path: 'marketplace/seller',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Seller'] },
    loadComponent: () =>
      import('./features/marketplace/pages/seller-dashboard/seller-dashboard').then(
        (m) => m.SellerDashboard,
      ),
  },
  {
    path: 'ai/chat',
    canActivate: [authGuard],
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
