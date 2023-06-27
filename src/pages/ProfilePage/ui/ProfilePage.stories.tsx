import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { profileReducer } from '@/features/EditProfileInfo';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import ProfilePage from './ProfilePage';

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
  {
    profile: {
      form: {
        firstname: 'name',
        lastname: 'surname',
        age: 35,
        country: Country.KAZAKHSTAN,
        currency: Currency.RUB,
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      },
    },
  },
  initialReducers,
)];

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator(
    { profile: { readonly: true } },
    initialReducers,
  )];
