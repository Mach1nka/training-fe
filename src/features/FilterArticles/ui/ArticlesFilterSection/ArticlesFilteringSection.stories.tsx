import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { routerDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';

import { ArticlesFiltrationSection } from './ArticlesFiltrationSection';
import { ArticleType } from '@/entities/Article';

export default {
  title: 'features/ArticlesFilterSection',
  component: ArticlesFiltrationSection,
  decorators: [routerDecorator()],
  args: {
    articleTypeFilter: ArticleType.ALL,
    search: 'search text',
  },
} as ComponentMeta<typeof ArticlesFiltrationSection>;

const Template: ComponentStory<typeof ArticlesFiltrationSection> = (args) => <ArticlesFiltrationSection {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
