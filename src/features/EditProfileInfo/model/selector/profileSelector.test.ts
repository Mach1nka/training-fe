import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import {
  getProfileData, getProfileError, getProfileLoading, getProfileReadonly, getProfileForm,
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
    form: {
      firstname: 'Kevin',
      lastname: '',
      age: 1,
      currency: Currency.USD,
      country: Country.ARMENIA,
      city: 'Erevan',
      username: 'admin',
      avatar: '',
    },
    isLoading: true,
    error: 'error text',
    readonly: false,
  },
};

describe('Profile data selector', () => {
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

describe('Profile form selector', () => {
  test('should return profile', () => {
    expect(getProfileForm(state as StateSchema)).toEqual({
      firstname: 'Kevin',
      lastname: '',
      age: 1,
      currency: Currency.USD,
      country: Country.ARMENIA,
      city: 'Erevan',
      username: 'admin',
      avatar: '',
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
    expect(getProfileError({} as StateSchema)).toBeUndefined();
  });
});

describe('Readonly selector', () => {
  test('should return readonly', () => {
    expect(getProfileReadonly(state as StateSchema)).toBe(false);
  });

  test('should work with empty value', () => {
    expect(getProfileReadonly({} as StateSchema)).toBeUndefined();
  });
});
