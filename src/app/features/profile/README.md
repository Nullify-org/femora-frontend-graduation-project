# Profile Feature Module

## Overview
The Profile feature manages user profiles for different user types and user preferences.

## Pages

### `seller-profile/`
Seller profile management
- Store name and description
- Product categories
- Ratings and reviews
- Store policies
- Bank account info (for payments)

### `instructor-profile/`
Instructor profile management
- Bio and expertise
- Qualifications
- Teaching experience
- Course count and ratings
- Video introduction

### `trainee-profile/`
Student/trainee profile management
- Learning goals and interests
- Current courses and progress
- Completed courses
- Certifications
- Learning path

### `preferences/`
User preferences and settings
- Privacy settings
- Notification preferences
- Email preferences
- Language and timezone
- Account security

## Services

### `profile.service.ts`
- Load user profile based on role
- Update profile information
- Manage preferences

## Routing

```typescript
const routes: Routes = [
  { path: 'seller', component: SellerProfileComponent },
  { path: 'instructor', component: InstructorProfileComponent },
  { path: 'trainee', component: TraineeProfileComponent },
  { path: 'preferences', component: PreferencesComponent }
];
```

## Key Points

- Protected routes - requires authentication
- Role-based page access
- Edit mode / View mode toggle
- Form validation for profile updates
- Profile picture upload support
