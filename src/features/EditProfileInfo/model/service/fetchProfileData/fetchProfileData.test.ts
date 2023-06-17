import { TestAsyncThunk } from '@/shared/lib/jest/testAsyncThunk';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { fetchProfileData } from './fetchProfileData';

describe('updateProfileData thunk', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    const profile: Profile = {
      firstname: 'name',
      lastname: 'surname',
      age: 35,
      country: Country.KAZAKHSTAN,
      currency: Currency.RUB,
      avatar: undefined,
      username: 'guest',
      city: undefined,
    };
    thunk.api.get.mockResolvedValue(Promise.resolve({ data: profile }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profile);
  });

  test('failed', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Credentials are incorrect');
  });
});
