# Shared - Components

## Overview
Reusable UI components that are shared across multiple feature modules. All components here should be presentational (dumb components) without any business logic.

## Components

### `navbar/`
Navigation bar component for application header
- Logo/branding
- Navigation links
- User menu
- Search bar (optional)

### `sidebar/`
Sidebar navigation component
- Navigation menu items
- Collapsible sections
- Active route highlighting
- Mobile-responsive toggle

### `card/`
Flexible card component for content containers
- Customizable header
- Customizable body/content
- Customizable footer
- Optional actions

### `modal/`
Modal dialog component
- Title
- Content area
- Action buttons (Confirm/Cancel)
- Close button
- Backdrop dismiss

## Component Structure

Each component should have:
```
component-name/
├── component-name.component.ts       → Component logic
├── component-name.component.html     → Template
├── component-name.component.css      → Styles
└── component-name.component.spec.ts  → Unit tests
```

## Usage Example

```typescript
// In shared.module.ts
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    ModalComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    ModalComponent
  ]
})
export class SharedModule { }
```

## Best Practices

- Use `@Input()` for configuration
- Use `@Output()` for events
- Keep styles scoped to component
- Use `OnPush` change detection
- Make components responsive
- Document `@Input()` and `@Output()` in comments
