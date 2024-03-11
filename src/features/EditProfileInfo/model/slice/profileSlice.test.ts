import type { Profile, ProfileSchema } from '@/entities/Profile';
import { ValidateProfileError } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { updateProfileData } from '../service/updateProfileData/updateProfileData';

import { profileReducer, profileActions } from './profileSlice';

describe('profileSlice reducers', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { firstname: 'guest' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ firstname: 'John' }),
      ),
    ).toEqual({ form: { firstname: 'John' } });
  });

  test('cancel editing', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { lastname: 'guest' },
      form: { lastname: 'guest123' },
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEditing())).toEqual({
      data: { lastname: 'guest' },
      form: { lastname: 'guest' },
      readonly: true,
    });
  });
});

describe('profileSlice extra reducers', () => {
  const state: DeepPartial<ProfileSchema> = {
    isLoading: true,
    readonly: false,
    validateErrors: [ValidateProfileError.INCORRECT_CURRENCY],
  };

  test('getProfileData fulfilled', () => {
    const response: Profile = {
      id: '1',
      userId: '1',
      firstname: 'name',
      lastname: 'surname',
      age: 35,
      country: Country.KAZAKHSTAN,
      currency: Currency.RUB,
      avatar: undefined,
      username: 'guest',
      city: undefined,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(response, '', undefined),
      ),
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      data: response,
      form: response,
    });
  });
});
