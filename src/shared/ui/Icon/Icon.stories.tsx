import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import EyeIcon from '@/shared/assets/icons/eye.svg';

import { Icon } from './Icon';

export default {
  title: 'shared/Icon',
  component: Icon,
  args: {
    Svg: EyeIcon,
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});

export const Inverted = Template.bind({});
Primary.args = {
  theme: 'inverted',
};

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
