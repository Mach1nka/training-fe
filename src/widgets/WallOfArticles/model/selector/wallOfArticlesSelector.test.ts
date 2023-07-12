import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';
import {
  ArticleType, ArticleBlockType, ArticleView, Article,
} from '@/entities/Article/model/types';

import {
  getWallOfArticlesData,
  getWallOfArticlesView,
  getWallOfArticlesHasMore,
  getWallOfArticlesLimit,
  getWallOfArticlesPage,
  getWallOfArticlesLoading,
  getWallOfArticlesError,
} from './wallOfArticlesSelector';

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
  wallOfArticles: {
    data: [article],
    page: 10,
    view: ArticleView.TILE,
    hasMore: true,
    limit: 20,
    isLoading: true,
    error: 'error text',
  },
};

describe('getWallOfArticlesData selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesData(state as StateSchema)).toEqual([article]);
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesData({} as StateSchema)).toEqual([]);
  });
});

describe('getWallOfArticlesView selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesView(state as StateSchema)).toBe(ArticleView.TILE);
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesView({} as StateSchema)).toBe(ArticleView.TILE);
  });
});

describe('getWallOfArticlesHasMore selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesHasMore(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesHasMore({} as StateSchema)).toBe(false);
  });
});

describe('getWallOfArticlesLimit selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesLimit(state as StateSchema)).toBe(20);
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesLimit({} as StateSchema)).toBe(9);
  });
});

describe('getWallOfArticlesPage selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesPage(state as StateSchema)).toBe(10);
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesPage({} as StateSchema)).toBe(1);
  });
});

describe('getWallOfArticlesLoading selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesLoading({} as StateSchema)).toBe(false);
  });
});

describe('getWallOfArticlesError selector', () => {
  test('should return value', () => {
    expect(getWallOfArticlesError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getWallOfArticlesError({} as StateSchema)).toBeUndefined();
  });
});
