import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Flex } from '@/shared/ui/Flex/Flex';

import { Comment } from '../../model/types';
import { CommentCard } from '../CommentCard/CommentCard';

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
      <Flex direction="column" gap={16} className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap={16} className={classNames('', {}, [className])}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          isLoading={false}
        />
      ))}
    </Flex>
  );
});
