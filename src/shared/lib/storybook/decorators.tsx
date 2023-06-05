import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/shared/config/reduxConfig/StateSchema';

import '@/app/styles/index.scss';

export const styleDecorator = (Story: Story) => <Story />;

// TODO: integrate global storybook addon
export const themeDecorator = (theme: Theme) => (Story: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
);

export const routerDecorator = (Story: Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export const storeDecorator = (initialState: DeepPartial<StateSchema>) => (Story: Story) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);

// TODO integrate react-i18next addon
// export const i18nDecorator = (Story: Story) => (
//   <I18nextProvider i18n={i18n}>
//     <Suspense fallback="">
//       <Story />
//     </Suspense>
//   </I18nextProvider>
// );
