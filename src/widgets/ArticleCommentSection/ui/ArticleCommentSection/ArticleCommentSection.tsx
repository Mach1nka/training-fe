import {
  FC, memo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { getUserId } from '@/entities/User';

import {
  useFetchArticleCommentsQuery,
  useAddArticleCommentMutation,
} from '../../api/articleCommentsApi';
import cls from './ArticleCommentSection.module.scss';

interface Props {
  className?: string;
  articleId: string;
}

const ArticleCommentSection: FC<Props> = memo(({ articleId }) => {
  const userId = useSelector(getUserId);
  const { isLoading, data: comments } = useFetchArticleCommentsQuery(articleId);
  const [addArticleComment] = useAddArticleCommentMutation();

  const onCommentSubmit = useCallback((text: string) => {
    if (userId && articleId && text) {
      addArticleComment({ userId, articleId, text });
    }
  }, [addArticleComment, articleId, userId]);

  return (
    <>
      <AddCommentForm className={cls.commentForm} onCommentSubmit={onCommentSubmit} />
      <CommentList comments={comments || []} isLoading={isLoading} />
    </>
  );
});

export default ArticleCommentSection;
