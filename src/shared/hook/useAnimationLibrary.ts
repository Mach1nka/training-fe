import {
  useMemo, useRef, useEffect, useState,
} from 'react';

type GestureType = typeof import('@use-gesture/react');
type SpringType = typeof import('@react-spring/web');

export type UseAnimationLibrary = () => {
  isLoaded: boolean,
  Gesture?: GestureType,
  Spring?: SpringType
};

// NOTE: Async library loading is unnecessary when component is already lazy.
export const useLoadAnimationLibrary: UseAnimationLibrary = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const gesture = useRef<GestureType>();
  const spring = useRef<SpringType>();

  useEffect(() => {
    const loadLibraries = async () => {
      const [reactGesture, reactSpring] = await Promise.all(
        [import('@use-gesture/react'), import('@react-spring/web')],
      );
      gesture.current = reactGesture;
      spring.current = reactSpring;
      setIsLoaded(true);
    };

    loadLibraries();
  }, []);

  return useMemo(() => ({
    isLoaded,
    Gesture: gesture.current,
    Spring: spring.current,
  }), [isLoaded]);
};
