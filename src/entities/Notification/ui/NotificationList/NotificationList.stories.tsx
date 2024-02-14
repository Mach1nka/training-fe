import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';

import { NotificationList } from './NotificationList';

const notification = {
  id: '1',
  title: 'notification',
  description: 'description',
};

type Story = StoryObj<typeof NotificationList>;

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  decorators: [storeDecorator()],
  parameters: {
    mockData: [
      {
        url: `${API_URL}/notifications?_limit=4`,
        method: 'GET',
        status: 200,
        response: [
          { ...notification },
          { ...notification, id: '2' },
          { ...notification, id: '3', href: 'link' },
        ],
      },
    ],
  },
} as Meta<typeof NotificationList>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
