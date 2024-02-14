import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';

import MainPage from './MainPage';

type Story = StoryObj<typeof MainPage>;

export default {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [storeDecorator()],
} as Meta<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
