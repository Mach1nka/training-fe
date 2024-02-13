import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Skeleton } from './Skeleton';

type Story = StoryObj<typeof Skeleton>;

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    width: 100,
    height: 100,
  },
} as Meta<typeof Skeleton>;

export const Square: Story = {};

export const Circle: Story = {
  args: {
    borderRadius: '50%',
  },
};

export const SquareDark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};

export const CircleDark: Story = {
  args: {
    borderRadius: '50%',
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
