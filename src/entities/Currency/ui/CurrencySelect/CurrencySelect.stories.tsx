import type { StoryObj, Meta } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

type Story = StoryObj<typeof CurrencySelect>;

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
} as Meta<typeof CurrencySelect>;

export const Primary: Story = {};
