# AI Assistant Widget

## Overview
Quick access widget to AI assistant with recent conversations and suggestions.

## Functionality

- Display recent chat conversations
- Show AI suggestions/quick questions
- Button to open AI chat
- Quick conversation history access

## Widget Content

### Header
- "AI Assistant" title
- "Open Chat" button

### Recent Conversations
- List of last 3 conversations
- Conversation preview (first line)
- Click to resume conversation

### Quick Suggestions
- Example questions users can ask
- Click to open chat with question

### Status
- Show if AI is available/online
- Loading state

## Interactions

- Click "Open Chat" → Navigate to AI chat page
- Click conversation → Open specific conversation
- Click suggestion → Open chat with pre-filled question

## Data

- Fetch recent conversations from chat service
- Display conversation titles/previews
- Show timestamp of last message

## Related Files

- [../../dashboard.module.ts](../../dashboard.module.ts) - Feature module
- [../../../ai-assistant/](../../../ai-assistant/) - AI feature module
- [../../../ai-assistant/services/](../../../ai-assistant/services/) - Chat service
