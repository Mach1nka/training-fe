import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { routerDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';

import { CommentList } from './CommentList';

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
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
