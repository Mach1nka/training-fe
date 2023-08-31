import type { Country } from '@/entities/Country';
import type { Currency } from '@/entities/Currency';

import type { ValidateProfileError } from '../const';

export interface Profile {
  id: string;
  userId: string;
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
