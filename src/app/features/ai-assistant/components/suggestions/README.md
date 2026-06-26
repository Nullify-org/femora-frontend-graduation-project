# Suggestions Component

## Overview
Component that displays quick suggestion prompts for the user.

## Functionality

- Display example questions
- Show quick action suggestions
- Display common topics
- Suggest related topics based on conversation

## Suggestion Types

- **Questions**: Example questions to ask the AI
- **Topics**: Suggested topics to explore
- **Actions**: Quick actions (search, browse, etc.)
- **Follow-ups**: Related follow-up questions

## Suggestion Chips

- Suggestion text
- Icon (optional)
- Click handler
- Hover effects

## Interactions

- Click suggestion → Add to chat input or send directly
- Show more suggestions → Load additional suggestions
- Clear suggestions → Hide suggestions area

## Inputs

- `suggestions: Suggestion[]` - Array of suggestions
- `context: string` - Current chat context

## Outputs

- `suggestionClick: EventEmitter<Suggestion>` - User clicked suggestion

## Features

- Context-aware suggestions
- Relevant to conversation
- Dynamically updated
- Accessibility support

## Mobile Support

- Horizontal scroll on mobile
- Touch-friendly buttons
- Single row layout

## Related Files

- [../../ai-assistant.module.ts](../../ai-assistant.module.ts) - Feature module
- [../../../pages/chat/](../../../pages/chat/) - Chat page
