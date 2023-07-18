import { DeepPartial } from '@reduxjs/toolkit';

import { MockDefaultState } from '@/shared/lib/jest/mockDefaultState';
import {
  Article,
  ArticleSortedField,
  ArticleType,
  ArticleView,
} from '@/entities/Article';

import { wallOfArticlesActions, wallOfArticlesReducer } from './wallOfArticlesSlice';
import { fetchArticles } from '../service/fetchArticles/fetchArticles';
import { WallOfArticlesSchema } from '../types';

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
    initialized: false,
    limit: 10,
    order: 'asc',
    search: '',
    sort: ArticleSortedField.CREATED_AT,
    filters: {
      type: ArticleType.ALL,
    },
    error: undefined,
  };

  const mockedData = new MockDefaultState(defaultState);

  beforeEach(() => {
    mockedData.resetState();
  });

  test('setView', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setView(ArticleView.LIST)))
      .toEqual({
        ...defaultState,
        view: ArticleView.LIST,
      });
  });

  test('setSearch', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setSearch('some text')))
      .toEqual({
        ...defaultState,
        search: 'some text',
      });
  });

  test('setSortOrder', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setSortOrder('desc')))
      .toEqual({
        ...defaultState,
        order: 'desc',
      });
  });

  test('setSortField', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setSortField(ArticleSortedField.TITLE)))
      .toEqual({
        ...defaultState,
        sort: ArticleSortedField.TITLE,
      });
  });

  test('setTypeFilter', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setTypeFilter(ArticleType.IT)))
      .toEqual({
        ...defaultState,
        filters: {
          type: ArticleType.IT,
        },
      });
  });

  test('setPage', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.setPage(23)))
      .toEqual({
        ...defaultState,
        page: 23,
      });
  });

  test('initWallOfArticles', () => {
    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, wallOfArticlesActions.initWallOfArticles({
      order: 'desc',
      search: 'text',
      sort: 'views',
      type: 'SCIENCE',
    })))
      .toEqual({
        ...defaultState,
        initialized: true,
        order: 'desc',
        search: 'text',
        sort: ArticleSortedField.VIEWS,
        // TODO: implement mocked localStorage and add it to the global variables
        view: 'LIST',
        limit: 4,
        filters: {
          type: ArticleType.SCIENCE,
        },
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

    expect(wallOfArticlesReducer(mockedData.state as WallOfArticlesSchema, fetchArticles.fulfilled(response, '', {})))
      .toEqual({
        ...defaultState,
        hasMore: false,
        data: articles.concat(response),
      });
  });
});
