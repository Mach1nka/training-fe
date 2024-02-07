import { forwardRef } from 'react';
import type { PropsWithChildren, UIEvent } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Page.module.scss';

interface Props extends PropsWithChildren {
  className?: string;
  onScroll?: () => void;
}

export const Page = forwardRef<HTMLDivElement, Props>(({ className, children, onScroll }, ref) => (
  <main ref={ref} onScroll={onScroll} className={classNames(cls.Page, {}, [className])}>
    {children}
  </main>
));
