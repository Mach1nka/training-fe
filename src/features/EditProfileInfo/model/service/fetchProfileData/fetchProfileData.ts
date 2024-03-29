import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/getProfileData',
  async (userId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile[]>('/profiles', {
        params: {
          userId,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data[0];
    } catch (err) {
      return rejectWithValue('Credentials are incorrect');
    }
  },
);
