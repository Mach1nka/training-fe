import { ComponentStory, ComponentMeta } from '@storybook/react';

import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';

import { LoginForm } from './LoginForm';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.decorators = [storeDecorator({
  loginForm: {},
})];

export const Error = Template.bind({});
Error.decorators = [storeDecorator({
  loginForm: { username: 'guest', password: '123', error: 'Error message' },
})];

export const Loading = Template.bind({});
Loading.decorators = [storeDecorator({
  loginForm: { isLoading: true },
})];

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator({
    loginForm: { },
  })];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
