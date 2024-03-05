import { useEffect, useRef } from 'react';
import type {
  FC, MutableRefObject, PropsWithChildren, UIEvent,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useInfiniteScroll } from '@/shared/hook/useInfiniteScroll';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { useThrottle } from '@/shared/hook/useThrottle';
import { Page } from '@/shared/ui/Page/Page';
import type { RTLProps } from '@/shared/types/common';

import { getScrollPositionByPath } from '../../model/selector/uiConditionSelector';
import { uiConditionActions } from '../../model/slice/uiConditionSlice';

interface Props extends PropsWithChildren, RTLProps {
  className?: string;
  onScrollEndPage: () => void;
}

export const InfiniteScrollPage: FC<Props> = ({
  className,
  children,
  onScrollEndPage,
  'data-testid': dataTestId = '',
}) => {
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

  useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEndPage });

  return (
    <Page data-testid={dataTestId} ref={wrapperRef} onScroll={onScroll} className={className}>
      {children}
      <div style={{ height: '120px' }} ref={triggerRef} />
    </Page>
  );
};
