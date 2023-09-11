import type { FC } from 'react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortedField } from '@/entities/Article';
import type { SelectOption } from '@/shared/ui/Popups/ui/Select/Select';
import { Select } from '@/shared/ui/Popups/ui/Select/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { SortingOrder } from '@/shared/types/common';

import cls from './SortSelector.module.scss';

interface Props {
  className?: string;
  sort: ArticleSortedField;
  order: SortingOrder;
  onChangeOrder: (order: SortingOrder) => void;
  onChangeSort: (sortField: ArticleSortedField) => void;
}

export const SortSelector: FC<Props> = memo(({
  className, sort, order, onChangeOrder, onChangeSort,
}) => {
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOption<SortingOrder>[]>(() => [
    {
      label: t('sort.asc'),
      value: 'asc',
    },
    {
      label: t('sort.desc'),
      value: 'desc',
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortedField>[]>(() =>
    Object.values(ArticleSortedField)
      .reduce((acc: SelectOption<ArticleSortedField>[], value) => {
        acc.push({ label: t(`sort.${value}`), value });
        return acc;
      }, []), [t]);

  return (
    <div className={classNames(cls.SortSelector, {}, [className])}>
      <Select
        placeholder={t('sort.label')}
        value={sort}
        options={sortFieldOptions}
        onChange={onChangeSort}
      />
      <Select options={orderOptions} value={order} onChange={onChangeOrder} />
    </div>
  );
});
