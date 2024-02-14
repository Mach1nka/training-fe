import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { styleDecorator } from '@/shared/lib/storybook/decorators';
import { Button } from '@/shared/ui/Button/Button';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { Menu } from './Menu';

type Story = StoryObj<typeof Menu>;

export default {
  title: 'shared/Menu',
  component: Menu,
  decorators: [styleDecorator(centerContentStorybook)],
  args: {
    label: <Button>Options</Button>,
    options: [
      { content: 'Option 1', href: '/' },
      { content: 'Option 2', disabled: true },
      { content: 'Option 3' },
    ],
  },
} as Meta<typeof Menu>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
