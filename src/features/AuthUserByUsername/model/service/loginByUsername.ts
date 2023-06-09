import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userActions } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constant/localstorage';

interface LoginByUserName {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUserName, { rejectValue: string}>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

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
