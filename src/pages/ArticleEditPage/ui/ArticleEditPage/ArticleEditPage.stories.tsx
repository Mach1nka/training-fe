import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';

import ArticleEditPage from './ArticleEditPage';

type Story = StoryObj<typeof ArticleEditPage>;

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  decorators: [storeDecorator()],
} as Meta<typeof ArticleEditPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
