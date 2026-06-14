# Chat Window Component

## Overview
Component that displays the chat conversation.

## Functionality

- Display messages
- Scroll to latest message
- Show typing indicator
- Show message metadata
- Handle message rendering

## Message Display

- User messages (different styling)
- AI messages
- System messages (status updates)
- Message timestamps
- Typing indicator when AI is responding

## Interactions

- Auto-scroll to latest message
- Copy message text
- React to messages (optional)
- Report message (optional)

## Inputs

- `messages: ChatMessage[]` - Array of messages
- `isTyping: boolean` - AI is typing
- `currentUserId: string` - Current user ID

## Outputs

- `messageReaction: EventEmitter` - User reacted to message
- `copyMessage: EventEmitter` - User copied message

## Features

- Smart scrolling
- Message grouping by sender
- Time indicators
- Long message handling
- Emoji support
- Link detection and display

## Related Files

- [../../ai-assistant.module.ts](../../ai-assistant.module.ts) - Feature module
- [../../../pages/chat/](../../../pages/chat/) - Chat page
