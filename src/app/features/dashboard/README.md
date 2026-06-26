# Dashboard Feature Module

## Overview
The Dashboard feature provides the main homepage/dashboard after user login. It displays personalized content through widgets.

## Pages

### `dashboard/`
Main dashboard page
- Renders multiple dashboard widgets
- Responsive grid layout
- Widget arrangement

## Widgets

### `continue-learning/`
Shows courses in progress
- List of active enrollments
- Progress bars
- "Continue Learning" buttons
- Estimated time to completion

### `recommended-products/`
Personalized product recommendations
- Based on user preferences and behavior
- Product cards with images
- Price and ratings
- "Add to Cart" buttons

### `ai-widget/`
AI assistant quick access
- Chat with AI button
- Quick questions examples
- Latest AI conversations

## Services

No specific services in dashboard - uses services from other features:
- `course.service.ts` from LMS
- `product.service.ts` from Marketplace
- `chat.service.ts` from AI Assistant

## Routing

```typescript
const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];
```

## Layout

- Header with user greeting
- Grid layout with responsive columns
- Widgets arranged by priority
- Mobile-friendly arrangement

## Key Points

- Protected route (requires authentication)
- Uses lazy-loaded child components (widgets)
- Calls services from other feature modules
- Real-time data updates
- Responsive dashboard layout
