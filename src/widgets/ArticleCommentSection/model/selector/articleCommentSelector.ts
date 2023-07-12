import { StateSchema } from '@/shared/config/redux/types';

export const getArticleCommentsData = (state: StateSchema) => state.articleComments?.data || [];

export const getArticleCommentsLoading = (state: StateSchema) =>
  Boolean(state.articleComments?.isLoading);

export const getArticleCommentsError = (state: StateSchema) => state.articleComments?.error;
