import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types';

const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined,
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
  },
});

export const { actions: addCommentFormActions, reducer: addCommentFormReducer } = addCommentFormSlice;
