import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 2)
  .fill(undefined)
  .map((_, idx) => <ArticleListItemSkeleton view={view} key={idx} />);

interface Props {
  className?: string;
  view?: ArticleView;
  articles: Article[];
  isLoading: boolean;
}

export const ArticleList: FC<Props> = memo(({
  className, articles, isLoading, view = ArticleView.TILE,
}) => {
  const renderArticles = (article: Article) =>
    <ArticleListItem key={article.id} article={article} view={view} />;

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        articles.length ? articles.map(renderArticles) : null
      }
    </div>
  );
});