import { StateSchema } from '@/shared/config/redux/types';

export const getArticleRecommendationsData = (state: StateSchema) =>
  state.articleRecommendations?.data || [];

export const getArticleRecommendationsLoading = (state: StateSchema) =>
  Boolean(state.articleRecommendations?.isLoading);

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleRecommendations?.error;
