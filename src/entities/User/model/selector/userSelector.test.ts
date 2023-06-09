import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';

import { getUserAuthData } from './userSelector';

describe('User selector', () => {
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
        authData: null,
      },
    };
    expect(getUserAuthData(state as StateSchema)).toBeNull();
  });
});
