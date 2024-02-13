import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Card, CardTheme } from './Card';

type Story = StoryObj<typeof Card>;

export default {
  title: 'shared/Card',
  component: Card,
  args: {
    children: <p>some content</p>,
  },
} as Meta<typeof Card>;

export const Light: Story = {};

export const Outline: Story = {
  args: {
    theme: CardTheme.OUTLINE,
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
