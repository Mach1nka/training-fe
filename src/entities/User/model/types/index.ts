import type { UserRole } from '../const';

export interface User {
  id: string;
  username: string;
  role: UserRole[];
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  initialized: boolean
}
