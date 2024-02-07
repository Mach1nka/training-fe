import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkConfig } from '@/app/providers/StoreProvider';

import {
  getWallOfArticlesError,
  getWallOfArticlesHasMore,
  getWallOfArticlesLoading,
  getWallOfArticlesPage,
} from '../../selector/wallOfArticlesSelector';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { wallOfArticlesActions } from '../../slice/wallOfArticlesSlice';

export const fetchArticlesByPage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'wallOfArticles/fetchPageOfArticles',
  async (_, { getState, dispatch }) => {
    const page = getWallOfArticlesPage(getState());
    const hasMore = getWallOfArticlesHasMore(getState());
    const isLoading = getWallOfArticlesLoading(getState());
    const error = getWallOfArticlesError(getState());

    if (!error) {
      if (hasMore && !isLoading) {
        dispatch(wallOfArticlesActions.setPage(page + 1));
        dispatch(fetchArticles({}));
      }
    }
  },
);
