import { ComponentStory, ComponentMeta } from '@storybook/react';

import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { Theme } from '@/app/providers/ThemeProvider';

import LoginForm from './LoginForm';
import { loginReducer } from '../../model/slice/loginSlice';

const initialReducers = {
  loginForm: loginReducer,
} as const;

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.decorators = [storeDecorator(
  { loginForm: {} },
  initialReducers,
)];

export const Error = Template.bind({});
Error.decorators = [storeDecorator(
  { loginForm: { username: 'guest', password: '123', error: 'Error message' } },
  initialReducers,
)];

export const Loading = Template.bind({});
Loading.decorators = [storeDecorator(
  { loginForm: { isLoading: true } },
  initialReducers,
)];

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator(
    { loginForm: {} },
    initialReducers,
  ),
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
