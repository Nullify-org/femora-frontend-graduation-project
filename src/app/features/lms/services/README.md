# LMS Services

## Overview
Services for course-related operations and API calls.

## Services

### `course.service.ts`
**Purpose**: Manage course operations
- Get all courses with filters
- Get course by ID
- Search courses
- Get course details
- Get course syllabus
- Enroll in course
- Get student courses

**Methods**:
- `getCourses(filters?: CourseFilters): Observable<Course[]>`
- `getCourseById(id: string): Observable<Course>`
- `searchCourses(query: string): Observable<Course[]>`
- `enrollCourse(courseId: string): Observable<Enrollment>`
- `getStudentCourses(): Observable<Course[]>`

### `enrollment.service.ts`
**Purpose**: Manage course enrollments
- Get enrollments
- Update progress
- Mark lesson complete
- Get progress

**Methods**:
- `getEnrollments(): Observable<Enrollment[]>`
- `getEnrollmentProgress(courseId: string): Observable<Progress>`
- `markLessonComplete(lessonId: string): Observable<void>`
- `updateProgress(courseId: string, progress: number): Observable<void>`

### `quiz.service.ts`
**Purpose**: Manage quizzes
- Get quiz
- Submit answers
- Get results
- Get questions

**Methods**:
- `getQuiz(quizId: string): Observable<Quiz>`
- `getQuizQuestions(quizId: string): Observable<Question[]>`
- `submitQuiz(quizId: string, answers: Answer[]): Observable<QuizResult>`
- `getQuizResult(quizId: string): Observable<QuizResult>`

## Usage

```typescript
constructor(
  private courseService: CourseService,
  private enrollmentService: EnrollmentService,
  private quizService: QuizService
) {}

// Get all courses
this.courseService.getCourses().subscribe(courses => {
  this.courses = courses;
});

// Enroll in course
this.courseService.enrollCourse(courseId).subscribe(() => {
  this.notificationService.success('Enrolled successfully!');
});

// Mark lesson complete
this.enrollmentService.markLessonComplete(lessonId).subscribe();
```

## Related Files

- [../lms.module.ts](../lms.module.ts) - Feature module
- [../../../../core/models/](../../../../core/models/) - Course models
