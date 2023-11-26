import type { CommentArticleSchema } from '../types';
import { commentArticleActions, commentArticleReducer } from './commentArticleSlice';

describe('commentArticleSlice extra reducers', () => {
  const state: DeepPartial<CommentArticleSchema> = {
    text: '',
    error: undefined,
  };

  test('set text', () => {
    expect(commentArticleReducer(
      state as CommentArticleSchema,
      commentArticleActions.setText('some comment text'),
    ))
      .toEqual({ text: 'some comment text', error: undefined });
  });
});
