# Core - Auth

## Overview
Authentication module containing services and guards for user authentication, authorization, and protected routes.

## Files

### `auth.service.ts`
**Purpose**: Main authentication service
- User registration (signup)
- User login
- User logout
- Token refresh logic
- User state management

### `auth.guard.ts`
**Purpose**: Route guard to protect routes that require authentication
- Checks if user is authenticated
- Redirects to login if not authenticated

### `role.guard.ts`
**Purpose**: Role-based access control guard
- Protects routes based on user role
- Supported roles: `BUYER`, `SELLER`, `INSTRUCTOR`, `ADMIN`
- Redirects to unauthorized page if user doesn't have required role

### `jwt.interceptor.ts`
**Purpose**: HTTP interceptor for JWT token handling
- Adds JWT token to Authorization header of all requests
- Handles token refresh on 401 responses
- Cleans up expired tokens

## Usage

### In Route Configuration
```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['BUYER', 'SELLER', 'INSTRUCTOR'] }
  }
];
```

### In Components
```typescript
constructor(private authService: AuthService) {}

login(email: string, password: string) {
  this.authService.login(email, password).subscribe(...);
}
```

## Related Files
- See [../../models/](../../models/) for User model
- See [../../services/](../../services/) for Storage service
