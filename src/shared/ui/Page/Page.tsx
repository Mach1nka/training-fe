import { FC, MutableRefObject, useRef } from 'react';

import { useInfiniteScroll } from '@/shared/hook/useInfiniteScroll';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Page.module.scss';

interface Props {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<Props> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
