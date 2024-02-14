import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { AppLink, AppLinkTheme, AppLinkUnderline } from './AppLink';

type Story = StoryObj<typeof AppLink>;

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Text',
  },
} as Meta<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const UnderlineAlways: Story = {
  args: {
    underline: AppLinkUnderline.ALWAYS,
  },
};

export const UnderlineHover: Story = {
  args: {
    underline: AppLinkUnderline.HOVER,
  },
};

export const UnderlineNever: Story = {
  args: {
    underline: AppLinkUnderline.NEVER,
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
