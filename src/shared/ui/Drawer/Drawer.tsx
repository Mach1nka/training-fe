import { memo } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal/Portal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { useModal } from '@/shared/hook/useModal';

import { useLoadAnimationLibrary } from '@/shared/hook/useAnimationLibrary';

import cls from './Drawer.module.scss';

interface Props extends PropsWithChildren {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Drawer: FC<Props> = memo(({
  className, children, isOpen, onClose, lazy,
}) => {
  const {
    showing, closing, isMounted, onModalClose,
  } = useModal(isOpen, 300, onClose);
  // const { isLoaded, Gesture, Spring } = useLoadAnimationLibrary();

  const mods = {
    [cls.opened]: showing,
    [cls.closing]: closing,
  };

  // if (!isLoaded) {
  //   return null;
  // }

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={onModalClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
