import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '@/entities/Profile';

import { getProfileForm, getProfileData } from '../../selector/profileSelector';
import { validateProfileForm } from '../../lib/validateProfileForm/validateProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, { rejectWithValue, extra, getState }) => {
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
});
