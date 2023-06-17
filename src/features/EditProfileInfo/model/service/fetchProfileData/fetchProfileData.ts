import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/getProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('Credentials are incorrect');
    }
  },
);
