import { StateSchema } from '@/shared/config/redux/types';

import { getUserAuthData, getUserId, getUserInitiated } from './userSelector';

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

describe('getUserId selector', () => {
  test('should return id', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
        },
      },
    };
    expect(getUserId(state as StateSchema)).toBe('1');
  });

  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined,
      },
    };
    expect(getUserId(state as StateSchema)).toBeUndefined();
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
