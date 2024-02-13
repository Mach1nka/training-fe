import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme;


import { [FTName] } from './[FTName]';

type Story = StoryObj<typeof [FTName]>;

export default {
  title: '/[FTName]',
  component: [FTName],
} as Meta<typeof [FTName]>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};