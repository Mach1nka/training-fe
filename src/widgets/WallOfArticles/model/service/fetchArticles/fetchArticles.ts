import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';
import { Article } from '@/entities/Article';
import { getWallOfArticlesLimit, getWallOfArticlesPage } from '../../selector/wallOfArticlesSelector';

export const fetchArticles = createAsyncThunk<Article[], number | undefined, ThunkConfig<string>>(
  'wallOfArticles/fetchArticles',
  async (page, { rejectWithValue, extra, getState }) => {
    try {
      const limit = getWallOfArticlesLimit(getState());
      const defaultPage = getWallOfArticlesPage(getState());

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page || defaultPage,
          _limit: limit,
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
