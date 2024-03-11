import type { FC } from 'react';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import type { TabItem } from '@/shared/ui/Tabs/Tabs';
import { Tabs } from '@/shared/ui/Tabs/Tabs';

interface Props {
  className?: string;
  articleTypeFilter: ArticleType;
  onChangeTypeFilter: (newType: ArticleType) => void;
}

export const FilterTabs: FC<Props> = memo(
  ({ className, articleTypeFilter, onChangeTypeFilter }) => {
    const { t } = useTranslation('articles');

    const articleTypeTabs: TabItem[] = useMemo(
      () =>
        Object.values(ArticleType).reduce((acc: TabItem[], value) => {
          acc.push({ label: t(`filters.${value.toLowerCase()}`), value });
          return acc;
        }, []),
      [t],
    );

    const onTabClick = useCallback(
      (value: string) => {
        onChangeTypeFilter(value as ArticleType);
      },
      [onChangeTypeFilter],
    );

    return (
      <Tabs
        tabs={articleTypeTabs}
        value={articleTypeFilter}
        onTabClick={onTabClick}
        className={className}
      />
    );
  },
);
