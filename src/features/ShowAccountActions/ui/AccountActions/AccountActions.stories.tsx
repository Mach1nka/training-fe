import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import {
  routerDecorator,
  storeDecorator,
  themeDecorator,
  styleDecorator,
} from '@/shared/lib/storybook/decorators';
import { centerContentStorybook } from '@/shared/lib/storybook/constants';

import { AccountActions } from './AccountActions';

export default {
  title: 'features/AccountActions',
  component: AccountActions,
  decorators: [
    routerDecorator(),
    storeDecorator({ user: { authData: { id: '1', username: 'guest' } } }),
    styleDecorator(centerContentStorybook),
  ],
} as ComponentMeta<typeof AccountActions>;

const Template: ComponentStory<typeof AccountActions> = (args) => <AccountActions {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  themeDecorator(Theme.DARK),
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
