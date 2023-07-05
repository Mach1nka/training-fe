import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';
import { Profile, ValidateProfileError } from '@/entities/Profile';

import { getProfileForm, getProfileData } from '../../selector/profileSelector';
import { validateProfileForm } from '../../lib/validateProfileForm/validateProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const formData = getProfileForm(getState());
      const data = getProfileData(getState());
      const errors = validateProfileForm(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put<Profile>(`/profiles/${data?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
