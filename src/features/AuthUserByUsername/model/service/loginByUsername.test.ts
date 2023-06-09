import axios from 'axios';

import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';
import { userActions } from '@/entities/User';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('Login thunk', () => {
  const thunkArg = { username: 'guest', password: '123' };

  test('success login', async () => {
    const userData = { username: 'guest', id: '1' };
    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(thunkArg);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('failed login', async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(thunkArg);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
