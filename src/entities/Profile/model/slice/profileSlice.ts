import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile, ProfileSchema } from '../type';
import { fetchProfileData } from '../service/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
};

const counterSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = counterSlice;
