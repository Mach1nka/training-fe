import { Article } from '@/entities/Article';

export interface ArticleRecommendationsSchema {
  data: Article[];
  isLoading: boolean;
  error?: string;
}
