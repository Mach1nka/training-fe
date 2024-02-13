import type { StoryObj, Meta } from '@storybook/react';

import { Flex } from './Flex';

type Story = StoryObj<typeof Flex>;

export default {
  title: 'shared/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <div>Elem 1</div>
        <div>Elem 2</div>
        <div>Elem 3</div>
        <div>Elem 4</div>
        <div>Elem 5</div>
      </>
    ),
    gap: 8,
  },
} as Meta<typeof Flex>;

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const ColumnFlexEnd: Story = {
  args: {
    direction: 'column',
    align: 'flex-end',
  },
};

export const ColumnCenter: Story = {
  args: {
    direction: 'column',
    align: 'center',
  },
};

export const ColumnStretch = {
  args: {
    direction: 'column',
    align: 'stretch',
  },
};

export const ColumnBaseline: Story = {
  args: {
    direction: 'column',
    align: 'baseline',
  },
};

export const Row: Story = {
  args: {
    direction: 'row',
  },
};

export const RowFlexEnd: Story = {
  args: {
    direction: 'row',
    justify: 'flex-end',
  },
};

export const RowCenter: Story = {
  args: {
    direction: 'row',
    justify: 'center',
  },
};

export const RowSpaceBetween: Story = {
  args: {
    direction: 'row',
    justify: 'space-between',
  },
};

export const RowSpaceAround: Story = {
  args: {
    direction: 'row',
    justify: 'space-around',
  },
};
