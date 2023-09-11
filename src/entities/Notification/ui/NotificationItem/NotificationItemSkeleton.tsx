import { memo } from 'react';
import type { FC } from 'react';

import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import cls from './NotificationItem.module.scss';

export const NotificationItemSkeleton: FC = memo(() => (
  <Card className={cls.skeletonCard} theme={CardTheme.OUTLINE}>
    <Skeleton width={80} height={16} />
    <Skeleton width={160} height={12} />
  </Card>
));
