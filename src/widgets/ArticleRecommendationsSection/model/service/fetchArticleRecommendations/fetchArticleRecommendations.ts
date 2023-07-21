import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
  'articleRecommendations/fetchArticleRecommendations',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: 4,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('Credentials are incorrect');
    }
  },
);
