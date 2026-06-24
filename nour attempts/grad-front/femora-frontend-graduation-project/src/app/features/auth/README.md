# Auth Feature Module

## Overview
The Auth feature handles all authentication-related functionality including login, signup, email verification, and user onboarding.

## Pages

### `sign-up/`
User registration page
- Email validation
- Password strength validation
- Password confirmation
- Terms & conditions acceptance
- Redirect to onboarding on success

### `login/`
User login page
- Email/password authentication
- "Remember me" option
- "Forgot password" link
- Redirect to dashboard on success

### `interests/`
Onboarding Step 3 - Select interests
- Display interest categories
- Multi-select user interests
- Save user interests
- Progress indicator

### `goal/`
Onboarding Step 4 - Select learning goal
- Display available goals (Learn, Practice, Build)
- Single-select goal
- Save user goal
- Navigation to dashboard

### `verify-email/`
Email verification page
- Email verification form
- Resend verification email
- Verification status

## Services

### `auth.service.ts`
- Provided at Core level (see [core/auth/](../../core/auth/))
- Import from Core in feature components

## Routing

```typescript
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'onboarding/interests', component: InterestsComponent },
  { path: 'onboarding/goal', component: GoalComponent }
];
```

## Usage Flow

1. User lands on `/auth` → Login page
2. New user clicks "Sign Up" → Sign-up page
3. After signup → Verify email page
4. After verification → Interests selection
5. Select goal → Dashboard

## Key Points

- No AuthGuard protection needed for auth routes
- Redirect authenticated users to dashboard
- Use Core auth.service for API calls
- Store user role and preferences after onboarding
- Use notifications for error/success messages
