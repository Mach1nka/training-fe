import {
  FC, Suspense, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleCommentSection, addArticleComment } from '@/features/ArticleCommentList';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { Loader } from '@/shared/ui/Loader/Loader';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const onCommentSubmit = useCallback((text: string) => {
    dispatch(addArticleComment(text));
  }, []);

  if (!id) {
    return t('articleNotFound');
  }

  return (
    <>
      <ArticleDetails articleId={id} />
      <Text title={t('commentSection')} className={cls.commentSectionTitle} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onCommentSubmit={onCommentSubmit} />
        <ArticleCommentSection articleId={id} />
      </Suspense>
    </>
  );
});

export default ArticleDetailsPage;
