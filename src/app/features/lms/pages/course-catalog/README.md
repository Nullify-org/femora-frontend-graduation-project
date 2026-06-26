# Course Catalog Page

## Overview
Browse and discover courses from the platform.

## Functionality

- Display all available courses
- Search courses by title/description
- Filter by category, level, language
- Sort by popularity, rating, newest, price
- Pagination or infinite scroll
- Course cards showing key info

## Course Card Information

- Course image/thumbnail
- Course title
- Instructor name
- Star rating
- Number of students enrolled
- Price (if paid)
- Short description

## Filters

- **Category**: Select from available categories
- **Level**: Beginner, Intermediate, Advanced
- **Language**: Filter by course language
- **Price**: Free/Paid
- **Rating**: Filter by minimum rating

## Search

- Real-time search as user types
- Search in title and description
- Highlight matching terms

## Interactions

- Click course card → Navigate to course-details
- Apply filters → Update course list
- Change sort → Reorder course list
- Load more → Pagination or infinite scroll

## Mobile Responsive

- Single column on mobile
- Grid layout on tablet/desktop
- Touch-friendly filters
- Sticky filter panel on desktop

## Related Files

- [../../lms.module.ts](../../lms.module.ts) - Feature module
- [../../services/course.service.ts](../../services/course.service.ts) - Course service
- [../course-details/](../course-details/) - Course details page
