import { EnhancedStore } from '@reduxjs/toolkit';

import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthUserByUsername';

import { createReducerManager } from './reducerManager';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReturnType<typeof createReducerManager>;
}
