import type { ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { uiConditionReducer } from '@/features/UICondition';
import { userReducer } from '@/entities/User';
import { api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import type { StateSchema, ThunkExtraArg } from './types';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    uiCondition: uiConditionReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const extraArgs: ThunkExtraArg = {
    api,
  };

  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs,
      },
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
