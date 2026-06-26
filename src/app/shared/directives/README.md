# Shared - Directives

## Overview
Custom directives for DOM manipulation, validation, and behavior enhancement.

## Directives to Create

### Common Directives
- `highlight.directive.ts` - Add highlight on hover/focus
- `tooltip.directive.ts` - Display tooltip text
- `click-outside.directive.ts` - Detect clicks outside element
- `debounce.directive.ts` - Debounce input events

### Form Directives
- `only-numbers.directive.ts` - Allow only numeric input
- `password-match.directive.ts` - Validate matching passwords
- `min-length-async.directive.ts` - Async validation

### Display Directives
- `has-role.directive.ts` - Show/hide elements based on user role
- `loading-overlay.directive.ts` - Display loading overlay
- `infinite-scroll.directive.ts` - Lazy load on scroll

## Usage Example

```typescript
// In shared.module.ts
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [HighlightDirective, TooltipDirective, ...],
  exports: [HighlightDirective, TooltipDirective, ...]
})
export class SharedModule { }
```

```html
<!-- In templates -->
<div appHighlight [highlightColor]="'yellow'">Hover me</div>
<button appTooltip="Click to save">Save</button>
<div (appClickOutside)="closeMenu()">Menu</div>
<input appOnlyNumbers type="text" />
<div *appHasRole="'ADMIN'">Admin only content</div>
```

## Best Practices

- Keep directives focused on single responsibility
- Document directive inputs and outputs
- Use proper event handling and cleanup
- Consider performance implications
- Write unit tests for directives
