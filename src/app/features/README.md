# Features Module

## Overview
Features are lazy-loaded modules that implement domain-specific functionality. Each feature module is self-contained with its own routing, components, services, and business logic.

## Feature Modules

```
features/
├── auth/              → Authentication (Login, Signup, Onboarding)
├── profile/           → User profiles (Seller, Instructor, Trainee, Preferences)
├── dashboard/         → Main dashboard with widgets
├── lms/               → Learning Management System (Courses, Lessons, Quizzes)
├── marketplace/       → E-commerce (Products, Cart, Orders)
├── ai-assistant/      → AI chatbot with RAG
└── messaging/         → User-to-user messaging
```

## Feature Module Structure

Each feature module follows this structure:

```
feature-name/
├── pages/              → Page components (routed components)
├── components/         → Feature-specific components
├── services/           → Feature business logic services
├── models/             → Feature-specific models (optional)
├── feature-routing.module.ts  → Feature routing configuration
└── feature.module.ts   → Feature module definition
```

## Key Principles

### Lazy Loading
Features are lazy-loaded for better initial load time and better code splitting.

```typescript
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
```

### Isolation
- Each feature module imports SharedModule for UI components
- Feature modules should not import from other feature modules
- Communication between features happens through services in Core

### Self-Contained Services
- Create services within the feature for feature-specific business logic
- Use Core services for common functionality
- Provide services at feature module level (not 'root')

## Feature Module Template

```typescript
// feature.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';

// Import pages and components
import { FeaturePage } from './pages/feature/feature.page';

@NgModule({
  declarations: [FeaturePage],
  imports: [CommonModule, SharedModule, FeatureRoutingModule]
})
export class FeatureModule { }
```

## Adding a New Feature

1. Create feature folder in `features/`
2. Create `pages/` and `services/` folders
3. Create `feature.module.ts` and `feature-routing.module.ts`
4. Add lazy-load route to root app routing
5. Document the feature in this README

## Navigation Between Features

Use router for navigation:

```typescript
constructor(private router: Router) {}

goToFeature() {
  this.router.navigate(['/feature-name']);
}
```
