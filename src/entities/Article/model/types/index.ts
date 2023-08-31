import type { User } from '@/entities/User';

import type { ArticleBlockType, ArticleType } from '../const';

interface ArticleBlockBase {
  id: string,
  type: ArticleBlockType,
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT,
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE,
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE,
  src: string,
  title: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export interface Article {
  id: string;
  user: Omit<User, 'role'>;
  title: string;
  subtitle: string;
  img: string;
  views: number,
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
  isLoading: boolean;
  data?: Article;
  error?: string;
}
