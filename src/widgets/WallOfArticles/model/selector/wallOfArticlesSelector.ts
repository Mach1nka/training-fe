import { ArticleSortedField, ArticleType, ArticleView } from '@/entities/Article';
import { StateSchema } from '@/shared/config/redux/types';

export const getWallOfArticlesData = (state: StateSchema) => state.wallOfArticles?.data || [];

export const getWallOfArticlesView = (state: StateSchema) =>
  state.wallOfArticles?.view || ArticleView.TILE;

export const getWallOfArticlesLimit = (state: StateSchema) => state.wallOfArticles?.limit || 9;

export const getWallOfArticlesHasMore = (state: StateSchema) => Boolean(state.wallOfArticles?.hasMore);

export const getWallOfArticlesSort = (state: StateSchema) =>
  state.wallOfArticles?.sort || ArticleSortedField.CREATED_AT;

export const getWallOfArticlesOrder = (state: StateSchema) => state.wallOfArticles?.order || 'asc';

export const getWallOfArticlesSearch = (state: StateSchema) => state.wallOfArticles?.search ?? '';

export const getWallOfArticlesTypeFilter = (state: StateSchema) =>
  state.wallOfArticles?.filters.type || ArticleType.ALL;

export const getWallOfArticlesPage = (state: StateSchema) => state.wallOfArticles?.page || 1;

export const getWallOfArticlesLoading = (state: StateSchema) => Boolean(state.wallOfArticles?.isLoading);

export const getWallOfArticlesInitialized = (state: StateSchema) =>
  Boolean(state.wallOfArticles?.initialized);

export const getWallOfArticlesError = (state: StateSchema) => state.wallOfArticles?.error;
