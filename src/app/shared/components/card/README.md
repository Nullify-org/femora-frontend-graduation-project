# Card Component

## Overview
Flexible container component for displaying content in a card format. Used for courses, products, messages, and other content blocks.

## Responsibilities
- Flexible layout for various content types
- Optional header section
- Optional footer section
- Optional action buttons
- Shadow and border styling

## Inputs
- `title: string` - Card title (optional)
- `subtitle: string` - Card subtitle (optional)
- `hoverable: boolean` - Add hover effects
- `clickable: boolean` - Make card clickable
- `actions: CardAction[]` - Action buttons

## Outputs
- `click: EventEmitter<void>` - Emitted when card clicked
- `actionClick: EventEmitter<string>` - Emitted when action button clicked

## Content Projection

```html
<app-card [title]="'Course Title'">
  <!-- Card header (default projection) -->
  <img src="..." alt="..." />
  
  <!-- Card body (default projection) -->
  <p>Course description...</p>
  
  <!-- Card footer -->
  <ng-template #footer>
    <button>Enroll Now</button>
  </ng-template>
</app-card>
```

## Usage

```typescript
<app-card 
  [title]="course.title"
  [hoverable]="true"
  [clickable]="true"
  [actions]="cardActions"
  (click)="viewCourseDetails()"
  (actionClick)="onActionClick($event)">
  <img [src]="course.image" />
  <p>{{ course.description }}</p>
</app-card>
```
