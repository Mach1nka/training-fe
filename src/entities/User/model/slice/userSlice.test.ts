import { DeepPartial } from '@reduxjs/toolkit';

import { userReducer, userActions } from './userSlice';
import { User, UserSchema, UserRole } from '../types';

const user: User = { id: '1', username: 'guest', role: [UserRole.ADMIN] };

describe('userSlice slice', () => {
  test('set auth data', () => {
    const state: DeepPartial<UserSchema> = { authData: undefined };

    expect(userReducer(state as UserSchema, userActions.setAuthData(user)))
      .toEqual({ authData: user });
  });

  test('logout', () => {
    const state: DeepPartial<UserSchema> = { authData: user };

    expect(userReducer(state as UserSchema, userActions.logout()))
      .toEqual({ authData: undefined });
  });
});
