import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '@/shared/config/redux/store';
import type { StateSchema } from '@/shared/config/redux/types';

interface Props {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<Props> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
