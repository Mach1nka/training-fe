import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import MainIcon from '@/shared/assets/icons/main.svg';

import { SidebarItem } from './SidebarItem';

export default {
  title: 'widgets/SidebarItem',
  component: SidebarItem,
  args: {
    item: {
      path: '/',
      text: 'page',
      Icon: MainIcon,
    },
  },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Light = Template.bind({});
Light.args = {
  collapsed: true,
};

export const Dark = Template.bind({});
Dark.args = {
  collapsed: false,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
