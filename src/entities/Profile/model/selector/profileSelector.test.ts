import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';
import { Country, Currency } from '@/shared/constant/common';

import {
  getProfileData, getProfileError, getProfileLoading,
} from './profileSelector';

const state: DeepPartial<StateSchema> = {
  profile: {
    data: {
      firstname: 'John',
      lastname: 'Doe',
      age: 1,
      currency: Currency.USD,
      country: Country.ARMENIA,
      city: 'Erevan',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    isLoading: true,
    error: 'error text',
    readonly: true,
  },
};

describe('Profile selector', () => {
  test('should return profile', () => {
    expect(getProfileData(state as StateSchema)).toEqual({
      firstname: 'John',
      lastname: 'Doe',
      age: 1,
      currency: 'USD',
      country: 'Armenia',
      city: 'Erevan',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    });
  });

  test('should work with empty value', () => {
    expect(getProfileData({} as StateSchema)).toBeUndefined();
  });
});

describe('Loading selector', () => {
  test('should return loading', () => {
    expect(getProfileLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getProfileLoading({} as StateSchema)).toBe(false);
  });
});

describe('Error selector', () => {
  test('should return error message', () => {
    expect(getProfileError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getProfileError({} as StateSchema)).toBe('');
  });
});
