import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { PageError } from './PageError';

type Story = StoryObj<typeof PageError>;

export default {
  title: 'widgets/PageError',
  component: PageError,
} as Meta<typeof PageError>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
