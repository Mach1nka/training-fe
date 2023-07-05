import { AddCommentFormSchema } from '../types';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('articleCommentSlice extra reducers', () => {
  const state: DeepPartial<AddCommentFormSchema> = {
    text: '',
    error: undefined,
  };

  test('set text', () => {
    expect(addCommentFormReducer(
      state as AddCommentFormSchema,
      addCommentFormActions.setText('some comment text'),
    ))
      .toEqual({ text: 'some comment text', error: undefined });
  });
});
