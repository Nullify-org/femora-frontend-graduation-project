# AI Assistant Services

## Overview
Services for AI chat and conversation management.

## Services

### `chat.service.ts`
**Purpose**: Handle chat operations and AI communication
- Send message to AI
- Get conversation history
- Get suggestions
- Save conversation
- Load conversation

**Methods**:
- `sendMessage(message: string): Observable<ChatMessage>`
- `getConversationHistory(conversationId: string): Observable<ChatMessage[]>`
- `getSuggestions(context: string): Observable<Suggestion[]>`
- `saveConversation(title: string, messages: ChatMessage[]): Observable<Conversation>`
- `loadConversation(conversationId: string): Observable<Conversation>`
- `getConversations(): Observable<Conversation[]>`

## Usage

```typescript
constructor(private chatService: ChatService) {}

sendMessage(text: string) {
  this.chatService.sendMessage(text).subscribe(response => {
    this.messages.push(response);
  });
}

loadConversation(id: string) {
  this.chatService.loadConversation(id).subscribe(conversation => {
    this.messages = conversation.messages;
  });
}
```

## Related Files

- [../ai-assistant.module.ts](../ai-assistant.module.ts) - Feature module
- [../../../../core/models/](../../../../core/models/) - Chat models
