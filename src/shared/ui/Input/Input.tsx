import type { InputHTMLAttributes, ChangeEvent, FC } from 'react';
import {
  memo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface Props extends HTMLInputProps {
  className?: string;
  value?: string | number;
  readonly?: boolean;
  onChange: (value: string) => void;
}

export const Input: FC<Props> = memo(({
  className, id, value, onChange, placeholder, type = 'text', readonly = false, ...props
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, { [cls.readonly]: readonly }, [className])}>
      {placeholder && (
        <label htmlFor={id} className={cls.placeholder}>
          {`${placeholder}>`}
        </label>
      )}
      <input
        id={id}
        className={cls.input}
        type={type}
        value={value}
        onChange={onInputChange}
        readOnly={readonly}
        {...props}
      />
    </div>
  );
});
