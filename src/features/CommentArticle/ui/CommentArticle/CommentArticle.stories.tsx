import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { routerDecorator, storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import { commentArticleReducer } from '../../model/slice/commentArticleSlice';

import CommentArticle from './CommentArticle';

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

export default {
  title: 'features/CommentArticle',
  component: CommentArticle,
  args: {
    articleId: '1',
  },
  decorators: [storeDecorator({}, initialReducers), routerDecorator()],
  parameters: {
    mockData: [{
      url: `${API_URL}/comments?_expand=user`,
      method: 'GET',
      status: 200,
      response: [
        { ...comment },
        { ...comment, id: '2' },
        { ...comment, id: '3' },
      ],
    }],
  },
} as ComponentMeta<typeof CommentArticle>;

const Template: ComponentStory<typeof CommentArticle> = (args) => <CommentArticle {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
