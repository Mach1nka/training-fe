import type { StoryObj, Meta } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { Theme } from '@/shared/constant/theme';
import { storeDecorator } from '@/shared/lib/storybook/decorators';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { profileReducer } from '../../../features/EditProfileInfo/model/slice/profileSlice';

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
  avatar: '',
};

type Story = StoryObj<typeof ProfilePage>;

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: '1' },
      },
      routing: {
        path: '/profile/:id',
      },
    }),
  },
} as Meta<typeof ProfilePage>;

export const EditMode: Story = {
  decorators: [
    storeDecorator(
      {
        profile: { form: state },
      },
      initialReducers,
    ),
  ],
};

export const ReadMode: Story = {
  decorators: [storeDecorator({ profile: { form: state, readonly: true } }, initialReducers)],
  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
