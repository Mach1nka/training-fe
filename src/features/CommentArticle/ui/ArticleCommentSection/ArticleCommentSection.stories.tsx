import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import { commentArticleReducer } from '../../model/slice/commentArticleSlice';

import ArticleCommentSection from './ArticleCommentSection';

const initialReducers: ReducersList = {
  commentArticle: commentArticleReducer,
};

const comment = {
  id: '1',
  text: 'text',
  user: {
    id: '1',
    username: 'username',
  },
};

type Story = StoryObj<typeof ArticleCommentSection>;

export default {
  title: 'features/CommentArticle',
  component: ArticleCommentSection,
  args: {
    articleId: '1',
  },
  decorators: [storeDecorator({}, initialReducers)],
  parameters: {
    mockData: [
      {
        url: `${API_URL}/comments?_expand=user`,
        method: 'GET',
        status: 200,
        response: [{ ...comment }, { ...comment, id: '2' }, { ...comment, id: '3' }],
      },
    ],
  },
} as Meta<typeof ArticleCommentSection>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
