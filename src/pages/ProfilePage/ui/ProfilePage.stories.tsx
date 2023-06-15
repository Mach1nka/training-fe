import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { profileReducer } from '@/features/EditProfileInfo';

import ProfilePage from './ProfilePage';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.decorators = [storeDecorator(
  { profile: undefined },
  initialReducers,
)];

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator(
    { profile: undefined },
    initialReducers,
  )];
