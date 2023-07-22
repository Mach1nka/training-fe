import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Article } from '@/entities/Article';

import { ArticleRecommendationsSchema } from '../types';
import {
  fetchArticleRecommendations,
} from '../service/fetchArticleRecommendations/fetchArticleRecommendations';

const initialState: ArticleRecommendationsSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleRecommendations.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const {
  actions: articleRecommendationsActions,
  reducer: articleRecommendationsReducer,
} = articleRecommendationsSlice;
