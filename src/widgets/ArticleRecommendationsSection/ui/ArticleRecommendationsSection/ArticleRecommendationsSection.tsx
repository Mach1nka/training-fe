import type { FC } from 'react';
import { memo } from 'react';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useFetchArticleRecommendationsQuery } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsSection.module.scss';

interface Props {
  className?: string;
}

const ArticleRecommendationsSection: FC<Props> = memo(({ className }) => {
  const { isLoading, data: articles } = useFetchArticleRecommendationsQuery();

  return (
    <ArticleList
      className={classNames(cls.recommendations, {}, [className])}
      articles={articles || []}
      isLoading={isLoading}
      target="_blank"
    />
  );
});

export default ArticleRecommendationsSection;
