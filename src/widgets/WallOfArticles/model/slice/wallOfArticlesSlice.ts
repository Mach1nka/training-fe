import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW } from '@/shared/constant/localstorage';
import { Article, ArticleView } from '@/entities/Article';

import { WallOfArticlesSchema } from '../types';
import { fetchArticles } from '../service/fetchArticles/fetchArticles';

const initialState: WallOfArticlesSchema = {
  data: [],
  view: ArticleView.TILE,
  isLoading: false,
  page: 1,
  hasMore: true,
  initialized: false,
  error: undefined,
};

const wallOfArticlesSlice = createSlice({
  name: 'wallOfArticles',
  initialState,
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW, payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    initWallOfArticles: {
      reducer: (state, { payload }: PayloadAction<ArticleView | undefined>) => {
        if (payload) {
          state.view = payload;
          state.limit = payload === ArticleView.LIST ? 4 : 9;
        }
        state.initialized = true;
      },
      prepare: () => {
        const view = localStorage.getItem(LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW) as ArticleView;
        return { payload: view };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        state.data = state.data.concat(payload);
        state.hasMore = payload.length >= 4;
        state.isLoading = false;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: wallOfArticlesActions, reducer: wallOfArticlesReducer } = wallOfArticlesSlice;
