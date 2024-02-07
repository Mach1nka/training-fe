import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import type { DeepPartial } from '@reduxjs/toolkit';

import { StoreProvider } from '@/app/providers';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import type { StateSchema } from '@/shared/config/redux/types';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

export interface Options {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export const renderPreset = (
  component: ReactNode,
  { route = '/', initialState, asyncReducers }: Options = {},
) => {
  render(
    <StoreProvider initialState={initialState as StateSchema} asyncReducers={asyncReducers}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
