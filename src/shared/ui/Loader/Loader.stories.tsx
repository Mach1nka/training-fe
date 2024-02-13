import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Loader } from './Loader';

type Story = StoryObj<typeof Loader>;

export default {
  title: 'shared/Loader',
  component: Loader,
} as Meta<typeof Loader>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
