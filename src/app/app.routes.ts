import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Interests } from './features/auth/pages/onboarding/interests/interests';
import { Goal } from './features/auth/pages/onboarding/goal/goal';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'onboarding/interests', component: Interests },
  { path: 'onboarding/goal', component: Goal },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
]