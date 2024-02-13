import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Modal } from './Modal';

type Story = StoryObj<typeof Modal>;

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt sequi porro recusandae, fugit fugiat eius hic officia veritatis vero harum magnam dolores sint tempore molestias veniam? Perferendis, consectetur recusandae.',
  },
} as Meta<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
