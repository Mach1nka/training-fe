import { addDecorator } from '@storybook/react';

import {
  commonStyleDecorator,
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

addDecorator(commonStyleDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
