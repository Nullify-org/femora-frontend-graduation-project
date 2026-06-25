# Sources Panel Component

## Overview
Component that displays RAG (Retrieval-Augmented Generation) sources and references.

## Functionality

- Display relevant course references
- Show product recommendations
- Display source documents
- Link to resources
- Show source metadata (relevance score)

## Source Types

- **Courses**: Recommended courses related to conversation
- **Products**: Related products the user might be interested in
- **Documents**: Reference documents or articles
- **Resources**: External resources or links

## Source Card Information

- Source title
- Source type icon
- Brief description
- Relevance score (optional)
- Click link/button

## Interactions

- Click source → Navigate to resource
- View more sources → Expand/load more
- Filter sources by type

## Inputs

- `sources: Source[]` - Array of sources
- `isLoading: boolean` - Loading state

## Outputs

- `sourceClick: EventEmitter<Source>` - User clicked source

## Mobile Support

- Collapsible panel on mobile
- Full panel on desktop
- Touch-friendly links

## Related Files

- [../../ai-assistant.module.ts](../../ai-assistant.module.ts) - Feature module
- [../../../pages/chat/](../../../pages/chat/) - Chat page
