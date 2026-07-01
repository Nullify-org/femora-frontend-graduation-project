import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../../shared/components/sidebar/sidebar';
import { AuthService } from '../../../../core/auth/auth.service';
import { SwitchRole } from '../../widgets/switch-role/switch-role';

@Component({
  selector: 'app-buyer-dashboard',
  standalone: true,
  imports: [RouterLink, Sidebar, SwitchRole],
  templateUrl: './buyer-dashboard.html',
})
export class BuyerDashboard {
  readonly auth = inject(AuthService);
}
