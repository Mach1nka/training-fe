import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Theme } from '@/shared/constant/theme';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { CommentForm } from './CommentForm';

export default {
  title: 'entities/CommentForm',
  component: CommentForm,
  args: {
    commentHintId: 'id',
    placeholder: 'Comment',
    label: 'Send',
    onCommentSubmit: action('onCommentSubmit'),
  },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => <CommentForm {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
