# Continue Learning Widget

## Overview
Displays user's currently enrolled courses with progress information.

## Functionality

- List active course enrollments
- Show course image/thumbnail
- Display course title and instructor
- Show progress percentage
- Display estimated completion time
- "Continue" button to resume course

## Data Structure

For each course:
- Course image
- Course title
- Instructor name
- Progress percentage
- Last accessed date/time
- "Continue Learning" button

## Interactions

- Click course card → Navigate to course-player
- Click "Continue" button → Navigate to course-player

## Empty State

If no active courses:
- Show empty state message
- "Browse Courses" button
- Link to course catalog

## Performance

- Load only active enrollments
- Limit to 5-8 most recent courses
- Lazy load images
- Cache enrollment data

## Related Files

- [../../dashboard.module.ts](../../dashboard.module.ts) - Feature module
- [../../../lms/services/](../../../lms/services/) - Course service
