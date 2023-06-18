import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { [FTName] } from './[FTName]';

export default {
  title: '/[FTName]',
  component: [FTName],
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];