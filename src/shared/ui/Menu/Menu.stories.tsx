import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator, routerDecorator } from '@/shared/lib/storybook/decorators';

import { Menu } from './Menu';
import { Button } from '@/shared/ui/Button/Button';

export default {
  title: 'shared/Menu',
  component: Menu,
  decorators: [routerDecorator()],
  args: {
    label: <Button>Options</Button>,
    options: [
      { content: 'Option 1', href: '/' },
      { content: 'Option 2', disabled: true },
      { content: 'Option 3' },
    ],
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
