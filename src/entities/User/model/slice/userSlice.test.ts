import type { DeepPartial } from '@reduxjs/toolkit';

import { UserRole } from '../const';
import type { User, UserSchema } from '../types';

import { userReducer, userActions } from './userSlice';

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
