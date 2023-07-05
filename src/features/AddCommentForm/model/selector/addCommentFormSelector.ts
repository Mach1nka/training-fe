import { StateSchema } from '@/shared/config/redux/types';

const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text || '';

const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;

export {
  getAddCommentFormText,
  getAddCommentFormError,
};
