import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator, storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';

import ArticleRecommendationsSection from './ArticleRecommendationsSection';

const article = {
  id: '1',
  user: {
    id: 1,
    username: 'username',
  },
  title: 'title',
  subtitle: 'subtitle',
  img: DefaultImage,
  views: 50,
  createdAt: '22.04.2016',
  type: ['ALL'],
  blocks: [],
};

export default {
  title: 'widgets/ArticleRecommendationsSection',
  component: ArticleRecommendationsSection,
  decorators: [storeDecorator(), routerDecorator()],
  parameters: {
    mockData: [{
      url: `${API_URL}/articles?_limit=4&_expand=user`,
      method: 'GET',
      status: 200,
      response: [
        { ...article },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    }],
  },
} as ComponentMeta<typeof ArticleRecommendationsSection>;

const Template: ComponentStory<typeof ArticleRecommendationsSection> = (args) => <ArticleRecommendationsSection {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
