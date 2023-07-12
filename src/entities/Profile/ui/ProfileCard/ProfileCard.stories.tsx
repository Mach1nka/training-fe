import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  data: {
    id: '1',
    userId: '1',
    firstname: 'name',
    lastname: 'surname',
    age: 35,
    country: Country.KAZAKHSTAN,
    currency: Currency.RUB,
    avatar: '',
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
