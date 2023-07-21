import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';
import { Article, ArticleType } from '@/entities/Article';

import {
  getWallOfArticlesLimit,
  getWallOfArticlesOrder,
  getWallOfArticlesPage,
  getWallOfArticlesSearch,
  getWallOfArticlesSort,
  getWallOfArticlesTypeFilter,
} from '../../selector/wallOfArticlesSelector';

interface Props {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], Props, ThunkConfig<string>>(
  'wallOfArticles/fetchArticles',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const limit = getWallOfArticlesLimit(getState());
      const page = getWallOfArticlesPage(getState());
      const sort = getWallOfArticlesSort(getState());
      const order = getWallOfArticlesOrder(getState());
      const search = getWallOfArticlesSearch(getState());
      const articleTypeFilter = getWallOfArticlesTypeFilter(getState());

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          type_like: articleTypeFilter === ArticleType.ALL ? null : articleTypeFilter,
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
