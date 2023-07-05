import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';

import { articleCommentsReducer } from '../../model/slice/articleCommentSlice';
import {
  getArticleCommentsData,
  getArticleCommentsError,
  getArticleCommentsLoading,
} from '../../model/selector/articleCommentSelector';
import {
  fetchCommentsByArticleId,
} from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

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

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    thunkMiddleware(() => dispatch(fetchCommentsByArticleId(articleId)));
  }, []);

  return <CommentList comments={comments} isLoading={isLoading} />;
});

export default ArticleCommentSection;
