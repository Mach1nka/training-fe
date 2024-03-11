import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { SortingOrder } from '@/shared/types/common';
import { ArticleSortedField, ArticleType, ArticleView } from '@/entities/Article';

import type { SearchURLParamsMapper, WallOfArticlesSchema } from '../types';
import { fetchArticles } from '../service/fetchArticles/fetchArticles';

const initialState: WallOfArticlesSchema = {
  data: [],
  view: ArticleView.TILE,
  isLoading: false,
  page: 1,
  limit: 10,
  hasMore: true,
  sort: ArticleSortedField.CREATED_AT,
  order: 'asc',
  search: '',
  filters: {
    type: ArticleType.ALL,
  },
  initialized: false,
  error: undefined,
};

const mapSearchURLParams: SearchURLParamsMapper = (state) => ({
  order: (value: string) => {
    state.order = value as SortingOrder;
  },
  sort: (value: string) => {
    state.sort = value as ArticleSortedField;
  },
  type: (value: string) => {
    state.filters.type = value as ArticleType;
  },
  search: (value: string) => {
    state.search = value;
  },
});

const wallOfArticlesSlice = createSlice({
  name: 'wallOfArticles',
  initialState,
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
    },
    setSortField: (state, { payload }: PayloadAction<ArticleSortedField>) => {
      state.sort = payload;
    },
    setSortOrder: (state, { payload }: PayloadAction<SortingOrder>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setTypeFilter: (state, { payload }: PayloadAction<ArticleType>) => {
      state.filters.type = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    initWallOfArticles: (
      state,
      {
        payload,
      }: PayloadAction<{ view?: ArticleView; searchURLParams: Record<string, string> }>,
    ) => {
      state.initialized = true;
      if (payload.view) {
        state.view = payload.view;
        state.limit = payload.view === ArticleView.LIST ? 4 : 10;
      }
      Object.entries(payload.searchURLParams).forEach(([key, value]) =>
        mapSearchURLParams(state)[key](value),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, { meta }) => {
        if (meta.arg.replace) {
          state.data = [];
        }
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, { payload, meta }) => {
        if (meta.arg.replace) {
          state.data = payload;
        } else {
          state.data = state.data.concat(payload);
        }
        state.hasMore = payload.length >= state.limit;
        state.isLoading = false;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: wallOfArticlesActions, reducer: wallOfArticlesReducer } =
  wallOfArticlesSlice;
