import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';

import NotFoundPage from './NotFoundPage';

type Story = StoryObj<typeof NotFoundPage>;

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  decorators: [storeDecorator()],
} as Meta<typeof NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
