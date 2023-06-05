import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthUserByUsername';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
}
