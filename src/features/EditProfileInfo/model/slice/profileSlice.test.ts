import { DeepPartial } from '@reduxjs/toolkit';

import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema } from '@/entities/Profile';
import { fetchProfileData } from '../service/fetchProfileData';

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
  const state: DeepPartial<ProfileSchema> = { isLoading: false };

  test('getProfileData pending', () => {
    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending))
      .toEqual({ isLoading: true });
  });
});
