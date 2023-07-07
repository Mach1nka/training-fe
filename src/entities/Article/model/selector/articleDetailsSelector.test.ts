import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/redux/types';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetailsSelector';
import { Article } from '../types';

const article: Article = {
  id: '1',
  user: {
    id: '1',
    username: 'user',
  },
  title: 'Javascript - язык программирования',
  subtitle: 'Краткий пересказ всего JavaScript',
  img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  views: 10,
  createdAt: '20.05.2020',
  type: [],
  blocks: [],
};

const state: DeepPartial<StateSchema> = {
  articleDetails: {
    data: article,
    isLoading: true,
    error: 'error text',
  },
};

describe('getArticleDetailsData selector', () => {
  test('should return data', () => {
    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });

  test('should work with empty value', () => {
    expect(getArticleDetailsData({} as StateSchema)).toBeUndefined();
  });
});

describe('getArticleDetailsIsLoading selector', () => {
  test('should return loading', () => {
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty value', () => {
    expect(getArticleDetailsIsLoading({} as StateSchema)).toBe(false);
  });
});

describe('getArticleDetailsError selector', () => {
  test('should return error message', () => {
    expect(getArticleDetailsError(state as StateSchema)).toBe('error text');
  });

  test('should work with empty value', () => {
    expect(getArticleDetailsError({} as StateSchema)).toBeUndefined();
  });
});
