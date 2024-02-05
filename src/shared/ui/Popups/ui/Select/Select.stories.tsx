import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator, styleDecorator } from '@/shared/lib/storybook/decorators';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  decorators: [styleDecorator(centerContentStorybook)],
  args: {
    placeholder: 'Select a value',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2', disabled: true },
      { label: 'Option 3', value: 'option3' },
    ],
    defaultValue: 'option1',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'option3',
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};

export const TopRight = Template.bind({});
TopRight.args = {
  directionH: 'right',
  directionV: 'top',
};

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
