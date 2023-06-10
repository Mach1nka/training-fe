import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { profileReducer } from '@/entities/Profile';
import ProfilePage from './ProfilePage';

const initialReducers = {
  profile: profileReducer,
} as const;

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.decorators = [storeDecorator(
  { profile: null },
  initialReducers,
)];

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator(
    { profile: null },
    initialReducers,
  )];
