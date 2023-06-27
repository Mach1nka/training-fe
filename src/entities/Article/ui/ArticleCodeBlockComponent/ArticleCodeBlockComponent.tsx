import { FC, memo } from 'react';

import { Code } from '@/shared/ui/Code/Code';

import { ArticleCodeBlock } from '../../model/types';

interface Props {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<Props> = memo(({ className, block }) => (
  <Code text={block.code} className={className} />
));
