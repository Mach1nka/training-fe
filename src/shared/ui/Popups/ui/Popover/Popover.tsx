import { Fragment, useMemo } from 'react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import type { DropdownVerticalDirection, DropdownHorizontalDirection } from '@/shared/types/common';

import cls from './Popover.module.scss';
import popupCls from '../../styles/popups.module.scss';

interface Props extends PropsWithChildren {
  className?: string;
  label: ReactNode;
  directionV?: DropdownVerticalDirection;
  directionH?: DropdownHorizontalDirection;
  unmount?: boolean;
}

export const Popover: FC<Props> = ({
  className,
  children,
  label,
  directionV = 'bottom',
  directionH = 'left',
  unmount = true,
}) => {
  const listClasses = useMemo(() => ([
    popupCls.list, popupCls[directionV], popupCls[directionH],
  ]), [directionV, directionH]);

  return (
    <HPopover className={classNames(cls.Popover, {}, [className])}>
      <HPopover.Button as={Fragment}>{label}</HPopover.Button>
      <HPopover.Panel unmount={unmount} className={classNames(cls.content, {}, listClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
