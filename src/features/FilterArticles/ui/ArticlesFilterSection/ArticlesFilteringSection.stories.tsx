import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { ArticleSortedField, ArticleType } from '@/entities/Article';

import { ArticlesFiltrationSection } from './ArticlesFiltrationSection';

type Story = StoryObj<typeof ArticlesFiltrationSection>;

export default {
  title: 'features/ArticlesFilterSection',
  component: ArticlesFiltrationSection,
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
