import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    width: 100,
    height: 100,
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Square = Template.bind({});

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: '50%',
};

export const SquareDark = Template.bind({});
SquareDark.decorators = [themeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  borderRadius: '50%',
};
CircleDark.decorators = [themeDecorator(Theme.DARK)];
