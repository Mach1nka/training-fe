import type { DeepPartial } from '@reduxjs/toolkit';

import type { Article, ArticleDetailsSchema } from '../types';
import { fetchArticleById } from '../service/fetchArticleById/fetchArticleById';

import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice extra reducers', () => {
  const state: DeepPartial<ArticleDetailsSchema> = {
    isLoading: true,
    error: undefined,
  };

  test('getProfileData fulfilled', () => {
    const response: Article = {
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

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(response, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      data: response,
    });
  });
});
