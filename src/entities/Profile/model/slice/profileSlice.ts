import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileSchema } from '../type';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

const counterSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

export const { actions: profileActions, reducer: profileReducer } = counterSlice;
