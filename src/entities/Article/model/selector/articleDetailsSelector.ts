import { StateSchema } from '@/shared/config/redux/types';

const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;

const getArticleDetailsIsLoading = (state: StateSchema) => Boolean(state.articleDetails?.isLoading);

const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;

export {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
};
