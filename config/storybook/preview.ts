import { withThemeByClassName } from '@storybook/addon-themes';
import { withRouter } from 'storybook-addon-react-router-v6';

import { commonStyleDecorator } from '@/shared/lib/storybook/decorators';
import i18nStorybook from '@/shared/config/i18n/i18nStorybook';

import '@/app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n: i18nStorybook,
  layout: 'fullscreen',
};

export const globals = {
  locale: 'en',
  locales: {
    en: 'English',
    ru: 'Russian',
  },
};

export const decorators = [
  commonStyleDecorator,
  withRouter,
  withThemeByClassName(
    {
      themes: {
        light: '',
        dark: 'dark',
        purple: 'purple',
      },
      defaultTheme: 'light',
    },
  ),
];
