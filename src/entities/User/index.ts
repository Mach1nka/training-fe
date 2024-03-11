import {
  getUserAuthData,
  getUserId,
  getUserInitialized,
  isUserAdmin,
  isUserManager,
  getUserRole,
} from './model/selector/userSelector';
import { userReducer, userActions } from './model/slice/userSlice';
import { UserRole } from './model/const';
import type { UserSchema, User } from './model/types';

export type { UserSchema, User };

export {
  userReducer,
  userActions,
  getUserAuthData,
  getUserInitialized,
  getUserId,
  getUserRole,
  isUserAdmin,
  isUserManager,
  UserRole,
};
