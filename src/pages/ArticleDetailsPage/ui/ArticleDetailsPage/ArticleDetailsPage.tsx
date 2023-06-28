import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleCommentSection } from '@/features/ArticleCommentList';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams();

  if (!id) {
    return t('articleNotFound');
  }

  return (
    <>
      <ArticleDetails articleId={id} />
      <Text title={t('commentSection')} className={cls.commentSectionTitle} />
      <ArticleCommentSection articleId={id} />
    </>
  );
});

export default ArticleDetailsPage;
