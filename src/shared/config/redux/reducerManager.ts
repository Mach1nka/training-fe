import {
  combineReducers, AnyAction, ReducersMapObject, Reducer,
} from '@reduxjs/toolkit';

import { StateSchema, StateSchemaKeys } from './types';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKeys[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema | undefined, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        if (state) {
          state = { ...state };
          keysToRemove.forEach((key) => {
            delete state?.[key];
          });
          keysToRemove = [];
        }
      }

      return combinedReducer(state, action);
    },
    add: (key: StateSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemaKeys) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
