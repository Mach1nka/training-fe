import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.png';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { Comment } from '../../model/types';

import cls from './CommentCard.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface Props {
  className?: string;
  comment?: Comment;
  isLoading: boolean;
}

export const CommentCard: FC<Props> = memo(({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.userInfo}>
          <Skeleton width={30} height={30} borderRadius="50%" className={cls.avatar} />
          <Skeleton width={50} height={16} />
        </div>
        <Skeleton width="100%" height={32} className={cls.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}/${comment.user.id}`} className={cls.userInfo}>
        <Avatar className={cls.avatar} size={30} src={comment.user.avatar || DefaultAvatar} />
        <Text text={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
});
