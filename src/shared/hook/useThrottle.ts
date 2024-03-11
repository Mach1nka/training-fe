import { useCallback, useRef, useEffect } from 'react';

export const useThrottle = <S>(
  callback: (...args: S[]) => void,
  delay: number,
): ((...args: S[]) => void) => {
  const shouldBeCalled = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return useCallback(
    (...args) => {
      if (shouldBeCalled.current) {
        callback(...args);
        shouldBeCalled.current = false;

        timer.current = setTimeout(() => {
          shouldBeCalled.current = true;
        }, delay);
      }
    },
    [callback, delay],
  );
};
