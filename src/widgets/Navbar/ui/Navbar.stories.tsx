import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { routerDecorator, storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';

import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [routerDecorator()],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [storeDecorator({ user: { authData: undefined } })];

export const Authorized = Template.bind({});
Authorized.decorators = [storeDecorator({ user: { authData: { id: '1', username: 'guest' } } })];

export const Dark = Template.bind({});
Dark.decorators = [
  storeDecorator({ user: { authData: undefined } }),
  themeDecorator(Theme.DARK),
];

export const AuthorizedDark = Template.bind({});
AuthorizedDark.decorators = [
  storeDecorator({ user: { authData: { id: '1', username: 'guest' } } }),
  themeDecorator(Theme.DARK),
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
