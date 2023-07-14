import { StateSchema } from '@/shared/config/redux/types';

import { getScrollPositionByPath } from './uiConditionSelector';

const state: DeepPartial<StateSchema> = {
  uiCondition: {
    scroll: {
      '/about': 500,
    },
  },
};

const emptyState: DeepPartial<StateSchema> = {
  uiCondition: {
    scroll: {},
  },
};

describe('getUserAuthData selector', () => {
  test('should return scroll position', () => {
    expect(getScrollPositionByPath('/about')(state as StateSchema)).toBe(500);
  });

  test('should work with empty value', () => {
    expect(getScrollPositionByPath('/about')(emptyState as StateSchema)).toBe(0);
  });
});
