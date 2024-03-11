import { forwardRef } from 'react';
import type { PropsWithChildren } from 'react';

import type { RTLProps } from '@/shared/types/common';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Page.module.scss';

interface Props extends PropsWithChildren, RTLProps {
  className?: string;
  onScroll?: () => void;
}

export const Page = forwardRef<HTMLDivElement, Props>(
  ({ className, children, onScroll, 'data-testid': dataTestId = '' }, ref) => (
    <main
      ref={ref}
      onScroll={onScroll}
      className={classNames(cls.Page, {}, [className])}
      data-testid={dataTestId}
    >
      {children}
    </main>
  ),
);
