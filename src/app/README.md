# App - Main Application Module

## Overview
This is the root of the Angular application structure. The app folder contains all core business logic, shared UI components, and feature modules.

## Folder Structure

```
src/app/
├── core/                  → Core services and application foundation (singleton)
├── shared/                → Shared UI components, pipes, and directives
├── features/              → Feature modules organized by domain
├── app-routing.module.ts  → Root routing configuration
├── app.module.ts          → Root module
└── app.component.ts       → Root component
```

## Key Principles

- **Single Responsibility**: Each feature module is self-contained
- **Lazy Loading**: Feature modules are lazy-loaded for better performance
- **Separation of Concerns**: Core handles business logic, Shared handles reusable UI, Features implement domain logic
- **DRY (Don't Repeat Yourself)**: Common components and pipes are in Shared

## Navigation

- Start with [core/](./core/) for authentication and base services
- See [shared/](./shared/) for reusable components
- Check [features/](./features/) for specific feature implementations
