import type { FC } from 'react';
import { memo } from 'react';

import { Code } from '@/shared/ui/Code/Code';

import type { ArticleCodeBlock } from '../../model/types';

interface Props {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<Props> = memo(({ className, block }) => (
  <article className={className}>
    <Code text={block.code} />
  </article>
));
