import { useEffect, useState } from 'react';

type UseDetectDevice = () => boolean;

export const useDetectDevice: UseDetectDevice = () => {
  const [isTouchableDevise, setDevise] = useState(false);

  useEffect(() => {
    setDevise(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return isTouchableDevise;
};
