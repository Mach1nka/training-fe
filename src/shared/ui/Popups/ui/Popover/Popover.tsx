import { Fragment, memo, useMemo } from 'react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Popover } from '@headlessui/react';

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

export const AppPopover: FC<Props> = memo(({
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
    <Popover className={classNames(cls.Popover, {}, [className])}>
      <Popover.Button as={Fragment}>{label}</Popover.Button>
      <Popover.Panel unmount={unmount} className={classNames(cls.content, {}, listClasses)}>
        {children}
      </Popover.Panel>
    </Popover>
  );
});
