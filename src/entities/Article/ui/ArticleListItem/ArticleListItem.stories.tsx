import { ComponentStory, ComponentMeta } from '@storybook/react';

import { routerDecorator } from '@/shared/lib/storybook/decorators';
import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';

import { ArticleListItem } from './ArticleListItem';
import { ArticleType, ArticleView } from '../../model/types';

export default {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  args: {
    article: {
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
      type: [
        ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE,
      ],
      blocks: [
        {
          id: '1',
          type: 'TEXT',
          title: 'title',
          paragraphs: [
            'paragraph 1',
            'paragraph 2',
          ],
        },
      ],
    },
  },
  decorators: [routerDecorator()],
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const List = Template.bind({});
List.args = {
  view: ArticleView.LIST,
};

export const Tile = Template.bind({});
Tile.args = {
  view: ArticleView.TILE,
};
