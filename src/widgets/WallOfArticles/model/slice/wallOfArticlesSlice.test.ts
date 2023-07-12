import { DeepPartial } from '@reduxjs/toolkit';

import { Article, ArticleView } from '@/entities/Article';

import { wallOfArticlesActions, wallOfArticlesReducer } from './wallOfArticlesSlice';
import { fetchArticles } from '../service/fetchArticles/fetchArticles';
import { WallOfArticlesSchema } from '../types';
import { MockDefaultState } from '@/shared/lib/jest/mockDefaultState';

describe('wallOfArticlesSlice extra reducers', () => {
  const articles: Article[] = [
    {
      id: '1',
      user: {
        id: '1',
        username: 'user',
      },
      title: 'Javascript - язык программирования',
      subtitle: 'Краткий пересказ всего JavaScript',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      views: 10,
      createdAt: '20.05.2020',
      type: [],
      blocks: [],
    },
  ];

  const defaultState: DeepPartial<WallOfArticlesSchema> = {
    data: articles,
    view: ArticleView.TILE,
    isLoading: false,
    page: 1,
    hasMore: true,
    error: undefined,
  };

  const mockedData = new MockDefaultState(defaultState);

  beforeEach(() => {
    mockedData.resetState();
  });

  test('setView', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setView(ArticleView.LIST)))
      .toEqual({
        data: articles,
        view: ArticleView.LIST,
        isLoading: false,
        page: 1,
        hasMore: true,
        error: undefined,
      });
  });

  test('setPage', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setPage(23)))
      .toEqual({
        data: articles,
        view: ArticleView.TILE,
        isLoading: false,
        page: 23,
        hasMore: true,
        error: undefined,
      });
  });

  test('fetchArticles fulfilled', () => {
    const response: Article[] = [{
      id: '2',
      user: {
        id: '2',
        username: 'user',
      },
      title: 'Javascript - язык программирования',
      subtitle: 'Краткий пересказ всего JavaScript',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      views: 120,
      createdAt: '25.05.2022',
      type: [],
      blocks: [],
    }];

    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, fetchArticles.fulfilled(response, '', 0)))
      .toEqual({
        hasMore: false,
        isLoading: false,
        error: undefined,
        page: 1,
        view: ArticleView.TILE,
        data: articles.concat(response),
      });
  });
});
