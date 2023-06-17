import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { themeDecorator } from '@/shared/lib/storybook/decorators';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import Avatar from '@/shared/assets/tests/storybookPlug.jpg';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
  data: {
    firstname: 'name',
    lastname: 'surname',
    age: 35,
    country: Country.KAZAKHSTAN,
    currency: Currency.RUB,
    avatar: Avatar,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'error text',
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    firstname: 'name',
    lastname: 'surname',
    age: 35,
    country: Country.KAZAKHSTAN,
    currency: Currency.RUB,
    avatar: Avatar,
  },
};
Dark.decorators = [themeDecorator(Theme.DARK)];
