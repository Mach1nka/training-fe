import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Rating } from './Rating';

type Story = StoryObj<typeof Rating>;

export default {
  title: 'shared/Rating',
  component: Rating,
} as Meta<typeof Rating>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
