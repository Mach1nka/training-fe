import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { RatingSection } from './RatingSection';

export default {
  title: 'entities/RatingSection',
  component: RatingSection,
} as ComponentMeta<typeof RatingSection>;

const Template: ComponentStory<typeof RatingSection> = (args) => <RatingSection {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
