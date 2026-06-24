# Core Module

## Overview
The Core module contains singleton services and core functionality that should be loaded only once in the application. This includes authentication, models, and essential application services.

## Folder Structure

```
core/
├── auth/                      → Authentication services and guards
│   ├── auth.service.ts        → Login, Signup, Token Management
│   ├── auth.guard.ts          → Route protection for authenticated users
│   ├── role.guard.ts          → Role-based access control (RBAC)
│   └── jwt.interceptor.ts     → HTTP interceptor for JWT token handling
├── models/                    → TypeScript interfaces and models
└── services/                  → Core application services
    ├── notification.service.ts → Toast/notification management
    └── storage.service.ts      → LocalStorage/SessionStorage abstraction
```

## Key Responsibilities

### Authentication (`auth/`)
- User login/logout/signup
- JWT token management and refresh
- Route protection based on authentication status
- Role-based route protection (Buyer, Seller, Instructor)

### Models (`models/`)
- User, Course, Product, Order interfaces
- Common data structures used across the app
- Type definitions for API responses

### Services (`services/`)
- Notification/Toast service
- Storage service for client-side data persistence

## Usage

Import services from core in your feature modules:

```typescript
import { AuthService } from '@app/core/auth/auth.service';
import { NotificationService } from '@app/core/services/notification.service';
```

## Important Notes

- Core module is imported in `AppModule` as a regular import (not lazy-loaded)
- Services are provided in Core module with `providedIn: 'root'`
- Avoid adding UI components to Core module
- Keep Core focused on business logic and infrastructure
