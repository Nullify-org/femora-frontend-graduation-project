import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from './core/services/notification.service';
import { FloatingChat } from './shared/components/floating-chat/floating-chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FloatingChat],
  templateUrl: './app.html',
})
export class App {
  readonly notifications = inject(NotificationService).notifications;
}
