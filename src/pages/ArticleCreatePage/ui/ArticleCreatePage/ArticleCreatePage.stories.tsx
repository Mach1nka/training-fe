import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';

import ArticleCreatePage from './ArticleCreatePage';

type Story = StoryObj<typeof ArticleCreatePage>;

export default {
  title: 'pages/ArticleCreatePage',
  component: ArticleCreatePage,
  decorators: [storeDecorator()],
} as Meta<typeof ArticleCreatePage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
