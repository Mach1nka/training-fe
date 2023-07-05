import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import AddCommentForm from './AddCommentForm';

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  args: {
    onCommentSubmit: action('onCommentSubmit'),
  },
  decorators: [storeDecorator({}, initialReducers)],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK)];
