import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';

import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId thunk', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    const comments: Comment[] = [
      {
        id: '1',
        text: 'comment text',
        user: {
          id: '1',
          username: 'guest',
        },
      },
      {
        id: '2',
        text: 'comment text2',
        user: {
          id: '2',
          username: 'admin',
        },
      },
    ];

    thunk.api.get.mockResolvedValue(Promise.resolve({ data: comments }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comments);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
