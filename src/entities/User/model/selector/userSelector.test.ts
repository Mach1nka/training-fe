import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';

import { getUserAuthData, getUserInitiated } from './userSelector';

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

describe('getUserAuthData selector', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        initiated: true,
      },
    };
    expect(getUserInitiated(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        initiated: undefined,
      },
    };
    expect(getUserInitiated(state as StateSchema)).toBeUndefined();
  });
});
