import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';

import { Navbar } from './Navbar';

type Story = StoryObj<typeof Navbar>;

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

export const Light: Story = {
  decorators: [storeDecorator({ user: { authData: undefined } })],
};

export const Authorized: Story = {
  decorators: [storeDecorator({ user: { authData: { id: '1', username: 'guest' } } })],
};

export const Dark: Story = {
  decorators: [storeDecorator({ user: { authData: undefined } })],
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};

export const AuthorizedDark: Story = {
  decorators: [
    storeDecorator({ user: { authData: { id: '1', username: 'guest' } } }),
  ],
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
