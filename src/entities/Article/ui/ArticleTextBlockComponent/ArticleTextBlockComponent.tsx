import type { FC } from 'react';
import { memo } from 'react';

import { Text } from '@/shared/ui/Text/Text';

import type { ArticleTextBlock } from '../../model/types';

import cls from './ArticleTextBlockComponent.module.scss';

interface Props {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<Props> = memo(({ className, block }) => (
  <article className={className}>
    {block.title && <Text title={block.title} className={cls.title} />}
    {block.paragraphs.map((text, idx) => (
      <Text key={idx} text={text} />
    ))}
  </article>
));
