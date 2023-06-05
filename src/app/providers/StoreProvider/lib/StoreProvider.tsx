import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { createReduxStore } from '@/shared/config/reduxConfig/reduxConfig';
import { StateSchema } from '@/shared/config/reduxConfig/StateSchema';

interface Props {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<Props> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
