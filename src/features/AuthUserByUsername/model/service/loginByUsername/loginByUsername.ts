import { createAsyncThunk } from '@reduxjs/toolkit';

import type { User } from '@/entities/User';
import { userActions } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constant/localstorage';
import type { ThunkConfig } from '@/shared/config/redux/types';

interface LoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      return rejectWithValue('Credentials are incorrect');
    }
  },
);
