# AI Assistant Feature Module

## Overview
The AI Assistant feature provides an intelligent chatbot with RAG (Retrieval-Augmented Generation) capabilities for helping users learn and find products.

## Pages

### `chat/`
Main AI conversation interface
- Chat window with messages
- Message input
- Conversation history
- AI responses with sources

## Components

### `chat-window/`
Chat conversation display
- Message list (user and AI)
- Message input field
- Send button
- Typing indicators
- Message timestamps

### `sources-panel/`
RAG (Retrieval-Augmented Generation) sources
- Display relevant sources/documents
- Course references
- Product recommendations
- External resources

### `suggestions/`
Quick suggestion prompts
- Example questions
- Common topics
- Quick action suggestions
- Related topics

## Services

### `chat.service.ts`
- Send messages to AI
- Get conversation history
- Get suggestions
- Save conversations

## Routing

```typescript
const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: ':conversationId', component: ChatComponent }
];
```

## Key Features

- Real-time chat interface
- Message history persistence
- Typing indicators
- AI source attribution
- Product/course recommendations
- Context-aware responses
- Conversation saving and retrieval

## AI Capabilities

- Answer learning questions
- Recommend courses
- Suggest products
- Learning path guidance
- Career counseling
- General Q&A
