import { Suspense } from 'react';
import type { CSSProperties } from 'react';
import type { StoryFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { StoreProvider } from '@/app/providers/StoreProvider';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';

export const commonStyleDecorator = (Story: StoryFn) => (
  <div className="app">
    <Story />
  </div>
);

export const styleDecorator = (styles: CSSProperties) =>
  (Story: StoryFn) => <div style={styles}><Story /></div>;

// TODO: integrate storybook-addon-react-router-v6 after updating SB till v7
export const routerDecorator = (initialEntries?: string[], path?: string) => (Story: StoryFn) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route path={path || ''} element={<Story />} />
    </Routes>
  </MemoryRouter>
);

export const storeDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
    <Story />
  </StoreProvider>
);

export const suspenseDecorator = () => (Story: StoryFn) => (
  <Suspense fallback={null}>
    <Story />
  </Suspense>
);

// TODO: integrate storybook-react-i18next after updating SB till v7
// export const i18nDecorator = (Story: Story) => (
//   <I18nextProvider i18n={i18n}>
//     <Suspense fallback="">
//       <Story />
//     </Suspense>
//   </I18nextProvider>
// );
