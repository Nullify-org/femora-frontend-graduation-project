import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  template: `<div class="border border-blush rounded-xl p-4 bg-white"><ng-content /></div>`,
})
export class ChatWindow {
  readonly placeholder = input('Chat window — coming soon');
}
