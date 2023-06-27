import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  args: {
    text: `export default {
  title: 'shared/Code',
  component: Code,
} as ComponentMeta<typeof Code>;`,
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
