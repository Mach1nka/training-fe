import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { styleDecorator } from '@/shared/lib/storybook/decorators';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { Select } from './Select';

type Story = StoryObj<typeof Select>;

export default {
  title: 'shared/Select',
  component: Select,
  decorators: [styleDecorator(centerContentStorybook)],
  args: {
    placeholder: 'Select a value',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2', disabled: true },
      { label: 'Option 3', value: 'option3' },
    ],
    defaultValue: 'option1',
  },
} as Meta<typeof Select>;

export const Light: Story = {};

export const WithValue: Story = {
  args: {
    value: 'option3',
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};

export const TopRight: Story = {
  args: {
    directionH: 'right',
    directionV: 'top',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
