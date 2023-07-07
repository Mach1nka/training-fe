import {
  FC, Suspense, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleCommentSection } from '@/widgets/ArticleCommentSection';
import { Loader } from '@/shared/ui/Loader/Loader';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams();

  if (!id) {
    return t('articleNotFound');
  }

  return (
    <>
      <AppLink to="/articles/" underline={AppLinkUnderline.NONE}>
        <Button>{t('backToArticlesBtn')}</Button>
      </AppLink>
      <ArticleDetails articleId={id} />
      <Text title={t('commentSectionTitle')} className={cls.commentSectionTitle} />
      <Suspense fallback={<div className={cls.commentLoading}><Loader /></div>}>
        <ArticleCommentSection articleId={id} />
      </Suspense>
    </>
  );
});

export default ArticleDetailsPage;
