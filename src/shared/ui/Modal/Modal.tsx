import type { FC, ReactNode, MouseEvent } from 'react';
import { useState, useRef, useEffect } from 'react';

import { Portal } from '@/shared/ui/Portal/Portal';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

// TODO: fix opening animation
export const Modal: FC<Props> = ({
  children, className, isOpen, onClose, lazy,
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosed,
  };

  const closeHandler = () => {
    setIsClosed(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosed(false);
    }, 300);
  };

  const onContentClick = (e: MouseEvent) => {
    // e.preventDefault();
    e.stopPropagation();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  };

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
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
