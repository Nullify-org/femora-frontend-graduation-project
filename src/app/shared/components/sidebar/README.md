# Sidebar Component

## Overview
Side navigation component for displaying application menu and navigation structure.

## Responsibilities
- Display navigation menu items
- Highlight active route
- Collapsible menu sections
- Mobile-responsive toggle
- User account information

## Inputs
- `menuItems: MenuItem[]` - Hierarchical menu structure
- `collapsed: boolean` - Sidebar collapse state
- `userInfo: UserInfo` - Current user information

## Outputs
- `menuItemClick: EventEmitter<string>` - Emitted when menu item clicked
- `toggleCollapse: EventEmitter<boolean>` - Emitted when collapse toggle clicked

## Usage

```typescript
<app-sidebar 
  [menuItems]="mainMenuItems"
  [collapsed]="sidebarCollapsed"
  [userInfo]="currentUser"
  (menuItemClick)="onMenuItemClick($event)"
  (toggleCollapse)="sidebarCollapsed = $event">
</app-sidebar>
```

## Features
- Responsive navigation for mobile
- Nested menu support
- Active route highlighting
- Role-based menu item visibility
