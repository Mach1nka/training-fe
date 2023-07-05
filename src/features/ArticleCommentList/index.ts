import { addArticleComment } from './model/service/addArticleComment/addArticleComment';
import { ArticleCommentsSchema } from './model/types';
import {
  ArticleCommentSectionLazy as ArticleCommentSection,
} from './ui/ArticleCommentSection/ArticleCommentSection.lazy';

export { ArticleCommentSection, addArticleComment, ArticleCommentsSchema };
