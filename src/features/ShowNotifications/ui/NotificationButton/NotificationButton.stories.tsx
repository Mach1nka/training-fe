import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator, styleDecorator } from '@/shared/lib/storybook/decorators';
import NotificationButton from './NotificationButton';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  decorators: [storeDecorator(), styleDecorator({ display: 'flex', padding: '0 250px' })],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
