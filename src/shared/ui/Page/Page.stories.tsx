import { ComponentStory, ComponentMeta } from '@storybook/react';

import { routerDecorator, storeDecorator } from '@/shared/lib/storybook/decorators';

import { Page } from './Page';

export default {
  title: 'shared/Page',
  component: Page,
  args: {
    children: <p>page content</p>,
  },
  decorators: [routerDecorator(), storeDecorator()],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light = Template.bind({});
