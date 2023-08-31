import type { StateSchema } from '@/shared/config/redux/types';

import { getUserAuthData, getUserId, getUserInitialized } from './userSelector';

const state: DeepPartial<StateSchema> = {
  user: {
    authData: {
      username: 'guest',
      id: '1',
    },
    initialized: true,
  },
};

const emptyState: DeepPartial<StateSchema> = {
  user: {
    authData: undefined,
    initialized: undefined,
  },
};

describe('getUserAuthData selector', () => {
  test('should return username', () => {
    expect(getUserAuthData(state as StateSchema)).toEqual({ username: 'guest', id: '1' });
  });

  test('should work with empty value', () => {
    expect(getUserAuthData(emptyState as StateSchema)).toBeUndefined();
  });
});

describe('getUserId selector', () => {
  test('should return id', () => {
    expect(getUserId(state as StateSchema)).toBe('1');
  });

  test('should work with empty value', () => {
    expect(getUserId(emptyState as StateSchema)).toBeUndefined();
  });
});

describe('getUserInitialized selector', () => {
  test('should return value', () => {
    expect(getUserInitialized(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getUserInitialized(emptyState as StateSchema)).toBe(false);
  });
});
