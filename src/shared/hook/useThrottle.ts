import { useCallback, useRef, useEffect } from 'react';

type UseThrottle = (callback: (...args: any[]) => void, delay: number) => () => void;

export const useThrottle: UseThrottle = (callback, delay) => {
  const shouldBeCalled = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  return useCallback((...args) => {
    if (shouldBeCalled.current) {
      callback(...args);
      shouldBeCalled.current = false;

      timer.current = setTimeout(() => { shouldBeCalled.current = true; }, delay);
    }
  }, [callback, delay]);
};
