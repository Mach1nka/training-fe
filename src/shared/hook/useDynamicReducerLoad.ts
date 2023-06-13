import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchemaKeys } from '@/shared/config/redux/types';

export type ReducersList = {
  [key in StateSchemaKeys]?: Reducer;
}

export function useDynamicReducerLoad(
  reducers: ReducersList,
  removeAfterUnmount = true,
) {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries<Reducer>(reducers).forEach(
      ([name, reducer]) => store.reducerManager.add(name as StateSchemaKeys, reducer),
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries<Reducer>(reducers)
          .forEach(([name]) => store.reducerManager.remove(name as StateSchemaKeys));
      }
    };
  }, [reducers, removeAfterUnmount]);
}
