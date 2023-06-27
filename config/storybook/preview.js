import { addDecorator } from '@storybook/react';

import {
  styleDecorator,
  themeDecorator,
} from '../../src/shared/lib/storybook/decorators';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
