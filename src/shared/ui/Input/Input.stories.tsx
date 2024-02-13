import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Input } from './Input';

type Story = StoryObj<typeof Input>;

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'Type text',
    value: 'text example',
  },
} as Meta<typeof Input>;

export const Light: Story = {};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
