import {
  useCallback, useEffect, useRef, useState,
} from 'react';

type UseModal = (isOpen: boolean, animationDelay: number, onClose: () => void) => {
  isClosing: boolean;
  isMounted: boolean;
  close: () => void;
};

export const useModal: UseModal = (isOpen, animationDelay, onClose) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, animationDelay);
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      setIsMounted(false);
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing, isMounted, close,
  };
};
