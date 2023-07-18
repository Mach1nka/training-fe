import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  args: {
    children: <p>some content</p>,
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});

export const Outline = Template.bind({});
Outline.args = {
  theme: CardTheme.OUTLINE,
};
export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
