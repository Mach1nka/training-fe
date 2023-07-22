import { lazy } from 'react';

export const ArticleCreatePageLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./ArticleCreatePage')), 1500);
}));
