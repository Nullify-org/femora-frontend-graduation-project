import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
})
export class Modal {
  readonly open = input(false);
  readonly title = input('');
  readonly closed = output<void>();

  close(): void {
    this.closed.emit();
  }
}
