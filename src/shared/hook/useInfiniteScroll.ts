import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

interface Props {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

type UseInfiniteScroll = (props: Props) => void;

export const useInfiniteScroll: UseInfiniteScroll = ({ wrapperRef, triggerRef, callback }) => {
  useEffect(() => {
    const trigger = triggerRef.current;
    const wrapper = wrapperRef.current;
    let observer: IntersectionObserver | undefined;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapper,
        rootMargin: '0px',
        threshold: 1,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer?.observe(trigger);
    }

    return () => {
      observer?.unobserve(trigger);
    };
  }, [wrapperRef, triggerRef, callback]);
};
