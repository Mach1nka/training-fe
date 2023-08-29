import { User } from '@/entities/User';

export interface Comment {
  id: string;
  text: string;
  user: Omit<User, 'role'>;
}
