import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import { Comment } from '../../model/types';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface Props {
  className?: string;
  isLoading:boolean;
  comments: Comment[];
}

export const CommentList: FC<Props> = memo(({ className, comments, isLoading }) => {
  const { t } = useTranslation();

  if (!comments.length && !isLoading) {
    return <Text text={t('commentBlock.noComments')} />;
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          className={cls.comment}
          isLoading={false}
        />
      ))}
    </div>
  );
});