import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ProfileType } from '../models/user.model';

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowed = (route.data['roles'] as ProfileType[]) ?? [];

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  const profile = auth.activeProfile();
  if (!profile || !allowed.includes(profile)) {
    return router.createUrlTree(['/dashboard']);
  }

  return true;
};
