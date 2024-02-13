import type { StoryObj, Meta } from '@storybook/react';

import Image from '@/shared/assets/tests/storybookPlug.jpg';

import { Avatar } from './Avatar';

type Story = StoryObj<typeof Avatar>;

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: Image,
  },
} as Meta<typeof Avatar>;

export const Primary: Story = {};

export const Big: Story = {
  args: {
    size: 200,
  },
};
