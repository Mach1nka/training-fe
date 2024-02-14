import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import {
  storeDecorator,
  styleDecorator,
} from '@/shared/lib/storybook/decorators';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { AccountActions } from './AccountActions';

type Story = StoryObj<typeof AccountActions>;

export default {
  title: 'features/AccountActions',
  component: AccountActions,
  decorators: [
    storeDecorator({ user: { authData: { id: '1', username: 'guest' } } }),
    styleDecorator(centerContentStorybook),
  ],
} as Meta<typeof AccountActions>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
