import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';

import { ArticlesFiltrationSection } from './ArticlesFiltrationSection';
import { ArticleSortedField, ArticleType } from '@/entities/Article';

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
} as ComponentMeta<typeof ArticlesFiltrationSection>;

const Template: ComponentStory<typeof ArticlesFiltrationSection> = (args) => <ArticlesFiltrationSection {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
