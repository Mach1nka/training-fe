import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';

import { getUserAuthData } from './userSelector';

describe('getUserAuthData selector', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'guest',
          id: '1',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ username: 'guest', id: '1' });
  });

  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined,
      },
    };
    expect(getUserAuthData(state as StateSchema)).toBeUndefined();
  });
});
