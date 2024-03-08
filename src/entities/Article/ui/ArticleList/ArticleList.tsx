import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { memo } from 'react';

import { Flex } from '@/shared/ui/Flex/Flex';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { RTLProps } from '@/shared/types/common';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import type { Article } from '../../model/types';
import { ArticleView } from '../../model/const';

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 10 : 2)
  .fill(undefined)
  .map((_, idx) => <ArticleListItemSkeleton view={view} key={idx} />);

interface Props extends RTLProps {
  className?: string;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  articles: Article[];
  isLoading: boolean;
}

export const ArticleList: FC<Props> = memo(({
  className, articles, isLoading, target, view = ArticleView.TILE, 'data-testid': dataTestId = '',
}) => {
  const renderArticles = (article: Article) =>
    <ArticleListItem key={article.id} target={target} article={article} view={view} />;

  if (view === ArticleView.TILE) {
    return (
      <Flex gap={32} wrap="wrap" className={classNames('', {}, [className])} data-testid={dataTestId}>
        {
          articles.length ? articles.map(renderArticles) : null
        }
        {
          isLoading ? getSkeletons(view) : null
        }
      </Flex>
    );
  }

  return (
    <Flex
      gap={32}
      direction="column"
      className={classNames('', {}, [className])}
      data-testid={dataTestId}
    >
      {
        articles.length ? articles.map(renderArticles) : null
      }
      {
        isLoading ? getSkeletons(view) : null
      }
    </Flex>
  );
});
