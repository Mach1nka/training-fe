import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthUserByUsername';
import { ProfileSchema } from '@/entities/Profile';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleCommentsSchema } from '@/widgets/ArticleCommentSection';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { WallOfArticlesSchema } from '@/widgets/WallOfArticles';
import { UIConditionSchema } from '@/features/UICondition';
import { ArticleRecommendationsSchema } from '@/widgets/ArticleRecommendationsSection';

import { createReducerManager } from './reducerManager';

export interface StateSchema {
  user: UserSchema;
  uiCondition: UIConditionSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleComments?: ArticleCommentsSchema;
  articleRecommendations?: ArticleRecommendationsSchema;
  addCommentForm?: AddCommentFormSchema;
  wallOfArticles?: WallOfArticlesSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReturnType<typeof createReducerManager>;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
