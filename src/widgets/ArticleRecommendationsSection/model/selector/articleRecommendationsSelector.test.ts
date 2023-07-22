import { StateSchema } from '@/shared/config/redux/types';
import { Article, ArticleType, ArticleBlockType } from '@/entities/Article/model/types';

import {
  getArticleRecommendationsData,
  getArticleRecommendationsError,
  getArticleRecommendationsLoading,
} from './articleRecommendationsSelector';

const article: Article = {
  id: '2',
  user: {
    id: '2',
    username: 'admin',
  },
  title: 'Kotlin - язык программирования',
  subtitle: 'Краткий пересказ всего Kotlin',
  img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  views: 10,
  createdAt: '20.05.2022',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
  ],
};

const state: DeepPartial<StateSchema> = {
  articleRecommendations: {
    data: [article],
    isLoading: true,
    error: 'error text',
  },
};

const emptyState: DeepPartial<StateSchema> = {};

describe('getArticleRecommendationsData selector', () => {
  test('should return scroll position', () => {
    expect(getArticleRecommendationsData(state as StateSchema)).toEqual([article]);
  });

  test('should work with empty value', () => {
    expect(getArticleRecommendationsData(emptyState as StateSchema)).toEqual([]);
  });
});

describe('getArticleRecommendationsLoading selector', () => {
  test('should return scroll position', () => {
    expect(getArticleRecommendationsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getArticleRecommendationsLoading(emptyState as StateSchema)).toBe(false);
  });
});

describe('getArticleRecommendationsError selector', () => {
  test('should return scroll position', () => {
    expect(getArticleRecommendationsError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getArticleRecommendationsError(emptyState as StateSchema)).toBeUndefined();
  });
});
