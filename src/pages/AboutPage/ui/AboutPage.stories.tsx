import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator, storeDecorator } from '@/shared/lib/storybook/decorators';

import AboutPage from './AboutPage';

type Story = StoryObj<typeof AboutPage>;

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  decorators: [routerDecorator(), storeDecorator()],
} as Meta<typeof AboutPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
