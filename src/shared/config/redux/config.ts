import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { StateSchema } from './types';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof createReduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
