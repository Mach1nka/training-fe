import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';

import { RatingSection } from './RatingSection';

type Story = StoryObj<typeof RatingSection>;

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
} as Meta<typeof RatingSection>;

export const Light: Story = {};

export const Rated: Story = {
  args: {
    ratingValue: 3,
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
