import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { NotificationList } from './NotificationList';

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
