import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Theme } from '@/shared/constant/theme';

import { CommentForm } from './CommentForm';

type Story = StoryObj<typeof CommentForm>;

export default {
  title: 'entities/CommentForm',
  component: CommentForm,
  args: {
    commentHintId: 'id',
    placeholder: 'Comment',
    label: 'Send',
    onCommentSubmit: action('onCommentSubmit'),
  },
} as Meta<typeof CommentForm>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
