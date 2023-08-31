import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';
import type { Article } from '@/entities/Article';
import { ArticleType } from '@/entities/Article';

import { fetchArticles } from './fetchArticles';

describe('fetchArticles thunk', () => {
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
    const thunk = new TestAsyncThunk(fetchArticles, {
      wallOfArticles: {
        limit: 4,
        page: 2,
        filters: {
          type: ArticleType.ALL,
        },
      },
    });
    thunk.api.get.mockResolvedValue(Promise.resolve({ data: articles }));
    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articles);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(fetchArticles, {
      wallOfArticles: {
        limit: 4,
        page: 2,
        filters: {
          type: ArticleType.ALL,
        },
      },
    });
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
