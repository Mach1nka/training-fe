import { createSelector } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';

const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;

const getCanBeArticleEdited = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }
    return article?.user.id === user?.id;
  },
);

const getArticleDetailsIsLoading = (state: StateSchema) =>
  Boolean(state.articleDetails?.isLoading);

const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;

export {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  getCanBeArticleEdited,
};
