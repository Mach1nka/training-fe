import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { routerDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';

import { CommentCard } from './CommentCard';

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
  decorators: [routerDecorator()],
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
