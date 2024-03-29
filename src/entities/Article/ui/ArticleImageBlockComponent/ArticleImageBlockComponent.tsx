import type { FC } from 'react';
import { memo } from 'react';

import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { AppImage } from '@/shared/ui/AppImage/AppImage';

import type { ArticleImageBlock } from '../../model/types';

import cls from './ArticleImageBlockComponent.module.scss';

interface Props {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<Props> = memo(({ className, block }) => (
  <article className={className}>
    <AppImage src={block.src} alt={block.title} className={cls.img} />
    {block.title && <Text align={TextAlign.CENTER} text={block.title} />}
  </article>
));
