import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';

import { fetchPageOfArticles } from './fetchPageOfArticles';
import { fetchArticles } from '../fetchArticles/fetchArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchPageOfArticles thunk', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchPageOfArticles, {
      wallOfArticles: {
        limit: 4, page: 2, hasMore: true, isLoading: false,
      },
    });
    await thunk.callThunk(undefined);

    expect(fetchArticles).toHaveBeenCalledWith(3);
  });

  test('hasMore false', async () => {
    const thunk = new TestAsyncThunk(fetchPageOfArticles, {
      wallOfArticles: {
        limit: 4, page: 2, hasMore: false,
      },
    });
    await thunk.callThunk(undefined);

    expect(fetchArticles).not.toHaveBeenCalled();
  });

  test('isLoading true', async () => {
    const thunk = new TestAsyncThunk(fetchPageOfArticles, {
      wallOfArticles: {
        limit: 4, page: 2, hasMore: true, isLoading: true,
      },
    });
    await thunk.callThunk(undefined);

    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
