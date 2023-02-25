import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Theme, ThemeProvider, ThemeContext } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';

export const styleDecorator = (Story: Story) => <Story />;

// TODO: integrate global storybook addon
export const themeDecorator = (theme: Theme) => (Story: Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);

export const routerDecorator = (Story: Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

// TODO: integrate i18n
// export const i18nDecorator = (Story: Story) => (
//   <I18nextProvider i18n={i18nForTests}>
//     <Story />
//   </I18nextProvider>
// );
