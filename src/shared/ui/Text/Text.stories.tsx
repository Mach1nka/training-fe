import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import {
  Text, TextAlign, TextSize, TextTheme,
} from './Text';

type Story = StoryObj<typeof Text>;

export default {
  title: 'shared/Text',
  component: Text,
} as Meta<typeof Text>;

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    size: TextSize.SMALL,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    size: TextSize.MEDIUM,
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    size: TextSize.LARGE,
  },
};

export const AlignCenter: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    align: TextAlign.CENTER,
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    theme: TextTheme.ERROR,
  },
};

export const TitleLight: Story = {
  args: {
    title: 'Title',
  },
};

export const TextLight: Story = {
  args: {
    text: 'Description',
  },
};

export const Dark: Story = {
  args: {
    title: 'Title',
    text: 'Description',
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};

export const TitleDark: Story = {
  args: {
    title: 'Title',
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};

export const TextDark: Story = {
  args: {
    text: 'Description',
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
