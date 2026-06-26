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

  get startRoute(): string {
    const roles = (this.storage.get('femora_onboarding_roles') as string[]) ?? [];
    const isBuyerOnly = roles.length === 0 || (roles.length === 1 && roles[0] === 'buyer');
    return isBuyerOnly ? '/' : '/dashboard';
  }
}
