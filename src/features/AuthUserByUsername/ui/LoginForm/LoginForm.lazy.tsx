import { lazy } from 'react';

export const LoginFormLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./LoginForm')), 1000);
}));
