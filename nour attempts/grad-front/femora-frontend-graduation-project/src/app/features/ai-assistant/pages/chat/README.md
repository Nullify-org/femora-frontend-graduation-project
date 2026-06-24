# AI Chat Page

## Overview
Main AI assistant chat interface for user interactions.

## Functionality

- Chat with AI assistant
- Real-time message display
- Conversation history
- Source references
- Suggestions
- Save conversations
- Load previous conversations

## Layout

```
┌───────────────────────────────────────────┬─────────────────┐
│                                           │                 │
│            Chat Messages                  │ Sources Panel   │
│                                           │                 │
├───────────────────────────────────────────┤                 │
│ Message Input                             │                 │
└───────────────────────────────────────────┴─────────────────┘
```

## Chat Interface

### Message Area
- User messages (right-aligned)
- AI responses (left-aligned)
- Message timestamps
- Typing indicator
- Error messages

### Input Area
- Text input field
- Send button
- Emoji picker (optional)
- Attachment (optional)
- Voice input (optional)

### Sources Panel
- Relevant course links
- Product recommendations
- Reference documents
- Related resources

## Features

- Persistent conversation history
- Load previous conversations
- Clear chat button
- Export conversation
- Share conversation
- Suggestion chips for quick questions

## Interactions

- Type message
- Send message
- Click suggestion → Add to input
- Click source → Navigate to resource
- Load conversation → Display history
- Start new conversation

## Mobile Support

- Single column layout
- Touch-friendly input
- Full-screen chat
- Floating suggestions

## Related Files

- [../../ai-assistant.module.ts](../../ai-assistant.module.ts) - Feature module
- [../../services/chat.service.ts](../../services/chat.service.ts) - Chat service
- [../../components/chat-window/](../../components/chat-window/) - Chat window component
- [../../components/sources-panel/](../../components/sources-panel/) - Sources panel
