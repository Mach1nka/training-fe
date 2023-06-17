import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';

import {
  getLoginUsername,
  getLoginPassword,
  getLoginLoading,
  getLoginError,
} from './loginSelector';

const state: DeepPartial<StateSchema> = {
  loginForm: {
    username: 'guest',
    password: '123456',
    isLoading: true,
    error: 'error text',
  },
};

describe('getLoginUsername selector', () => {
  test('should return username', () => {
    expect(getLoginUsername(state as StateSchema)).toBe('guest');
  });

  test('should work with empty value', () => {
    expect(getLoginUsername({} as StateSchema)).toBe('');
  });
});

describe('getLoginPassword selector', () => {
  test('should return password', () => {
    expect(getLoginPassword(state as StateSchema)).toBe('123456');
  });

  test('should work with empty value', () => {
    expect(getLoginPassword({} as StateSchema)).toBe('');
  });
});

describe('getLoginLoading selector', () => {
  test('should return loading', () => {
    expect(getLoginLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getLoginLoading({} as StateSchema)).toBe(false);
  });
});

describe('getLoginError selector', () => {
  test('should return error message', () => {
    expect(getLoginError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getLoginError({} as StateSchema)).toBe('');
  });
});
