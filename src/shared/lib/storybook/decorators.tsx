import { Story } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import { StateSchema } from '../../config/redux/types';

import '@/app/styles/index.scss';

export const styleDecorator = (Story: Story) => <Story />;

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

// TODO: integrate storybook-react-i18next after updating SB till v7
// export const i18nDecorator = (Story: Story) => (
//   <I18nextProvider i18n={i18n}>
//     <Suspense fallback="">
//       <Story />
//     </Suspense>
//   </I18nextProvider>
// );
