import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';
import { StateSchema } from '@/shared/config/redux/types';
import { Comment } from '@/entities/Comment';

import { addArticleComment } from './addArticleComment';

describe('addArticleComment thunk', () => {
  const state: DeepPartial<StateSchema> = {
    user: {
      authData: {
        id: '1',
      },
    },
    articleDetails: {
      data: {
        id: '2',
      },
    },
  };

  test('success', async () => {
    const thunk = new TestAsyncThunk(addArticleComment, state);
    const comment: Comment = {
      id: '1',
      text: 'updated comment text text',
      user: {
        id: '1',
        username: 'guest',
      },
    };

    thunk.api.post.mockResolvedValue(Promise.resolve({ data: comment }));
    const result = await thunk.callThunk('updated comment text text');

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comment);
  });

  test('incorrect data', async () => {
    const thunk = new TestAsyncThunk(addArticleComment, { user: {} });
    thunk.api.post.mockResolvedValue(Promise.resolve());
    const result = await thunk.callThunk('');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Incorrect data');
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(addArticleComment, state);
    thunk.api.post.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('text');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
