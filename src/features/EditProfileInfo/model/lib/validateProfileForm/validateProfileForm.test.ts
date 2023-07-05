import { Profile, ValidateProfileError } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { validateProfileForm } from './validateProfileForm';

describe('validateProfileForm', () => {
  const state: Profile = {
    id: '1',
    userId: '1',
    firstname: 'name',
    lastname: 'surname',
    age: 35,
    country: Country.KAZAKHSTAN,
    currency: Currency.RUB,
    avatar: undefined,
    username: 'guest',
    city: undefined,
  };

  test('incorrect firstname', () => {
    const errors = validateProfileForm({ ...state, firstname: '' });

    expect(errors).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
  });

  test('incorrect lastname', () => {
    const errors = validateProfileForm({ ...state, lastname: '' });

    expect(errors).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
  });

  test('incorrect age', () => {
    const errors = validateProfileForm({ ...state, age: NaN });

    expect(errors).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', () => {
    const errors = validateProfileForm({ ...state, country: undefined });

    expect(errors).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect currency', () => {
    const errors = validateProfileForm({ ...state, currency: undefined });

    expect(errors).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
  });

  test('incorrect currency', () => {
    const errors = validateProfileForm(undefined);

    expect(errors).toEqual([ValidateProfileError.NO_DATA]);
  });
});
