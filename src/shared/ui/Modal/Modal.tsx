import {
  FC, ReactNode, MouseEvent, useState, useRef, useEffect,
} from 'react';

import { Portal } from '@/shared/ui/Portal/Portal';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({
  children, className, isOpen, onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const closeHandler = () => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const onContentClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen]);

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
