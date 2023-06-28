import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';
import { ValidateProfileError } from '@/entities/Profile';
import { Comment } from '@/entities/Comment';

import {
  getArticleCommentsData,
  getArticleCommentsLoading,
  getArticleCommentsError,
} from './articleCommentSelector';

const comments: Comment[] = [
  {
    id: '1',
    text: 'comment text',
    user: {
      id: '1',
      username: 'guest',
    },
  },
  {
    id: '2',
    text: 'comment text2',
    user: {
      id: '2',
      username: 'admin',
    },
  },
];

const state: DeepPartial<StateSchema> = {
  articleComments: {
    data: comments,
    isLoading: true,
    error: 'error text',
  },
};

describe('getArticleCommentsData selector', () => {
  test('should return profile', () => {
    expect(getArticleCommentsData(state as StateSchema)).toEqual(comments);
  });

  test('should work with empty value', () => {
    expect(getArticleCommentsData({} as StateSchema)).toEqual([]);
  });
});

describe('getArticleCommentsLoading selector', () => {
  test('should return loading', () => {
    expect(getArticleCommentsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getArticleCommentsLoading({} as StateSchema)).toBe(false);
  });
});

describe('getArticleCommentsError selector', () => {
  test('should return error message', () => {
    expect(getArticleCommentsError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getArticleCommentsError({} as StateSchema)).toBeUndefined();
  });
});
