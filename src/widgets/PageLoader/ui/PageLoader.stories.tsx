import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { PageLoader } from './PageLoader';

type Story = StoryObj<typeof PageLoader>;

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
} as Meta<typeof PageLoader>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
