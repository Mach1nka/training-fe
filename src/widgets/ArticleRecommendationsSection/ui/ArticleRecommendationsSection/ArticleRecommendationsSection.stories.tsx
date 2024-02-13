import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator, storeDecorator } from '@/shared/lib/storybook/decorators';
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

type Story = StoryObj<typeof ArticleRecommendationsSection>;

export default {
  title: 'widgets/ArticleRecommendationsSection',
  component: ArticleRecommendationsSection,
  decorators: [storeDecorator(), routerDecorator()],
  parameters: {
    mockData: [
      {
        url: `${API_URL}/articles?_limit=4&_expand=user`,
        method: 'GET',
        status: 200,
        response: [{ ...article }, { ...article, id: '2' }, { ...article, id: '3' }],
      },
    ],
  },
} as Meta<typeof ArticleRecommendationsSection>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
