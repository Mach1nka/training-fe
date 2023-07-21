import { lazy } from 'react';

export const ArticleRecommendationsSectionLazy = lazy(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./ArticleRecommendationsSection')), 1500);
}));
