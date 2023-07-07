import { StateSchema } from '@/shared/config/redux/types';

export const getArticleCommentsData = (state: StateSchema) => state.articleComments?.data || [];

export const getArticleCommentsLoading = (state: StateSchema) =>
  state.articleComments?.isLoading || false;

export const getArticleCommentsError = (state: StateSchema) => state.articleComments?.error;
