import type { FC } from 'react';
import { Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ArticleRecommendationsSection } from '@/widgets/ArticleRecommendationsSection';
import { CommentArticle } from '@/features/CommentArticle';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Page } from '@/shared/ui/Page/Page';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = memo(() => {
  const { t } = useTranslation('articleDetails');
  const { id } = useParams();

  if (!id) {
    return <Text theme={TextTheme.ERROR} title={t('articleNotFound')} />;
  }

  return (
    <Page>
      <ArticleDetailsPageHeader />
      <ArticleDetails articleId={id} />
      <Text title={t('recommendationsSectionTitle')} className={cls.recommendationsSectionTitle} />
      <Suspense fallback={<Flex direction="column" align="center"><Loader /></Flex>}>
        <ArticleRecommendationsSection />
      </Suspense>
      <Text title={t('commentSectionTitle')} className={cls.commentSectionTitle} />
      <Suspense fallback={<Flex direction="column" align="center"><Loader /></Flex>}>
        <CommentArticle articleId={id} />
      </Suspense>
    </Page>
  );
});

export default ArticleDetailsPage;
