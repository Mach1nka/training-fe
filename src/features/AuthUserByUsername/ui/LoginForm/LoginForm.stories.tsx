import type { StoryObj, Meta } from '@storybook/react';

import { storeDecorator } from '@/shared/lib/storybook/decorators';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

import { loginReducer } from '../../model/slice/loginSlice';

import LoginForm from './LoginForm';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

type Story = StoryObj<typeof LoginForm>;

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as Meta<typeof LoginForm>;

export const Light: Story = {
  decorators: [storeDecorator({ loginForm: {} }, initialReducers)],
};

export const Error: Story = {
  decorators: [
    storeDecorator(
      { loginForm: { username: 'guest', password: '123', error: 'Error message' } },
      initialReducers,
    ),
  ],
};

export const Loading: Story = {
  decorators: [storeDecorator({ loginForm: { isLoading: true } }, initialReducers)],
};
