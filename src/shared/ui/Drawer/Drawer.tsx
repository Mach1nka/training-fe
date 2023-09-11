import { memo } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal/Portal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { useModal } from '@/shared/hook/useModal';

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
  const { isMounted, isClosing, close } = useModal(isOpen, 300, onClose);

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
