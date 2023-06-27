import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'Type text',
    value: 'text example',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
