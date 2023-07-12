import { Article, ArticleView } from '@/entities/Article';

export interface WallOfArticlesSchema {
  data: Article[];
  view: ArticleView;
  isLoading: boolean;
  hasMore: boolean;
  page: number;
  limit?: number;
  error?: string;
}
