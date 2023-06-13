import { DeepPartial } from '@reduxjs/toolkit';

import { userReducer, userActions } from './userSlice';
import { User, UserSchema } from '../type';

describe('User slice', () => {
  test('set auth data', () => {
    const state: DeepPartial<UserSchema> = { authData: undefined };
    const user: User = { id: '1', username: 'guest' };

    expect(userReducer(state as UserSchema, userActions.setAuthData(user)))
      .toEqual({ authData: user });
  });

  test('logout', () => {
    const state: DeepPartial<UserSchema> = { authData: { id: '1', username: 'guest' } };

    expect(userReducer(state as UserSchema, userActions.logout()))
      .toEqual({ authData: undefined });
  });
});
