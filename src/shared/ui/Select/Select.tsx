import {
  Fragment,
  memo, useCallback, useMemo, useState,
} from 'react';
import { Listbox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CheckIcon from '@/shared/assets/icons/confirm.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ButtonForwardedRef } from '@/shared/ui/Button/Button';
import { DropdownVerticalDirection, DropdownHorizontalDirection } from '@/shared/types/common';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  label: string;
  value: T;
  disabled?: boolean;
}

interface Props<T extends string> {
  className?: string;
  placeholder?: string;
  readonly?: boolean;
  value?: T;
  defaultValue?: T;
  directionV?: DropdownVerticalDirection;
  directionH?: DropdownHorizontalDirection;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
}

const genericMemo: <T>(component: T) => T = memo;

const SelectComponent = <T extends string>({
  className,
  placeholder,
  options,
  value,
  defaultValue,
  readonly,
  directionV = 'bottom',
  directionH = 'left',
  onChange,
}: Props<T>) => {
  const [item, setItem] = useState<SelectOption<T> | undefined>(
    options.find((el) => el.value === value)
    || options.find((el) => el.value === defaultValue),
  );

  const listClasses = useMemo(() => ([
    cls[directionV], cls[directionH],
  ]), [directionV, directionH]);

  const onSelectChange = useCallback((option: SelectOption<T>) => {
    setItem(option);
    onChange(option.value);
  }, [onChange]);

  const optionsList = useMemo(() => (
    options.map((option) => (
      <Listbox.Option
        key={option.value}
        value={option}
        disabled={option.disabled}
        as={Fragment}
      >
        {({ active, selected }) => (
          <li
            className={classNames(cls.item, { [cls.active]: active, [cls.selected]: selected })}
          >
            {selected && <Icon Svg={CheckIcon} className={cls.checkIcon} />}
            {option.label}
          </li>
        )}
      </Listbox.Option>
    ))
  ), [options]);

  return (
    <Listbox
      disabled={readonly}
      value={item}
      onChange={onSelectChange}
      as="div"
      className={classNames(cls.Listbox, { [cls.readonly]: readonly }, [className])}
    >
      {placeholder && <Listbox.Label className={cls.label}>{`${placeholder}>`}</Listbox.Label>}
      <div className={cls.select}>
        <Listbox.Button as={Fragment}>
          <ButtonForwardedRef disabled={readonly} className={cls.button}>
            {item?.label}
          </ButtonForwardedRef>
        </Listbox.Button>
        <Listbox.Options className={classNames(cls.list, {}, listClasses)}>
          {optionsList}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export const Select = genericMemo(SelectComponent);
