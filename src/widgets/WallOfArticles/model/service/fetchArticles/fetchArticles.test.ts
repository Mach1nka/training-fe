import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';

import { fetchArticles } from './fetchArticles';
import { Article } from '@/entities/Article';

describe('fetchArticles thunk', () => {
  const thunkArg = 1;
  const articles: Article[] = [{
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
  }];

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticles, { wallOfArticles: { limit: 4, page: 2 } });
    thunk.api.get.mockResolvedValue(Promise.resolve({ data: articles }));
    const result = await thunk.callThunk(thunkArg);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articles);
  });

  test('success with default page value', async () => {
    const thunk = new TestAsyncThunk(fetchArticles, { wallOfArticles: { limit: 4, page: 2 } });
    thunk.api.get.mockResolvedValue(Promise.resolve({ data: articles }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articles);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(fetchArticles, { wallOfArticles: { limit: 4, page: 2 } });
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(thunkArg);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
