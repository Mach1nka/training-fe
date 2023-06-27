import { StateSchema } from '@/shared/config/redux/types';

const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;

const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;

const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;

export {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
};
