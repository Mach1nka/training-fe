import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator, storeDecorator, routerDecorator } from '@/shared/lib/storybook/decorators';

import ArticleCommentSection from './ArticleCommentSection';

const comment = {
  id: '1',
  text: 'text',
  user: {
    id: '1',
    username: 'username',
  },
};

export default {
  title: 'widgets/ArticleCommentSection',
  component: ArticleCommentSection,
  decorators: [storeDecorator(), routerDecorator()],
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
} as ComponentMeta<typeof ArticleCommentSection>;

const Template: ComponentStory<typeof ArticleCommentSection> = (args) => <ArticleCommentSection {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
