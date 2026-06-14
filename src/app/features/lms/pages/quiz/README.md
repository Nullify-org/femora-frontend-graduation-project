# Quiz Page

## Overview
Interactive quiz interface for course assessments and evaluations.

## Functionality

- Display quiz questions
- Multiple choice questions
- True/false questions
- Short answer questions
- Question timer
- Progress through quiz
- Submit answers
- View results and scoring

## Quiz Flow

1. **Quiz Start**
   - Display quiz instructions
   - Show total questions and time limit
   - Start button

2. **Question Display**
   - Show current question number
   - Display question text
   - Show answer options
   - Question timer (if applicable)

3. **Navigation**
   - Next/Previous buttons
   - Jump to specific question
   - Progress bar showing completion

4. **Submission**
   - Review answers before submit
   - Submit button
   - Warning if questions unanswered

5. **Results**
   - Score and percentage
   - Correct/incorrect answers
   - Explanation for answers
   - Overall feedback

## Question Types

- **Multiple Choice**: Select one answer
- **True/False**: Boolean answer
- **Short Answer**: Text input
- **Multiple Select**: Select multiple correct answers

## Features

- Progress bar
- Question timer
- Prevent going back (if configured)
- Auto-save answers
- Keyboard navigation
- Accessibility support

## Related Files

- [../../lms.module.ts](../../lms.module.ts) - Feature module
- [../../services/quiz.service.ts](../../services/quiz.service.ts) - Quiz service
- [../course-player/](../course-player/) - Course player page
