# Shared - Pipes

## Overview
Custom pipes for transforming data in templates. Pipes are used for formatting, filtering, and transforming data display.

## Pipes to Create

### Common Formatting Pipes
- `safe.pipe.ts` - Sanitize HTML/URLs
- `truncate.pipe.ts` - Truncate strings with ellipsis
- `date-format.pipe.ts` - Format dates (relative time, specific formats)
- `currency-format.pipe.ts` - Format currency with locale support

### Specialized Pipes
- `time-ago.pipe.ts` - Display relative time (e.g., "2 hours ago")
- `file-size.pipe.ts` - Format file sizes (KB, MB, GB)
- `role-display.pipe.ts` - Display user roles in human-readable format
- `status-display.pipe.ts` - Format status badges

## Usage Example

```typescript
// In shared.module.ts
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [TruncatePipe, SafePipe, ...],
  exports: [TruncatePipe, SafePipe, ...]
})
export class SharedModule { }
```

```html
<!-- In templates -->
<p>{{ course.description | truncate: 100 }}</p>
<p>{{ course.createdAt | timeAgo }}</p>
<div [innerHTML]="userBio | safe"></div>
```

## Best Practices

- Keep pipes pure and stateless
- Avoid expensive operations in pipes
- Use async pipes for observables
- Document pipe parameters
- Write unit tests for pipes
