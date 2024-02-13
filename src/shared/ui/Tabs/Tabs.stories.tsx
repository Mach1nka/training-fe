import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Theme } from '@/shared/constant/theme';

import { Tabs } from './Tabs';

type Story = StoryObj<typeof Tabs>;

export default {
  title: 'shared/Tabs',
  component: Tabs,
  args: {
    value: 'tab 2',
    tabs: [
      {
        label: 'tab 1',
        value: 'tab 1',
      },
      {
        label: 'tab 2',
        value: 'tab 2',
      },
    ],
    onTabClick: action('onTabClick'),
  },
} as Meta<typeof Tabs>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
