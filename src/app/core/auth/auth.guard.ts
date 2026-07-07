import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  return router.createUrlTree(['/login']);
};

export const guestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) return true;
  if (auth.pendingProfiles().length > 0) return router.createUrlTree(['/select-profile']);
  return router.createUrlTree([auth.getDashboardRoute()]);
};

export const profileSelectionGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) return router.createUrlTree(['/login']);
  if (auth.pendingProfiles().length > 0) return true;
  return router.createUrlTree([auth.getDashboardRoute()]);
};

export const landingGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) return true;

  if (auth.pendingProfiles().length > 0) {
    return router.createUrlTree(['/select-profile']);
  }

  if (auth.activeProfile()) {
    return router.createUrlTree([auth.getDashboardRoute()]);
  }

  return true;
};
