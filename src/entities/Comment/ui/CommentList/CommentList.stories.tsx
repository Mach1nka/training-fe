import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator } from '@/shared/lib/storybook/decorators';

import { CommentList } from './CommentList';

type Story = StoryObj<typeof CommentList>;

export default {
  title: 'entities/CommentList',
  component: CommentList,
  args: {
    comments: [
      {
        id: '1',
        text: 'comment text',
        user: {
          id: '1',
          username: 'guest',
        },
      },
      {
        id: '2',
        text: 'comment text2',
        user: {
          id: '2',
          username: 'admin',
        },
      },
    ],
  },
  decorators: [routerDecorator()],
} as Meta<typeof CommentList>;

export const Light: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
