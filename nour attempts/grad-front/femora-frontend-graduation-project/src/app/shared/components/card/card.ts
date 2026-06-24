import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
})
export class Card {
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
  readonly padding = input<'sm' | 'md' | 'lg'>('md');
}
