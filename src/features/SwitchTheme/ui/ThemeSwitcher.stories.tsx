import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { ThemeSwitcher } from './ThemeSwitcher';

type Story = StoryObj<typeof ThemeSwitcher>;

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
