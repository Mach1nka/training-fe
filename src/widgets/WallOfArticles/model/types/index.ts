import type {
  Article,
  ArticleSortedField,
  ArticleType,
  ArticleView,
} from '@/entities/Article';
import type { SortingOrder } from '@/shared/types/common';

export interface WallOfArticlesSchema {
  data: Article[];
  isLoading: boolean;
  error?: string;
  initialized: boolean;
  hasMore: boolean;
  page: number;
  limit: number;
  view: ArticleView;
  order: SortingOrder;
  sort: ArticleSortedField;
  filters: {
    type: ArticleType;
  };
  search: string;
}

export type SearchURLParamsMapper = (state: WallOfArticlesSchema) => {
  [key: string]: (value: string) => void;
};
