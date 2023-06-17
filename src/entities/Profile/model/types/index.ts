import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export enum ValidateProfileError {
  INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
  INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA'
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  readonly: boolean;
  isLoading: boolean;
  data?: Profile;
  form?: Profile;
  error?: string;
  validateErrors?: ValidateProfileError[];
}
