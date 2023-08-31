import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { ArticleSortedField, ArticleType, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import type { SortingOrder } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input/Input';
import { Flex } from '@/shared/ui/Flex/Flex';

import { FilterTabs } from '../FilterTabs/FilterTabs';
import { SortSelector } from '../SortSelector/SortSelector';
import { ViewSwitcher } from '../ViewSwitcher/ViewSwitcher';

interface Props {
  className?: string;
  view: ArticleView;
  sort: ArticleSortedField;
  order: SortingOrder;
  search: string;
  articleTypeFilter: ArticleType;
  onChangeTypeFilter: (newType: ArticleType) => void;
  onChangeView: (newView: ArticleView) => void;
  onChangeSortOrder: (newOrder: SortingOrder) => void;
  onChangeSort: (newField: ArticleSortedField) => void;
  onChangeSearch: (value: string) => void;
}
export { ViewSwitcher };
export const ArticlesFiltrationSection: FC<Props> = memo(({
  className,
  view,
  sort,
  order,
  search,
  articleTypeFilter,
  onChangeView,
  onChangeSortOrder,
  onChangeSort,
  onChangeSearch,
  onChangeTypeFilter,
}) => {
  const { t } = useTranslation('articles');

  return (
    <Flex gap={12} direction="column" className={classNames('', {}, [className])}>
      <Flex justify="space-between">
        <SortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeSortOrder}
          onChangeSort={onChangeSort}
        />
        <ViewSwitcher view={view} onChangeView={onChangeView} />
      </Flex>
      <Card>
        <Input placeholder={t('search')} value={search} onChange={onChangeSearch} />
      </Card>
      <FilterTabs articleTypeFilter={articleTypeFilter} onChangeTypeFilter={onChangeTypeFilter} />
    </Flex>
  );
});
