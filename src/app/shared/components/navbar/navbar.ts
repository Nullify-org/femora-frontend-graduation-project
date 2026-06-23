import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly transparent = input(false);
  readonly auth = inject(AuthService);

  logout(): void {
    this.auth.logout().subscribe({
      error: () => this.auth.logoutLocal(),
      complete: () => this.auth.logoutLocal(),
    });
  }
}
