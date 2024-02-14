import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';
import MainIcon from '@/shared/assets/icons/main.svg';
import { userReducer } from '@/entities/User';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import { SidebarItem } from './SidebarItem';

const initialReducers: ReducersList = {
  user: userReducer,
};

type Story = StoryObj<typeof SidebarItem>;

export default {
  title: 'widgets/SidebarItem',
  component: SidebarItem,
  decorators: [storeDecorator({ user: {} }, initialReducers)],
  args: {
    item: {
      path: '/',
      text: 'page',
      Icon: MainIcon,
    },
  },
} as Meta<typeof SidebarItem>;

export const LightCollapsed: Story = {
  args: {
    collapsed: true,
  },
};

export const Dark: Story = {
  args: {
    collapsed: false,
  },
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
