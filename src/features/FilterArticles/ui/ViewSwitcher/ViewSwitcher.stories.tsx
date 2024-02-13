import type { StoryObj, Meta } from '@storybook/react';

import { Theme } from '@/shared/constant/theme';
import { ArticleView } from '@/entities/Article';

import { ViewSwitcher } from './ViewSwitcher';

type Story = StoryObj<typeof ViewSwitcher>;

export default {
  title: 'features/ViewSwitcher',
  component: ViewSwitcher,
} as Meta<typeof ViewSwitcher>;

export const List: Story = {
  args: {
    view: ArticleView.LIST,
  },
};

export const Tile: Story = {
  args: {
    view: ArticleView.TILE,
  },
};

export const Dark: Story = {
  args: {
    view: ArticleView.LIST,
  },

  parameters: {
    themes: {
      themeOverride: Theme.DARK,
    },
  },
};
