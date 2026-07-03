import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Blocks Admin users from accessing routes that should only be
 * available to non-Admin users (e.g. the AI Assistant).
 */
export const notAdminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  const activeProfile = auth.activeProfile();
  const userRole = auth.user()?.role;

  const isAdmin =
    activeProfile === 'Admin' ||
    userRole === 'Admin' ||
    userRole === 'admin';

  if (isAdmin) {
    return router.createUrlTree(['/dashboard']);
  }

  return true;
};
