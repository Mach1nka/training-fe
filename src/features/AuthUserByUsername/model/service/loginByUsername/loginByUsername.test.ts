import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';
import { userActions } from '@/entities/User';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername thunk', () => {
  const thunkArg = { username: 'guest', password: '123' };

  test('success', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    const userData = { username: 'guest', id: '1' };
    thunk.api.post.mockResolvedValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk(thunkArg);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(thunkArg);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
