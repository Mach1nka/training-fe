import type { ComponentStory, ComponentMeta } from '@storybook/react';

import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';
import { routerDecorator } from '@/shared/lib/storybook/decorators';

import { ArticleType, ArticleView } from '../../model/const';

import { ArticleList } from './ArticleList';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  args: {
    articles: [
      {
        id: '1',
        user: {
          id: '1',
          username: 'user',
        },
        title: 'some title',
        subtitle: 'some subtitle',
        img: DefaultImage,
        views: 10,
        createdAt: '20.05.2020',
        type: [
          ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE,
        ],
        blocks: [
          {
            id: '1',
            type: 'TEXT',
            title: 'title',
            paragraphs: [
              'paragraph 1',
              'paragraph 2',
            ],
          },
        ],
      },
      {
        id: '1',
        user: {
          id: '1',
          username: 'user',
        },
        title: 'some title',
        subtitle: 'some subtitle',
        img: DefaultImage,
        views: 10,
        createdAt: '20.05.2020',
        type: [
          ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE,
        ],
        blocks: [
          {
            id: '1',
            type: 'TEXT',
            title: 'title',
            paragraphs: [
              'paragraph 1',
              'paragraph 2',
            ],
          },
        ],
      },
    ],
  },
  decorators: [routerDecorator()],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const List = Template.bind({});
List.args = {
  view: ArticleView.LIST,
};

export const Tile = Template.bind({});

export const LoadingTile = Template.bind({});
LoadingTile.args = {
  isLoading: true,
};

export const LoadingList = Template.bind({});
LoadingList.args = {
  isLoading: true,
  view: ArticleView.LIST,
};
