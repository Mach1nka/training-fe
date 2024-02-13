import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator } from '@/shared/lib/storybook/decorators';
import { ArticleSortedField, ArticleType } from '@/entities/Article';

import { ArticlesFiltrationSection } from './ArticlesFiltrationSection';

type Story = StoryObj<typeof ArticlesFiltrationSection>;

export default {
  title: 'features/ArticlesFilterSection',
  component: ArticlesFiltrationSection,
  decorators: [routerDecorator()],
  args: {
    articleTypeFilter: ArticleType.ALL,
    search: 'search text',
    sort: ArticleSortedField.TITLE,
    order: 'asc',
  },
} as Meta<typeof ArticlesFiltrationSection>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
