import { DeepPartial } from '@reduxjs/toolkit';

import { profileReducer } from './profileSlice';
import { ProfileSchema } from '../type';
import { fetchProfileData } from '../service/fetchProfileData';

describe('Login slice', () => {
  const state: DeepPartial<ProfileSchema> = { isLoading: false };

  test('getProfileData pending', () => {
    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending))
      .toEqual({ isLoading: true });
  });

  test('getProfileData fulfilled', () => {
    expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled))
      .toEqual({ isLoading: false });
  });

  // test('getProfileData rejected', () => {
  //   expect(profileReducer(state as ProfileSchema, fetchProfileData.rejected))
  //     .toEqual({ isLoading: false, error: 'Credentials are incorrect' });
  // });
});
