import { Suspense } from 'react';
import type { CSSProperties } from 'react';
import type { StoryFn } from '@storybook/react';

import { StoreProvider } from '@/app/providers/StoreProvider';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

export const commonStyleDecorator = (Story: StoryFn) => (
  <div className="app">
    <Story />
  </div>
);

export const styleDecorator = (styles: CSSProperties) => (Story: StoryFn) => (
  <div style={styles}>
    <Story />
  </div>
);

export const storeDecorator =
  (initialState?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (Story: StoryFn) => (
    <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
      <Story />
    </StoreProvider>
  );

export const suspenseDecorator = () => (Story: StoryFn) => (
  <Suspense fallback={null}>
    <Story />
  </Suspense>
);
