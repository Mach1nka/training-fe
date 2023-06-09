import { DeepPartial } from '@reduxjs/toolkit';

import { loginReducer, loginActions } from './loginSlice';
import { LoginSchema } from '../type';
import { loginByUsername } from '../service/loginByUsername';

describe('Login slice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'guest' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('person')))
      .toEqual({ username: 'person' });
  });

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123456')))
      .toEqual({ password: '123456' });
  });

  test('set loading', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false };

    expect(loginReducer(state as LoginSchema, loginByUsername.pending))
      .toEqual({ isLoading: true });
  });
});
