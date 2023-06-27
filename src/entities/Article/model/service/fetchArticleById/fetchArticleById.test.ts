import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';

import { fetchArticleById } from './fetchArticleById';
import { Article } from '../../types';

describe('fetchArticleById thunk', () => {
  const thunkArg = '123';
  const article: Article = {
    id: '1',
    title: 'Javascript - язык программирования',
    subtitle: 'Краткий пересказ всего JavaScript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    views: 10,
    createdAt: '20.05.2020',
    type: [],
    blocks: [],
  };

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockResolvedValue(Promise.resolve({ data: article }));
    const result = await thunk.callThunk(thunkArg);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(article);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(thunkArg);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
