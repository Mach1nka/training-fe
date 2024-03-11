import type { FC } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { ArticleView } from '../../model/const';

import cls from './ArticleListItem.module.scss';

interface Props {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<Props> = memo(({ className, view }) => {
  if (view === ArticleView.LIST) {
    return (
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={60} height={24} className={cls.username} />
          <Skeleton width={90} height={24} className={cls.date} />
        </div>
        <Skeleton width="60%" height={32} className={cls.title} />
        <Skeleton width="100%" height={250} className={cls.img} />
        <div className={cls.footer}>
          <Skeleton width={160} height={46} />
        </div>
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <div className={cls.imageWrapper}>
        <Skeleton width="100%" height={200} />
      </div>
      <div className={cls.infoWrapper}>
        <Skeleton width={110} height={24} />
      </div>
      <Skeleton width="100%" height={24} />
    </Card>
  );
});
