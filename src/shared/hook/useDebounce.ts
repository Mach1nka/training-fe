import { useCallback, useRef, useEffect } from 'react';

type UseDebounce = (callback: (...args: any[]) => void, delay: number) => () => void;

export const useDebounce: UseDebounce = (callback, delay) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  return useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
