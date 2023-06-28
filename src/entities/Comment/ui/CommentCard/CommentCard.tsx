import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.png';

import { Comment } from '../../model/types';

import cls from './CommentCard.module.scss';

interface Props {
  className?: string;
  comment: Comment;
}

export const CommentCard: FC<Props> = memo(({ className, comment }) => (
  <div className={classNames(cls.CommentCard, {}, [className])}>
    <div className={cls.userInfo}>
      <Avatar className={cls.avatar} size={30} src={comment.user.avatar || DefaultAvatar} />
      <Text text={comment.user.username} />
    </div>
    <Text text={comment.text} className={cls.text} />
  </div>
));
