import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import Image from '../../assets/tests/storybookPlug.jpg';

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
