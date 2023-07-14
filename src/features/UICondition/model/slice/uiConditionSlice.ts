import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UIConditionSchema } from '../types';

const initialState: UIConditionSchema = {
  scroll: {},
};

export const uiConditionSlice = createSlice({
  name: 'uiCondition',
  initialState,
  reducers: {
    setPageScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: uiConditionActions, reducer: uiConditionReducer } = uiConditionSlice;
