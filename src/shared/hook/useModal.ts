import { useCallback, useEffect, useRef, useState } from 'react';

type UseModal = (
  shouldOpen: boolean,
  animationDelay: number,
  onClose: () => void,
) => {
  showing: boolean;
  closing: boolean;
  isMounted: boolean;
  onModalClose: () => void;
};

export const useModal: UseModal = (shouldOpen, animationDelay, onClose) => {
  const [showing, setShowing] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onModalClose = useCallback(() => {
    setClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setClosing(false);
    }, animationDelay);
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onModalClose();
      }
    },
    [onModalClose],
  );

  useEffect(() => {
    if (shouldOpen) {
      setIsMounted(true);
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      setIsMounted(false);
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [shouldOpen, onKeyDown]);

  useEffect(() => {
    if (isMounted) {
      setShowing(true);
    }

    return () => {
      setShowing(false);
    };
  }, [isMounted]);

  return {
    showing,
    closing,
    isMounted,
    onModalClose,
  };
};
