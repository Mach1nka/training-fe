import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User, UserSchema } from '../types';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constant/localstorage';

const initialState: UserSchema = {
  authData: undefined,
  initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },
    initAuthData: {
      reducer: (state, { payload }: PayloadAction<User | undefined>) => {
        if (payload) {
          state.authData = payload;
        }
        state.initialized = true;
      },
      prepare: () => {
        const authData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        const parsedData: User | undefined = authData ? JSON.parse(authData) : undefined;

        return { payload: parsedData };
      },
    },
    logout: {
      reducer: (state) => {
        state.authData = undefined;
      },
      prepare: () => {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        return { payload: undefined };
      },
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
