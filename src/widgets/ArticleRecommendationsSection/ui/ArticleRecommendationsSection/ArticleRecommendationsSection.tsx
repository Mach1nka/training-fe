import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { useFetchArticleRecommendationsQuery } from '../../api/articleRecommendationsApi';

import cls from './ArticleRecommendationsSection.module.scss';

interface Props {
  className?: string;
}

const ArticleRecommendationsSection: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('articleDetails');
  const { isLoading, data: articles } = useFetchArticleRecommendationsQuery();

  return (
    <>
      <Text title={t('recommendationsSectionTitle')} className={cls.sectionTitle} />
      <ArticleList
        className={classNames(cls.recommendations, {}, [className])}
        articles={articles || []}
        isLoading={isLoading}
        target="_blank"
        data-testid="ArticleRecommendationsSection"
      />
    </>
  );
});

export default ArticleRecommendationsSection;
