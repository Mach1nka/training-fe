import { memo } from 'react';
import type { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import CheckIcon from '@/shared/assets/icons/confirm.svg';

import popupCls from '../../../styles/popups.module.scss';

import cls from './SelectItem.module.scss';

interface Props {
  className?: string;
  active: boolean;
  selected: boolean;
  label: string;
}

// FIX: Figure out how to apply this component to Headless UI Listbox.Option.
// NOTE: Leverage through as attribute or Children wasn't succeed because active and selected values don't react on user interaction.
export const SelectItem: FC<Props> = memo(({ className, label, active, selected }) => (
  <li
    className={classNames(cls.item, { [popupCls.active]: active, [cls.selected]: selected }, [
      popupCls.item,
      className,
    ])}
  >
    {selected && <Icon Svg={CheckIcon} className={cls.checkIcon} />}
    {label}
  </li>
));
