import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '@/entities/Profile';
import { UserRole } from '@/entities/User';

import {
  getProfileData,
  getProfileChangePermission,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateError,
} from './profileSelector';

const state: DeepPartial<StateSchema> = {
  user: {
    authData: {
      id: '2',
      username: 'user',
      role: [UserRole.ADMIN],
    },
  },
  profile: {
    data: {
      id: '1',
      userId: '1',
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
      id: '1',
      userId: '1',
      firstname: 'Kevin',
      lastname: '',
      age: 1,
      currency: Currency.USD,
      country: Country.ARMENIA,
      city: 'Erevan',
      username: 'admin',
      avatar: '',
    },
    validateErrors: [ValidateProfileError.NO_DATA],
    isLoading: true,
    error: 'error text',
    readonly: false,
  },
};

describe('getProfileData selector', () => {
  test('should return profile', () => {
    expect(getProfileData(state as StateSchema)).toEqual(state!.profile!.data);
  });

  test('should work with empty value', () => {
    expect(getProfileData({} as StateSchema)).toBeUndefined();
  });
});

describe('getProfileChangePermission selector', () => {
  test('should return userId', () => {
    expect(getProfileChangePermission(state as StateSchema)).toBe(false);
  });

  test('should work with empty value', () => {
    expect(getProfileChangePermission({ user: {} } as StateSchema)).toBe(true);
  });
});

describe('getProfileForm selector', () => {
  test('should return profile', () => {
    expect(getProfileForm(state as StateSchema)).toEqual(state!.profile!.form);
  });

  test('should work with empty value', () => {
    expect(getProfileForm({} as StateSchema)).toBeUndefined();
  });
});

describe('getProfileLoading selector', () => {
  test('should return loading', () => {
    expect(getProfileLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getProfileLoading({} as StateSchema)).toBe(false);
  });
});

describe('getProfileError selector', () => {
  test('should return error message', () => {
    expect(getProfileError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getProfileError({} as StateSchema)).toBeUndefined();
  });
});

describe('getProfileReadonly selector', () => {
  test('should return readonly', () => {
    expect(getProfileReadonly(state as StateSchema)).toBe(false);
  });

  test('should work with empty value', () => {
    expect(getProfileReadonly({} as StateSchema)).toBeUndefined();
  });
});

describe('getProfileValidateError selector', () => {
  test('should return readonly', () => {
    expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('should work with empty value', () => {
    expect(getProfileValidateError({} as StateSchema)).toBeUndefined();
  });
});
