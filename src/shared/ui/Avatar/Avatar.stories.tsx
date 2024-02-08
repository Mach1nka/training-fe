import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '../../assets/tests/storybookPlug.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: Image,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  size: 200,
};
