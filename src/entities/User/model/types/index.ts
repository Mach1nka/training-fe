export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER'
}

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
