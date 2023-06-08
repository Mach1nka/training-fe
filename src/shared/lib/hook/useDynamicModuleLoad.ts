import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchemaKeys } from '@/shared/config/redux/types';

export type ReducersList = {
  [key in StateSchemaKeys]?: Reducer;
}

function useDynamicModuleLoad(
  reducers: ReducersList,
  removeAfterUnmount = true,
) {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([name, reducer]: [StateSchemaKeys, Reducer]) => store.reducerManager.add(name, reducer),
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers)
          .forEach(([name]: [StateSchemaKeys, Reducer]) => store.reducerManager.remove(name));
      }
    };
  }, [reducers, removeAfterUnmount]);
}

export { useDynamicModuleLoad };
