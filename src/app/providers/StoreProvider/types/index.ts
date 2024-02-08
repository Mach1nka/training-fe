import type { EnhancedStore } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';

import type { UserSchema } from '@/entities/User';
import type { LoginSchema } from '@/features/AuthUserByUsername';
import type { ProfileSchema } from '@/entities/Profile';
import type { ArticleDetailsSchema } from '@/entities/Article';
import type { CommentArticleSchema } from '@/features/CommentArticle';
import type { WallOfArticlesSchema } from '@/widgets/WallOfArticles';
import type { UIConditionSchema } from '@/features/UICondition';
import type { rtkApi } from '@/shared/api/rtkApi';

import type { createReducerManager } from '../lib/reducerManager';

export interface StateSchema {
  user: UserSchema;
  uiCondition: UIConditionSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  commentArticle?: CommentArticleSchema;
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
