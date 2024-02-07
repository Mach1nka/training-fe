import { Suspense } from 'react';
import type { CSSProperties } from 'react';
import type { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider, StoreProvider } from '@/app/providers';
import type { Theme } from '@/app/providers';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import type { StateSchema } from '../../config/redux/types';

// eslint-disable-next-line fsd/public-api-module-encapsulation
import '@/app/styles/index.scss';

export const commonStyleDecorator = (Story: Story) => <Story />;

export const styleDecorator = (styles: CSSProperties) =>
  (Story: Story) => <div style={styles}><Story /></div>;

// TODO: integrate storybook-addon-themes
export const themeDecorator = (theme: Theme) => (Story: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

// TODO: integrate storybook-addon-react-router-v6 after updating SB till v7
export const routerDecorator = (initialEntries?: string[], path?: string) => (Story: Story) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route path={path || ''} element={<Story />} />
    </Routes>
  </MemoryRouter>
);

export const storeDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: Story) => (
  <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
    <Story />
  </StoreProvider>
);

export const suspenseDecorator = () => (Story: Story) => (
  <Suspense fallback={null}>
    <Story />
  </Suspense>
);

// TODO: integrate storybook-react-i18next after updating SB till v7
// export const i18nDecorator = (Story: Story) => (
//   <I18nextProvider i18n={i18n}>
//     <Suspense fallback="">
//       <Story />
//     </Suspense>
//   </I18nextProvider>
// );
