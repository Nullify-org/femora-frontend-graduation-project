import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../../../../core/services/storage.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  private readonly storage = inject(StorageService);

  // After registration onboarding, always go to login.
  // The backend will return the correct profiles on signin
  // and the login flow handles single vs. multi-profile routing.
  get startRoute(): string {
    return '/login';
  }
}
