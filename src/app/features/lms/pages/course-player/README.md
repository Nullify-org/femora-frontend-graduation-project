# Course Player Page

## Overview
Main learning interface for consuming course content.

## Functionality

- Play lesson videos
- Display lesson resources
- Show course outline/navigation
- Track lesson completion
- Progress tracking
- Note-taking (optional)
- Quality selection
- Playback controls

## Layout

```
┌──────────────────────────────┬──────────────┐
│                              │              │
│      Video Player            │   Outline    │
│      (Main Content)          │   & Resources│
│                              │              │
├──────────────────────────────┼──────────────┤
│  Lesson Title | Description  │   Next       │
└──────────────────────────────┴──────────────┘
```

## Player Features

- Video player with controls
- Fullscreen mode
- Playback speed control
- Quality selection
- Chapter markers/timestamps
- Closed captions

## Sidebar Content

- Course outline/structure
- Current module highlight
- Lesson navigation (prev/next)
- Resources (downloads, files)
- Course progress

## Lesson Content

- Lesson title
- Lesson description
- Downloadable resources
- Related links
- Related lessons

## Interactions

- Play/pause video
- Seek video timeline
- Mark lesson complete
- Download resources
- Navigate to next/previous lesson
- Expand/collapse outline

## Progress Tracking

- Mark lessons as complete
- Save video position
- Track overall course progress
- Show completion percentage

## Related Files

- [../../lms.module.ts](../../lms.module.ts) - Feature module
- [../../services/enrollment.service.ts](../../services/enrollment.service.ts) - Enrollment service
- [../quiz/](../quiz/) - Quiz page
