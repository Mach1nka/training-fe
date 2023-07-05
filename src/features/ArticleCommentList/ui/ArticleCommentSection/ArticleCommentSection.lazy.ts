import { lazy } from 'react';

export const ArticleCommentSectionLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./ArticleCommentSection')), 1000);
}));
