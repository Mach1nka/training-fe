import { EnhancedStore } from '@reduxjs/toolkit';

import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthUserByUsername';
import { ProfileSchema } from '@/entities/Profile';

import { createReducerManager } from './reducerManager';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReturnType<typeof createReducerManager>;
}
