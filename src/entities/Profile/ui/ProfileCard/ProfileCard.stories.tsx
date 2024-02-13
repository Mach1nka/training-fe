import type { StoryObj, Meta } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ProfileCard } from './ProfileCard';

type Story = StoryObj<typeof ProfileCard>;

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as Meta<typeof ProfileCard>;

export const Normal: Story = {
  args: {
    data: {
      id: '1',
      userId: '1',
      firstname: 'name',
      lastname: 'surname',
      age: 35,
      country: Country.KAZAKHSTAN,
      currency: Currency.RUB,
      avatar: '',
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'error text',
  },
};
