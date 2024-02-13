import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Drawer } from './Drawer';

type Story = StoryObj<typeof Drawer>;

export default {
  title: 'shared/Drawer',
  component: Drawer,
  args: {
    isOpen: true,
  },
  parameters: {
    loki: {
      skip: true,
    },
  },
} as Meta<typeof Drawer>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
