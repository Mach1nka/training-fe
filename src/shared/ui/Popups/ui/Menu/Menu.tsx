import type { FC, ReactNode } from 'react';
import { Fragment, memo, useMemo } from 'react';
import { Menu as HMenu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import type { DropdownVerticalDirection, DropdownHorizontalDirection } from '@/shared/types/common';

import { MenuItem } from './MenuItem/MenuItem';
import type { DropdownItem } from './MenuItem/MenuItem';
import cls from './Menu.module.scss';
import popupCls from '../../styles/popups.module.scss';

interface Props {
  className?: string;
  options: DropdownItem[];
  label: ReactNode;
  directionV?: DropdownVerticalDirection;
  directionH?: DropdownHorizontalDirection;
}

export const Menu: FC<Props> = memo(({
  className,
  options,
  label,
  directionV = 'bottom',
  directionH = 'left',
}) => {
  const optionsList = useMemo(() => (
    options.map((option, idx) => <MenuItem key={idx} className={cls.item} {...option} />)
  ), [options]);

  const listClasses = useMemo(() => ([
    popupCls.list, popupCls[directionV], popupCls[directionH],
  ]), [directionV, directionH]);

  return (
    <HMenu as="div" className={classNames(cls.Menu, {}, [className])}>
      <HMenu.Button as={Fragment}>
        {label}
      </HMenu.Button>
      <HMenu.Items className={classNames(cls.list, {}, listClasses)}>
        {optionsList}
      </HMenu.Items>
    </HMenu>
  );
});
