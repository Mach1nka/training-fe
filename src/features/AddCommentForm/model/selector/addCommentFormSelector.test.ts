import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from '@/shared/config/redux/types';

import {
  getAddCommentFormText,
  getAddCommentFormError,
} from './addCommentFormSelector';

const state: DeepPartial<StateSchema> = {
  addCommentForm: {
    text: 'some text',
    error: 'error text',
  },
};

describe('getAddCommentFormText selector', () => {
  test('should return text', () => {
    expect(getAddCommentFormText(state as StateSchema)).toBe('some text');
  });

  test('should work with empty value', () => {
    expect(getAddCommentFormText({} as StateSchema)).toBe('');
  });
});

describe('getAddCommentFormError selector', () => {
  test('should return error message', () => {
    expect(getAddCommentFormError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getAddCommentFormError({} as StateSchema)).toBeUndefined();
  });
});
