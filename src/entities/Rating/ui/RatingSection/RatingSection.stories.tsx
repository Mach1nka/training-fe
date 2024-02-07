import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { themeDecorator } from '@/shared/lib/storybook/decorators';

import { RatingSection } from './RatingSection';

export default {
  title: 'entities/RatingSection',
  component: RatingSection,
  args: {
    gratitudeText: 'Thanks for sharing your opinion!',
    callToActionText: 'Rate the article!',
    feedbackPopupTitle: 'Share your opinion',
    feedbackPlaceholderText: 'Review',
    feedbackAcceptBtnText: 'Accept',
    feedbackCancelBtnText: 'Cancel',
  },
} as ComponentMeta<typeof RatingSection>;

const Template: ComponentStory<typeof RatingSection> = (args) => <RatingSection {...args} />;

export const Light = Template.bind({});

export const Rated = Template.bind({});
Rated.args = {
  ratingValue: 3,
};

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
