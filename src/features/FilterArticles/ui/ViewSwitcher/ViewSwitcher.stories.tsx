import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { ViewSwitcher } from './ViewSwitcher';
import { ArticleView } from '@/entities/Article';

export default {
  title: 'features/ViewSwitcher',
  component: ViewSwitcher,
} as ComponentMeta<typeof ViewSwitcher>;

const Template: ComponentStory<typeof ViewSwitcher> = (args) => <ViewSwitcher {...args} />;

export const List = Template.bind({});
List.args = {
  view: ArticleView.LIST,
};

export const Tile = Template.bind({});
Tile.args = {
  view: ArticleView.TILE,
};

export const Dark = Template.bind({});
Dark.args = {
  view: ArticleView.LIST,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
