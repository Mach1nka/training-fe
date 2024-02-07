import type { StateSchema } from '@/app/providers/StoreProvider';

const getCommentArticleText = (state: StateSchema) => state.commentArticle?.text ?? '';

const getCommentArticleError = (state: StateSchema) => state.commentArticle?.error;

export {
  getCommentArticleText,
  getCommentArticleError,
};
