import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { Code } from './Code';

type Story = StoryObj<typeof Code>;

export default {
  title: 'shared/Code',
  component: Code,
  args: {
    text: `export default {
  title: 'shared/Code',
  component: Code,
} as Meta<typeof Code>;`,
  },
} as Meta<typeof Code>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
