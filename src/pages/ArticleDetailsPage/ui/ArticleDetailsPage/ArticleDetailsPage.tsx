import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';

const ArticleDetailsPage: FC = memo(() => {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams();

  if (!id) {
    return t('articleNotFound');
  }

  return (
    <ArticleDetails articleId={id} />
  );
});

export default ArticleDetailsPage;
