# Messaging Feature Module

## Overview
The Messaging feature enables direct communication between buyers, sellers, and instructors.

## Pages

### `conversations/`
Messaging interface
- Conversation list
- Active conversation display
- Message input and sending
- User presence indicators
- Conversation management

## Features

- Real-time messaging (WebSocket)
- Message history
- Read/unread status
- Typing indicators
- User presence
- Message search
- Block/unblock users
- Archive conversations
- Conversation pinning

## Routing

```typescript
const routes: Routes = [
  { path: '', component: ConversationsComponent },
  { path: ':conversationId', component: ConversationsComponent }
];
```

## Key Points

- Authenticated users only
- Real-time updates via WebSocket
- Persistent message history
- Push notifications
- Mobile responsive
- File sharing (optional)
