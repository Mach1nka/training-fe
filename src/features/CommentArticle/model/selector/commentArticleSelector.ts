import type { StateSchema } from '@/shared/config/redux/types';

const getCommentArticleText = (state: StateSchema) => state.commentArticle?.text ?? '';

const getCommentArticleError = (state: StateSchema) => state.commentArticle?.error;

export {
  getCommentArticleText,
  getCommentArticleError,
};
