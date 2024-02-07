import type { DeepPartial } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/StoreProvider';

import {
  getCommentArticleError,
  getCommentArticleText,
} from './commentArticleSelector';

const state: DeepPartial<StateSchema> = {
  commentArticle: {
    text: 'some text',
    error: 'error text',
  },
};

describe('getCommentArticleText selector', () => {
  test('should return text', () => {
    expect(getCommentArticleText(state as StateSchema)).toBe('some text');
  });

  test('should work with empty value', () => {
    expect(getCommentArticleText({} as StateSchema)).toBe('');
  });
});

describe('getCommentArticleError selector', () => {
  test('should return error message', () => {
    expect(getCommentArticleError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getCommentArticleError({} as StateSchema)).toBeUndefined();
  });
});
