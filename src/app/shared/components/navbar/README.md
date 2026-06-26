# Navbar Component

## Overview
Main navigation bar component that appears at the top of the application.

## Responsibilities
- Display application logo/branding
- Navigation links
- User profile menu
- Logout button
- Mobile hamburger menu

## Inputs
- `appTitle: string` - Application title/logo text
- `navigationItems: NavItem[]` - List of navigation links
- `userMenuEnabled: boolean` - Enable/disable user menu

## Outputs
- `logout: EventEmitter<void>` - Emitted when user clicks logout
- `navigationClick: EventEmitter<string>` - Emitted when navigation item clicked

## Usage

```typescript
<app-navbar 
  [appTitle]="'Femora'"
  [navigationItems]="navItems"
  [userMenuEnabled]="true"
  (logout)="onLogout()"
  (navigationClick)="onNavClick($event)">
</app-navbar>
```

## Styling
- Responsive design for mobile/tablet/desktop
- Sticky positioning at top
- Use Tailwind CSS for styling
