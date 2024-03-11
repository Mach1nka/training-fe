import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';

import { fetchArticles } from '../fetchArticles/fetchArticles';

import { fetchArticlesByPage } from './fetchArticlesByPage';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchPageOfArticles thunk', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesByPage, {
      wallOfArticles: {
        limit: 4,
        page: 2,
        hasMore: true,
        isLoading: false,
      },
    });
    await thunk.callThunk(undefined);

    expect(fetchArticles).toHaveBeenCalled();
  });

  test('hasMore false', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesByPage, {
      wallOfArticles: {
        limit: 4,
        page: 2,
        hasMore: false,
      },
    });
    await thunk.callThunk(undefined);

    expect(fetchArticles).not.toHaveBeenCalled();
  });

  test('isLoading true', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesByPage, {
      wallOfArticles: {
        limit: 4,
        page: 2,
        hasMore: true,
        isLoading: true,
      },
    });
    await thunk.callThunk(undefined);

    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
