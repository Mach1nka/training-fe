import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { AppImage } from './AppImage';

type Story = StoryObj<typeof AppImage>;

export default {
  title: 'shared/AppImage',
  component: AppImage,
} as Meta<typeof AppImage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
