import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';
import { userReducer } from '@/entities/User';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import { Sidebar } from './Sidebar';

const initialReducers: ReducersList = {
  user: userReducer,
};

type Story = StoryObj<typeof Sidebar>;

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>;

export const LightAuth: Story = {
  decorators: [storeDecorator({ user: { authData: { id: '1' } } }, initialReducers)],
};

export const Dark: Story = {
  decorators: [storeDecorator({ user: {} }, initialReducers)],
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
