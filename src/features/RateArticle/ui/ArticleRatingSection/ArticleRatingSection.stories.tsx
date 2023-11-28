import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import ArticleRatingSection from './ArticleRatingSection';

export default {
  title: 'features/ArticleRatingSection',
  component: ArticleRatingSection,
} as ComponentMeta<typeof ArticleRatingSection>;

const Template: ComponentStory<typeof ArticleRatingSection> = (args) => <ArticleRatingSection {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
