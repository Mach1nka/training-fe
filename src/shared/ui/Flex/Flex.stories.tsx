import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

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
      </>),
    gap: 8,
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const ColumnFlexEnd = Template.bind({});
ColumnFlexEnd.args = {
  direction: 'column',
  align: 'flex-end',
};

export const ColumnCenter = Template.bind({});
ColumnCenter.args = {
  direction: 'column',
  align: 'center',
};

export const ColumnStretch = Template.bind({});
ColumnStretch.args = {
  direction: 'column',
  align: 'stretch',
};

export const ColumnBaseline = Template.bind({});
ColumnBaseline.args = {
  direction: 'column',
  align: 'baseline',
};

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
};

export const RowFlexEnd = Template.bind({});
RowFlexEnd.args = {
  direction: 'row',
  justify: 'flex-end',
};

export const RowCenter = Template.bind({});
RowCenter.args = {
  direction: 'row',
  justify: 'center',
};

export const RowSpaceBetween = Template.bind({});
RowSpaceBetween.args = {
  direction: 'row',
  justify: 'space-between',
};

export const RowSpaceAround = Template.bind({});
RowSpaceAround.args = {
  direction: 'row',
  justify: 'space-around',
};
