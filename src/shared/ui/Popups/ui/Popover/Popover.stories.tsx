import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { styleDecorator } from '@/shared/lib/storybook/decorators';
import { Button } from '@/shared/ui/Button/Button';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { Popover } from './Popover';

type Story = StoryObj<typeof Popover>;

export default {
  title: 'shared/Popover',
  component: Popover,
  decorators: [styleDecorator(centerContentStorybook)],
  args: {
    label: <Button>Button</Button>,
    children: (
      <div>
        <p>Some Content</p>
        <p>Some Content 2</p>
      </div>
    ),
  },
} as Meta<typeof Popover>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
