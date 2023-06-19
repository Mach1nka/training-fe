import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { userReducer } from '@/entities/User';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { Sidebar } from './Sidebar';

const initialReducers: ReducersList = {
  user: userReducer,
};

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const LightAuth = Template.bind({});
LightAuth.decorators = [storeDecorator({ user: { authData: {} } }, initialReducers)];

export const Dark = Template.bind({});
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({ user: {} }, initialReducers)];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
