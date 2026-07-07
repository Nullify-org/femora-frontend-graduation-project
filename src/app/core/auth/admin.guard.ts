import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }

  // Check activeProfile OR user.role for Admin
  const activeProfile = auth.activeProfile();
  const userRole = auth.user()?.role;

  if (
    activeProfile === 'Admin' ||
    userRole === 'Admin' ||
    userRole === 'admin'
  ) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};
