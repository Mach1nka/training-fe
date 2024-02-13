import type { StoryObj, Meta } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

type Story = StoryObj<typeof CountrySelect>;

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
} as Meta<typeof CountrySelect>;

export const Light: Story = {};
