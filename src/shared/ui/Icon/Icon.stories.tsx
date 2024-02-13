import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import EyeIcon from '@/shared/assets/icons/eye.svg';

import { Icon } from './Icon';

type Story = StoryObj<typeof Icon>;

export default {
  title: 'shared/Icon',
  component: Icon,
  args: {
    Svg: EyeIcon,
  },
} as Meta<typeof Icon>;

export const Primary: Story = {
  args: {
    theme: 'inverted',
  },
};

export const Inverted: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
