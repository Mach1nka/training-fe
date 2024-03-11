import type { ArticleDetailsSchema, Article } from './model/types';
import { ArticleView, ArticleSortedField, ArticleType } from './model/const';
import {
  getArticleDetailsData,
  getCanBeArticleEdited,
} from './model/selector/articleDetailsSelector';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';

export type { ArticleDetailsSchema, Article };

export {
  ArticleDetails,
  ArticleList,
  getArticleDetailsData,
  getCanBeArticleEdited,
  ArticleView,
  ArticleSortedField,
  ArticleType,
};
