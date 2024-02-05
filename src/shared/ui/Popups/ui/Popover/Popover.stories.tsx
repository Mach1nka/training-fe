import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { styleDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { Button } from '@/shared/ui/Button/Button';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { Popover } from './Popover';

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
      </div>),
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
