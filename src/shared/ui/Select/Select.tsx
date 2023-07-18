import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface Props<T extends string> {
  className?: string;
  label?: string;
  readonly?: boolean;
  value?: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
}

const genericMemo: <T>(component: T) => T = memo;

const SelectComponent = <T extends string>({
  className, label, options, value, readonly, onChange,
}: Props<T>) => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as T);
  };

  const optionsList = useMemo(() => (
    options.map(({ label, value }) => (
      <option key={value} className={cls.option} value={value}>
        {label}
      </option>
    ))
  ), [options]);

  return (
    <div className={classNames(cls.Wrapper, { [cls.readonly]: readonly }, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span> }
      <select value={value} disabled={readonly} className={cls.select} onChange={onSelectChange}>
        {optionsList}
      </select>
    </div>
  );
};

export const Select = genericMemo(SelectComponent);
