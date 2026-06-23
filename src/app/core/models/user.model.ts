export type ProfileType = 'Trainee' | 'Instructor' | 'Seller' | 'Admin';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string | null;
  role: string;
}

export interface AvailableProfile {
  id: number;
  name: ProfileType;
  displayName: string;
  description: string;
  icon: string;
}
