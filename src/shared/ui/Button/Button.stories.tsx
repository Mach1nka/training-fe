import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Button, ButtonSize, ButtonTheme } from './Button';

type Story = StoryObj<typeof Button>;

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
  },
} as Meta<typeof Button>;

export const Outline: Story = {};

export const OutlineRed: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_RED,
  },
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.MEDIUM,
    theme: ButtonTheme.OUTLINE,
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.LARGE,
    theme: ButtonTheme.OUTLINE,
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.XLARGE,
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
