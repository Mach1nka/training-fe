import type { StoryObj, Meta } from '@storybook/react';

import { routerDecorator, storeDecorator } from '@/shared/lib/storybook/decorators';

import { Page } from './Page';

type Story = StoryObj<typeof Page>;

export default {
  title: 'shared/Page',
  component: Page,
  args: {
    children: <p>page content</p>,
  },
  decorators: [routerDecorator(), storeDecorator()],
} as Meta<typeof Page>;

export const Light: Story = {};
