# Dashboard Page

## Overview
Main dashboard page that serves as the home screen after user login.

## Functionality

- Display personalized greeting
- Show user's learning progress
- Display recommended content
- Quick access to main features
- Widget-based layout

## Layout Structure

```
┌─────────────────────────────────────┐
│  Header (User Greeting)              │
├─────────────────────────────────────┤
│  Continue Learning Widget            │
├─────────────────────────────────────┤
│  Recommended Products Widget         │
├─────────────────────────────────────┤
│  AI Assistant Widget                 │
└─────────────────────────────────────┘
```

## Sections

### Header
- User greeting (Name)
- Date/time
- Quick status (notifications count)

### Content Area
- Continue Learning widget
- Recommended Products widget
- AI Assistant widget

## Responsive Design

- Single column on mobile
- Two columns on tablet
- Three columns on desktop

## Features

- Load user preferences for personalization
- Real-time widget updates
- Click-through navigation to features
- Empty state messaging

## Related Files

- [../../dashboard.module.ts](../../dashboard.module.ts) - Feature module
- [../../widgets/](../../widgets/) - Dashboard widgets
