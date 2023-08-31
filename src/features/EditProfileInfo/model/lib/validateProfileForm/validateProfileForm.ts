import type { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '@/entities/Profile';

export const validateProfileForm = (data: Profile | undefined): ValidateProfileError[] => {
  const errors: ValidateProfileError[] = [];

  if (!data) {
    errors.push(ValidateProfileError.NO_DATA);
    return errors;
  }

  if (!data.firstname) {
    errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
  }

  if (!data.lastname) {
    errors.push(ValidateProfileError.INCORRECT_LASTNAME);
  }

  if (!data.username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!data.age || !Number.isInteger(data.age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!data.currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  if (!data.country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
