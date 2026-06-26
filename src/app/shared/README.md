# Shared Module

## Overview
The Shared module contains reusable UI components, pipes, and directives that are used across multiple feature modules. These are common building blocks that should not have any business logic.

## Folder Structure

```
shared/
├── components/              → Reusable UI components
│   ├── navbar/              → Navigation bar
│   ├── sidebar/             → Sidebar/navigation drawer
│   ├── card/                → Card component for content containers
│   └── modal/               → Modal dialog component
├── pipes/                   → Custom pipes for data transformation
└── directives/              → Custom directives for DOM manipulation
```

## Key Principles

- **Reusability**: Components should be generic and configurable
- **No Business Logic**: UI components should not import from Features
- **Self-Contained**: Each component should have its own styles
- **Documented**: Each component should have usage examples
- **Accessible**: Components should follow accessibility guidelines (a11y)

## Components

### Core Components
- **Navbar**: Application header with navigation
- **Sidebar**: Side navigation menu
- **Card**: Flexible container component
- **Modal**: Dialog/popup component

## Pipes

Create pipes for common data transformations:
- Currency formatting
- Date formatting
- Text truncation
- Custom filters

## Directives

Create directives for common DOM interactions:
- Click handlers
- Focus management
- Visibility toggles
- Custom validators

## Usage

Import the Shared module in feature modules:

```typescript
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, ...]
})
export class FeatureModule { }
```

Or import individual components:

```typescript
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
```

## Best Practices

- Keep components presentational and dumb
- Use `@Input()` and `@Output()` for component communication
- Document component inputs and outputs
- Write unit tests for pipes and directives
- Use ChangeDetectionStrategy.OnPush for better performance
