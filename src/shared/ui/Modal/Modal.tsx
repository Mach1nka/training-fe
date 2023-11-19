import type { FC, ReactNode } from 'react';

import { Portal } from '@/shared/ui/Portal/Portal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { useModal } from '@/shared/hook/useModal';

import cls from './Modal.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal: FC<Props> = ({
  children, className, isOpen, onClose, lazy,
}) => {
  const {
    showing, closing, isMounted, onModalClose,
  } = useModal(isOpen, 300, onClose);

  const mods = {
    [cls.opened]: showing,
    [cls.closed]: closing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={onModalClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
