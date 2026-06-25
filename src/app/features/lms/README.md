# LMS (Learning Management System) Feature Module

## Overview
The LMS feature handles all course-related functionality including course catalog, course details, course playback, quizzes, assignments, and instructor dashboard.

## Pages

### `course-catalog/`
Browse and search courses
- List all courses
- Filter by category, level, rating
- Search functionality
- Sort by popular, rating, newest
- Course cards with info

### `course-details/`
Course information and enrollment
- Full course description
- Syllabus/modules list
- Instructor information
- Student reviews and ratings
- "Enroll" button

### `course-player/`
Learn course content
- Play lessons and videos
- Display lesson resources
- Mark lessons as complete
- Track progress
- Show course outline

### `quiz/`
Take quizzes and assessments
- Display quiz questions
- Multiple choice, true/false, etc.
- Answer selection
- Quiz submission
- Result and scoring

### `assignment-submission/`
Submit assignments
- Assignment description
- File upload
- Text submission
- Submission history
- Grading feedback

### `instructor-dashboard/`
Instructor course management
- Course list
- Student list
- Grades and submissions
- Course analytics
- Create/edit courses

## Services

### `course.service.ts`
- Get course list
- Get course details
- Enroll in course
- Get student enrollments

### `enrollment.service.ts`
- Manage enrollments
- Get enrollment progress
- Update lesson completion

### `quiz.service.ts`
- Get quizzes
- Submit quiz answers
- Get quiz results

## Routing

```typescript
const routes: Routes = [
  { path: 'catalog', component: CourseCatalogComponent },
  { path: ':courseId', component: CourseDetailsComponent },
  { path: ':courseId/play', component: CoursePlayerComponent },
  { path: ':courseId/quiz/:quizId', component: QuizComponent },
  { path: ':courseId/assignment/:assignmentId', component: AssignmentSubmissionComponent },
  { path: 'instructor/dashboard', component: InstructorDashboardComponent }
];
```

## Key Features

- Responsive course layout
- Video streaming
- Progress tracking
- Grading system
- Certificate generation
- Discussion forums (optional)
