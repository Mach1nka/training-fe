import type { StateSchema } from '@/shared/config/redux/types';

export const getScrollPositionByPath = (path: string) =>
  (state: StateSchema) => state.uiCondition.scroll[path] || 0;
