import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { routerDecorator, storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import MainIcon from '@/shared/assets/icons/main.svg';
import { userReducer } from '@/entities/User';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { SidebarItem } from './SidebarItem';

const initialReducers: ReducersList = {
  user: userReducer,
};

export default {
  title: 'widgets/SidebarItem',
  component: SidebarItem,
  decorators: [routerDecorator(), storeDecorator({ user: {} }, initialReducers)],
  args: {
    item: {
      path: '/',
      text: 'page',
      Icon: MainIcon,
    },
  },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const LightCollapsed = Template.bind({});
LightCollapsed.args = {
  collapsed: true,
};

export const Dark = Template.bind({});
Dark.args = {
  collapsed: false,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
