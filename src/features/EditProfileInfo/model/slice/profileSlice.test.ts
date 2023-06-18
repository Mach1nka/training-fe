import { DeepPartial } from '@reduxjs/toolkit';

import { profileReducer, profileActions } from './profileSlice';
import { Profile, ProfileSchema, ValidateProfileError } from '@/entities/Profile';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('Profile reducers', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { firstname: 'guest' } };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ firstname: 'John' })))
      .toEqual({ form: { firstname: 'John' } });
  });

  test('cancel editing', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { lastname: 'guest' },
      form: { lastname: 'guest123' },
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEditing()))
      .toEqual({ data: { lastname: 'guest' }, form: { lastname: 'guest' }, readonly: true });
  });
});

describe('Profile extra reducers', () => {
  const state: DeepPartial<ProfileSchema> = {
    isLoading: true,
    readonly: false,
    validateErrors: [ValidateProfileError.INCORRECT_CURRENCY],
  };

  test('getProfileData fulfilled', () => {
    const response: Profile = {
      firstname: 'name',
      lastname: 'surname',
      age: 35,
      country: Country.KAZAKHSTAN,
      currency: Currency.RUB,
      avatar: undefined,
      username: 'guest',
      city: undefined,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(response, '')))
      .toEqual({
        isLoading: false,
        readonly: true,
        validateErrors: undefined,
        data: response,
        form: response,
      });
  });
});