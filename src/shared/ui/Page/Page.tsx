import {
  FC, MutableRefObject, UIEvent, useEffect, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { useInfiniteScroll } from '@/shared/hook/useInfiniteScroll';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useThrottle } from '@/shared/hook/useThrottle';
import { getScrollPositionByPath, uiConditionActions } from '@/features/UICondition';

import cls from './Page.module.scss';

interface Props {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<Props> = ({ className, children, onScrollEnd }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollTop = useSelector(getScrollPositionByPath(pathname));

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiConditionActions.setPageScrollPosition({
      path: pathname, position: e.currentTarget.scrollTop,
    }));
  }, 1000);

  useEffect(() => {
    wrapperRef.current.scrollTo({ top: scrollTop, behavior: 'smooth' });
  }, []);

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  return (
    <main ref={wrapperRef} onScroll={onScroll} className={classNames(cls.Page, {}, [className])}>
      {children}
      {onScrollEnd ? <div style={{ height: '120px' }} ref={triggerRef} /> : null}
    </main>
  );
};
