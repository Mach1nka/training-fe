import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import EyeIcon from '@/shared/assets/icons/eye.svg';

import { Icon } from './Icon';

export default {
  title: 'shared/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Light = Template.bind({});
Light.args = {
  Svg: EyeIcon,
};

export const Dark = Template.bind({});
Dark.args = {
  Svg: EyeIcon,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
