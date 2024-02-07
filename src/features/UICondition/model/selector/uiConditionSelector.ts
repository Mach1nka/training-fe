import type { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollPositionByPath = (path: string) =>
  (state: StateSchema) => state.uiCondition.scroll[path] || 0;
