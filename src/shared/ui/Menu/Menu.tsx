import {
  FC, Fragment, ReactNode, memo, useMemo,
} from 'react';
import { Menu as Dropdown } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownVerticalDirection, DropdownHorizontalDirection } from '@/shared/types/common';

import { MenuItem } from './MenuItem/MenuItem';
import cls from './Menu.module.scss';

export interface DropdownItem {
  content: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

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
    options.map((option, idx) => <MenuItem key={idx} {...option} />)
  ), [options]);

  const listClasses = useMemo(() => ([
    cls[directionV], cls[directionH],
  ]), [directionV, directionH]);

  return (
    <Dropdown as="div" className={classNames(cls.Menu, {}, [className])}>
      <Dropdown.Button as={Fragment}>
        {label}
      </Dropdown.Button>
      <Dropdown.Items className={classNames(cls.list, {}, listClasses)}>
        {optionsList}
      </Dropdown.Items>
    </Dropdown>
  );
});
