import { ArticleView } from '@/entities/Article';
import { StateSchema } from '@/shared/config/redux/types';

export const getWallOfArticlesData = (state: StateSchema) => state.wallOfArticles?.data || [];

export const getWallOfArticlesView = (state: StateSchema) =>
  state.wallOfArticles?.view || ArticleView.TILE;

export const getWallOfArticlesLimit = (state: StateSchema) => state.wallOfArticles?.limit || 9;

export const getWallOfArticlesHasMore = (state: StateSchema) => Boolean(state.wallOfArticles?.hasMore);

export const getWallOfArticlesPage = (state: StateSchema) => state.wallOfArticles?.page || 1;

export const getWallOfArticlesLoading = (state: StateSchema) => Boolean(state.wallOfArticles?.isLoading);

export const getWallOfArticlesError = (state: StateSchema) => state.wallOfArticles?.error;
