import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) return router.createUrlTree(['/login']);

  const allowedRoles: string[] = route.data['roles'] ?? [];
  const activeProfile = auth.activeProfile();

  if (!activeProfile || !allowedRoles.includes(activeProfile)) {
    return router.createUrlTree(['/dashboard']);
  }

  return true;
};
