import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User, UserSchema } from '../type';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constant/localstorage';

const initialState: UserSchema = {
  authData: null,
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
      },
      prepare: () => {
        const authData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
        return { payload: authData };
      },
    },
    logout: {
      reducer: (state) => {
        state.authData = null;
      },
      prepare: () => {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        return { payload: undefined };
      },
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
