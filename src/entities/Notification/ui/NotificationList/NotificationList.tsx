import { memo } from 'react';
import type { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex } from '@/shared/ui/Flex/Flex';

import { NotificationItemSkeleton } from '../NotificationItem/NotificationItemSkeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useFetchNotificationsQuery } from '../../api/notificationApi';

const getSkeletons = () =>
  new Array(3).fill(undefined).map((_, idx) => <NotificationItemSkeleton key={idx} />);

interface Props {
  className?: string;
}

export const NotificationList: FC<Props> = memo(({ className }) => {
  const { isLoading, data } = useFetchNotificationsQuery(undefined, {
    pollingInterval: 1000 * 60 * 5,
  });

  return (
    <Flex gap={16} direction="column" className={classNames('', {}, [className])}>
      {data?.map(({ id, title, description, href }) => (
        <NotificationItem key={id} title={title} description={description} href={href} />
      ))}
      {isLoading ? <>{getSkeletons()}</> : null}
    </Flex>
  );
});
