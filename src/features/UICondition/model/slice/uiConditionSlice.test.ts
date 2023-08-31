import type { UIConditionSchema } from '../types';
import { uiConditionReducer, uiConditionActions } from './uiConditionSlice';

describe('profileSlice reducers', () => {
  test('setPageScrollPosition', () => {
    const state: DeepPartial<UIConditionSchema> = { scroll: {} };

    expect(uiConditionReducer(state as UIConditionSchema, uiConditionActions.setPageScrollPosition({ path: '/', position: 500 })))
      .toEqual({ scroll: { '/': 500 } });
  });

  test('setPageScrollPosition update', () => {
    const state: DeepPartial<UIConditionSchema> = { scroll: { '/about': 500 } };

    expect(uiConditionReducer(state as UIConditionSchema, uiConditionActions.setPageScrollPosition({ path: '/about', position: 600 })))
      .toEqual({ scroll: { '/about': 600 } });
  });
});
