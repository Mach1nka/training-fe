import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { themeDecorator, storeDecorator, routerDecorator } from '@/shared/lib/storybook/decorators';

import { NotificationList } from './NotificationList';

const notification = {
  id: '1',
  title: 'notification',
  description: 'description',
};

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  decorators: [storeDecorator(), routerDecorator()],
  parameters: {
    mockData: [{
      url: `${API_URL}/notifications?_limit=4`,
      method: 'GET',
      status: 200,
      response: [
        { ...notification },
        { ...notification, id: '2' },
        { ...notification, id: '3', href: 'link' },
      ],
    }],
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
