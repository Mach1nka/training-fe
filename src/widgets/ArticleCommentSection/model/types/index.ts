import { Comment } from '@/entities/Comment';

export interface ArticleCommentsSchema {
  isLoading: boolean;
  data?: Comment[];
  error?: string;
}
