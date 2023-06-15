import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { Text, TextAlign, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  title: 'Title',
  text: 'Description',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  title: 'Title',
  text: 'Description',
  align: TextAlign.CENTER,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description',
  theme: TextTheme.ERROR,
};

export const TitleLight = Template.bind({});
TitleLight.args = {
  title: 'Title',
};

export const TextLight = Template.bind({});
TextLight.args = {
  text: 'Description',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title',
  text: 'Description',
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const TitleDark = Template.bind({});
TitleDark.args = {
  title: 'Title',
};
TitleDark.decorators = [themeDecorator(Theme.DARK)];

export const TextDark = Template.bind({});
TextDark.args = {
  text: 'Description',
};
TextDark.decorators = [themeDecorator(Theme.DARK)];
