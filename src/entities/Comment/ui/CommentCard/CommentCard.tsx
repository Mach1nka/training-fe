import type { FC } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.png';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Flex } from '@/shared/ui/Flex/Flex';
import { RoutePath } from '@/shared/constant/router';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import type { Comment } from '../../model/types';

import cls from './CommentCard.module.scss';

interface Props {
  className?: string;
  comment?: Comment;
  isLoading: boolean;
}

export const CommentCard: FC<Props> = memo(({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <Flex direction="column" gap={12} className={classNames(cls.CommentCard, {}, [className])}>
        <Flex align="center">
          <Skeleton width={30} height={30} borderRadius="50%" className={cls.avatar} />
          <Skeleton width={50} height={16} />
        </Flex>
        <Skeleton width="100%" height={32} />
      </Flex>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <Flex direction="column" gap={12} className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={RoutePath.profile(comment.user.id)} className={cls.userInfo}>
        <Avatar className={cls.avatar} size={30} src={comment.user.avatar || DefaultAvatar} />
        <Text text={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </Flex>
  );
});
