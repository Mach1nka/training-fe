import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortedField, ArticleType, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { SortingOrder } from '@/shared/types/common';
import { Input } from '@/shared/ui/Input/Input';

import { FilterTabs } from '../FilterTabs/FilterTabs';
import { SortSelector } from '../SortSelector/SortSelector';
import { ViewSwitcher } from '../ViewSwitcher/ViewSwitcher';
import cls from './ArticlesFiltrationSection.module.scss';

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
    <div className={classNames('', {}, [className])}>
      <div className={cls.switcherWrapper}>
        <SortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeSortOrder}
          onChangeSort={onChangeSort}
        />
        <ViewSwitcher view={view} onChangeView={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t('search')} value={search} onChange={onChangeSearch} />
      </Card>
      <FilterTabs articleTypeFilter={articleTypeFilter} onChangeTypeFilter={onChangeTypeFilter} />
    </div>
  );
});
