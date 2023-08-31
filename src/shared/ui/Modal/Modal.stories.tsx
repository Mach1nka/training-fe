import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt sequi porro recusandae, fugit fugiat eius hic officia veritatis vero harum magnam dolores sint tempore molestias veniam? Perferendis, consectetur recusandae.',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
