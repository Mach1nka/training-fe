import { Comment } from '@/entities/Comment';

import { ArticleCommentsSchema } from '../types';
import { articleCommentsReducer } from './articleCommentSlice';
import { fetchCommentsByArticleId } from '../service/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('articleCommentSlice extra reducers', () => {
  const state: DeepPartial<ArticleCommentsSchema> = {
    isLoading: true,
    data: [],
  };

  test('getProfileData fulfilled', () => {
    const response: Comment[] = [
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

    expect(articleCommentsReducer(state as ArticleCommentsSchema, fetchCommentsByArticleId.fulfilled(response, '', '')))
      .toEqual({
        isLoading: false,
        data: response,
      });
  });
});
