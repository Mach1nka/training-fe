import type { FC } from 'react';
import { memo, useCallback, useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { CommentForm, CommentList } from '@/entities/Comment';
import { getUserId } from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';
import { Flex } from '@/shared/ui/Flex/Flex';

import {
  getCommentArticleText,
  getCommentArticleError,
} from '../../model/selector/commentArticleSelector';
import {
  commentArticleActions,
  commentArticleReducer,
} from '../../model/slice/commentArticleSlice';
import {
  useFetchArticleCommentsQuery,
  useAddArticleCommentMutation,
} from '../../api/articleCommentsApi';

const initialReducers: ReducersList = {
  commentArticle: commentArticleReducer,
};

interface Props {
  articleId: string;
  className?: string;
}

const ArticleCommentSection: FC<Props> = memo(({ articleId, className }) => {
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();
  const commentHintId = useId();
  const text = useSelector(getCommentArticleText);
  const error = useSelector(getCommentArticleError);
  const userId = useSelector(getUserId);
  const { isLoading: isCommentsLoading, data: comments } =
    useFetchArticleCommentsQuery(articleId);
  const [addArticleComment, { isLoading: isCommentSending }] = useAddArticleCommentMutation();

  const onChange = useCallback(
    (value: string) => {
      dispatch(commentArticleActions.setText(value));
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    async (text: string) => {
      if (userId && articleId && text) {
        addArticleComment({ userId, articleId, text });
      }
    },
    [articleId, userId, addArticleComment],
  );

  useDynamicReducerLoad(initialReducers);

  return (
    <Flex gap={16} direction="column" className={className}>
      <Text title={t('commentSectionTitle')} />
      <CommentForm
        text={text}
        isLoading={isCommentSending}
        commentHintId={commentHintId}
        placeholder={t('commentForm.placeholder')}
        label={t('commentForm.submitBtn')}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <CommentList comments={comments || []} isLoading={isCommentsLoading} />
    </Flex>
  );
});

export default ArticleCommentSection;
