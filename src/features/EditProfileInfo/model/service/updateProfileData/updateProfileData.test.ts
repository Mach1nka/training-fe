import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';
import { Profile, ValidateProfileError } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { updateProfileData } from './updateProfileData';

describe('updateProfileData thunk', () => {
  const formData: Profile = {
    firstname: 'name',
    lastname: 'surname',
    age: 35,
    country: Country.KAZAKHSTAN,
    currency: Currency.RUB,
    avatar: undefined,
    username: 'guest',
    city: undefined,
  };

  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: formData } });

    thunk.api.put.mockResolvedValue(Promise.resolve({ data: formData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(formData);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: formData } });
    thunk.api.put.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...formData, lastname: '' } } });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
  });
});
