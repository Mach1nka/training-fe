import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { routerDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { AppLinkTheme, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  decorators: [routerDecorator()],
  args: {
    to: '/',
    children: 'Text',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const UnderlineAlways = Template.bind({});
UnderlineAlways.args = {
  underline: AppLinkUnderline.ALWAYS,
};

export const UnderlineHover = Template.bind({});
UnderlineHover.args = {
  underline: AppLinkUnderline.HOVER,
};

export const UnderlineNone = Template.bind({});
UnderlineNone.args = {
  underline: AppLinkUnderline.NONE,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [themeDecorator(Theme.DARK)];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
