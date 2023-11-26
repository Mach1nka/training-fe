import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CommentArticleSchema } from '../types';

const initialState: CommentArticleSchema = {
  text: '',
  error: undefined,
};

// NOTE: Educational slice. Handling through useState must be used in production.
const commentArticleSlice = createSlice({
  name: 'commentArticle',
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
  },
});

export const { actions: commentArticleActions, reducer: commentArticleReducer } = commentArticleSlice;
