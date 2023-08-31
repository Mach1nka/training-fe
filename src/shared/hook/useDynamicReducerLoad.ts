import { useEffect } from 'react';
import type { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

import type { ReduxStoreWithManager, StateSchema, StateSchemaKeys } from '@/shared/config/redux/types';

export type ReducersList = {
  [key in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[key]>>;
}

type UseDynamicReducerLoad = (reducers: ReducersList, removeAfterUnmount?: boolean) => void;

export const useDynamicReducerLoad: UseDynamicReducerLoad = (
  reducers: ReducersList,
  removeAfterUnmount = true,
) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const initializedReducers = store.reducerManager.getReducerMap();

    Object.entries<Reducer>(reducers).forEach(
      ([name, reducer]) => {
        if (!initializedReducers[name as StateSchemaKeys]) {
          store.reducerManager.add(name as StateSchemaKeys, reducer);
          dispatch({ type: `@INIT ${name} reducer` });
        }
      },
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries<Reducer>(reducers)
          .forEach(([name]) => {
            store.reducerManager.remove(name as StateSchemaKeys);
            dispatch({ type: `@REMOVE ${name} reducer` });
          });
      }
    };
  }, [reducers, removeAfterUnmount, store.reducerManager]);
};
