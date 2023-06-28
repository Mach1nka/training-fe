import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { ArticleCommentsSchema } from '../types';
import { fetchCommentsByArticleId } from '../service/fetchCommentsByArticleId/fetchCommentsByArticleId';

const initialState: ArticleCommentsSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }: PayloadAction<Comment[]>) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
