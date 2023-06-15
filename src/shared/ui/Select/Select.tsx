import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  className?: string;
  label?: string;
  readonly?: boolean;
  value?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export const Select: FC<Props> = memo(({
  className, label, options, value, readonly, onChange,
}) => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
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
});
