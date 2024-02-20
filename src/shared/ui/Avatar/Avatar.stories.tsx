import type { StoryObj, Meta } from '@storybook/react';

import Image from '@/shared/assets/tests/storybookPlug.jpg';

import { Avatar } from './Avatar';

type Story = StoryObj<typeof Avatar>;

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: Image,
    size: 100,
  },
} as Meta<typeof Avatar>;

export const Primary: Story = {};

export const ErrorFallbackIcon: Story = {
  args: {
    src: '',
  },
};

export const ErrorFallbackIconInverted: Story = {
  args: {
    src: '',
    fallbackTheme: 'inverted',
  },
};

export const Big: Story = {
  args: {
    size: 200,
  },
};
