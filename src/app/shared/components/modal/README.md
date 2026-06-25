# Modal Component

## Overview
Modal dialog component for displaying overlays and collecting user input.

## Responsibilities
- Display modal dialog overlay
- Modal title and content
- Confirm/Cancel buttons
- Close button
- Prevent body scroll when open

## Inputs
- `isOpen: boolean` - Control modal visibility
- `title: string` - Modal title
- `confirmButtonText: string` - Confirm button label
- `cancelButtonText: string` - Cancel button label
- `closeOnBackdropClick: boolean` - Close on backdrop click

## Outputs
- `confirm: EventEmitter<void>` - Emitted when confirm clicked
- `cancel: EventEmitter<void>` - Emitted when cancel clicked
- `close: EventEmitter<void>` - Emitted when close clicked

## Content Projection

```html
<app-modal 
  [isOpen]="showModal"
  title="Confirm Action"
  (confirm)="onConfirm()"
  (cancel)="onCancel()">
  <!-- Modal content goes here -->
  <p>Are you sure you want to proceed?</p>
</app-modal>
```

## Usage

```typescript
showModal = false;

openModal() {
  this.showModal = true;
}

onConfirm() {
  // Handle confirmation
  this.showModal = false;
}

onCancel() {
  this.showModal = false;
}
```

## Features
- Backdrop overlay
- Keyboard ESC to close
- Focus trap inside modal
- Responsive sizing
