import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { AddCommentForm } from '@/features/AddCommentForm';

import { articleCommentsReducer } from '../../model/slice/articleCommentSlice';
import {
  getArticleCommentsData,
  getArticleCommentsError,
  getArticleCommentsLoading,
} from '../../model/selector/articleCommentSelector';
import {
  fetchCommentsByArticleId,
} from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addArticleComment } from '../../model/service/addArticleComment/addArticleComment';

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

interface Props {
  className?: string;
  articleId: string;
}

const ArticleCommentSection: FC<Props> = memo(({ articleId }) => {
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleCommentsData);
  const isLoading = useSelector(getArticleCommentsLoading);
  const error = useSelector(getArticleCommentsError);

  const onCommentSubmit = useCallback((text: string) => {
    dispatch(addArticleComment(text));
  }, []);

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    thunkMiddleware(() => dispatch(fetchCommentsByArticleId(articleId)));
  }, [articleId]);

  return (
    <>
      <AddCommentForm onCommentSubmit={onCommentSubmit} />
      <CommentList comments={comments} isLoading={isLoading} />
    </>
  );
});

export default ArticleCommentSection;
