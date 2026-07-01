export type ProfileType =
  | 'Trainee'
  | 'Instructor'
  | 'Seller'
  | 'Admin'
  | 'student'
  | 'instructor'
  | 'Buyer';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string | null;
  selectedGoal?: string | null;
  profilePictureUrl?: string | null;
  isEmailVerified?: boolean;
}

export interface AvailableProfile {
  id?: string;
  type: ProfileType;
  name?: string;
  displayName?: string;
  label?: string;
  description?: string;
  dashboardRoute?: string;
}

export interface ProfileConfig {
  type: ProfileType;
  label: string;
  dashboardRoute: string;
}

export const PROFILE_CONFIGS: ProfileConfig[] = [
  { type: 'Trainee',    label: 'متدرب',  dashboardRoute: '/dashboard/trainee' },
  { type: 'Instructor', label: 'مدرب',   dashboardRoute: '/dashboard/instructor' },
  { type: 'Seller',     label: 'بائع',   dashboardRoute: '/dashboard/seller' },
  { type: 'Admin',      label: 'مدير',   dashboardRoute: '/dashboard/admin' },
  { type: 'student',    label: 'طالب',   dashboardRoute: '/dashboard/trainee' },
  { type: 'instructor', label: 'مدرب',   dashboardRoute: '/dashboard/instructor' },
  { type: 'Buyer',      label: 'مشتري',  dashboardRoute: '/dashboard/buyer' },
];
