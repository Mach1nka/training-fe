import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { DeepPartial } from '@reduxjs/toolkit';

import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/shared/config/redux/types';

export interface Options {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const renderPreset = (
  component: ReactNode,
  { route = '/', initialState }: Options = {},
) => {
  render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
