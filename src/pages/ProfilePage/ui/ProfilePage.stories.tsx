import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator, themeDecorator } from '@/shared/lib/storybook/decorators';
import { profileReducer } from '@/features/EditProfileInfo';
import { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';

import ProfilePage from './ProfilePage';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const state = {
  firstname: 'name',
  lastname: 'surname',
  age: 35,
  country: Country.KAZAKHSTAN,
  currency: Currency.RUB,
  avatar: DefaultImage,
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const EditMode = Template.bind({});
EditMode.decorators = [storeDecorator(
  {
    profile: { form: state },
  },
  initialReducers,
)];

export const ReadMode = Template.bind({});
ReadMode.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator(
    { profile: { form: state, readonly: true } },
    initialReducers,
  )];
