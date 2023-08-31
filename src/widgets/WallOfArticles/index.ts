import { fetchArticlesByPage } from './model/service/fetchArticlesByPage/fetchArticlesByPage';
import type { WallOfArticlesSchema } from './model/types';
import { WallOfArticles } from './ui/WallOfArticles/WallOfArticles';

export type {
  WallOfArticlesSchema,
};

export {
  WallOfArticles,
  fetchArticlesByPage,
};
