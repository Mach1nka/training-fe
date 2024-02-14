import type { StoryObj, Meta } from '@storybook/react';

import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';

import { ArticleType, ArticleView } from '../../model/const';

import { ArticleList } from './ArticleList';

type Story = StoryObj<typeof ArticleList>;

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
        type: [ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE],
        blocks: [
          {
            id: '1',
            type: 'TEXT',
            title: 'title',
            paragraphs: ['paragraph 1', 'paragraph 2'],
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
        type: [ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE],
        blocks: [
          {
            id: '1',
            type: 'TEXT',
            title: 'title',
            paragraphs: ['paragraph 1', 'paragraph 2'],
          },
        ],
      },
    ],
  },
} as Meta<typeof ArticleList>;

export const List: Story = {
  args: {
    view: ArticleView.LIST,
  },
};

export const Tile: Story = {};

export const LoadingTile: Story = {
  args: {
    isLoading: true,
  },
};

export const LoadingList: Story = {
  args: {
    isLoading: true,
    view: ArticleView.LIST,
  },
};
