import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW } from '@/shared/constant/localstorage';
import type { SortingOrder } from '@/shared/types/common';
import { ArticleSortedField, ArticleType, ArticleView } from '@/entities/Article';

import type { WallOfArticlesSchema } from '../types';
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

const wallOfArticlesSlice = createSlice({
  name: 'wallOfArticles',
  initialState,
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW, payload);
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
    initWallOfArticles: {
      reducer: (
        state,
        { payload }: PayloadAction<{ view?: ArticleView, searchURLParams: Record<string, string> }>,
      ) => {
        state.initialized = true;
        if (payload.view) {
          state.view = payload.view;
          state.limit = payload.view === ArticleView.LIST ? 4 : 10;
        }
        Object.keys(payload.searchURLParams).forEach((key) => {
          switch (key) {
          case 'order':
            state.order = payload.searchURLParams[key] as SortingOrder;
            break;
          case 'sort':
            state.sort = payload.searchURLParams[key] as ArticleSortedField;
            break;
          case 'search':
            state.search = payload.searchURLParams[key];
            break;
          case 'type':
            state.filters.type = payload.searchURLParams[key] as ArticleType;
            break;
          default:
            break;
          }
        });
      },
      prepare: (searchURLParams: Record<string, string>) => {
        const view = localStorage.getItem(LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW) as ArticleView;
        return { payload: { view, searchURLParams } };
      },
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

export const { actions: wallOfArticlesActions, reducer: wallOfArticlesReducer } = wallOfArticlesSlice;
