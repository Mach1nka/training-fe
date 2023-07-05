import { lazy } from 'react';

export const AddCommentFormLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./AddCommentForm')), 1500);
}));
