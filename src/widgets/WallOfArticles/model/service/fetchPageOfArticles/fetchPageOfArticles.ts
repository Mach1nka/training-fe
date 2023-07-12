import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/redux/types';

import {
  getWallOfArticlesHasMore,
  getWallOfArticlesLoading,
  getWallOfArticlesPage,
} from '../../selector/wallOfArticlesSelector';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { wallOfArticlesActions } from '../../slice/wallOfArticlesSlice';

export const fetchPageOfArticles = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'wallOfArticles/fetchPageOfArticles',
  async (_, { getState, dispatch }) => {
    const page = getWallOfArticlesPage(getState());
    const hasMore = getWallOfArticlesHasMore(getState());
    const isLoading = getWallOfArticlesLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(wallOfArticlesActions.setPage(page + 1));
      dispatch(fetchArticles(page + 1));
    }
  },
);
