import { FC, memo } from 'react';

import { ArticleImageBlock } from '../../model/types';
import cls from './ArticleImageBlockComponent.module.scss';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

interface Props {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<Props> = memo(({ className, block }) => (
  <div className={className}>
    <img src={block.src} alt={block.title} className={cls.img} />
    {block.title && <Text align={TextAlign.CENTER} text={block.title} />}
  </div>
));
