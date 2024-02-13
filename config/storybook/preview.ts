import { withThemeByClassName } from '@storybook/addon-themes';
import {
  commonStyleDecorator,

} from '@/shared/lib/storybook/decorators';

import '@/app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  commonStyleDecorator,
  withThemeByClassName(
    {
      themes: {
        light: '',
        dark: 'dark',
        purple: 'purple',
      },
      defaultTheme: 'light'
    }
  ),
];