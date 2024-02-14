import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { CommentCard } from './CommentCard';

type Story = StoryObj<typeof CommentCard>;

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  args: {
    comment: {
      id: '1',
      text: 'comment text',
      user: {
        id: '1',
        username: 'guest',
      },
    },
  },

} as Meta<typeof CommentCard>;

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
