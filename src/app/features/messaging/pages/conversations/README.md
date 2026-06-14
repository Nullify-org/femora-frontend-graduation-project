# Conversations Page

## Overview
Main messaging interface for user conversations.

## Functionality

- Display list of conversations
- Show active conversation
- Send/receive messages
- Real-time message updates
- User presence indicators
- Message search
- Archive conversations

## Layout

```
┌──────────────────┬─────────────────────────┐
│  Conversations   │                         │
│  List            │   Active Conversation  │
│                  │                         │
│  - Search        │   Message Area          │
│  - List items    │                         │
│                  ├─────────────────────────┤
│                  │ Message Input           │
│                  │ Send Button             │
└──────────────────┴─────────────────────────┘
```

## Conversation List

- List of conversations
- Last message preview
- Unread indicator
- Timestamp
- Search/filter
- Sort options (recent, unread)

## Active Conversation

- Conversation header with user info
- User presence indicator
- Message history
- Message input area
- Send button
- Attach file button

## Message Features

- Text messages
- Typing indicator
- Read receipts
- Message timestamps
- User avatars
- Delete message
- Edit message (optional)

## User Actions

- Start new conversation
- Search conversations
- Archive conversation
- Mute conversation
- Block user
- Report user

## Mobile Support

- Full-screen conversation on mobile
- Side-by-side on larger screens
- Touch-friendly input
- Responsive layout

## Related Files

- [../../messaging.module.ts](../../messaging.module.ts) - Feature module
