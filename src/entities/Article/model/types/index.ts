import { User } from '@/entities/User';

export enum ArticleSortedField {
  TITLE = 'title',
  VIEWS = 'views',
  CREATED_AT = 'createdAt',
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  CODE = 'CODE',
}

export enum ArticleView {
  LIST = 'LIST',
  TILE = 'TILE'
}

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
