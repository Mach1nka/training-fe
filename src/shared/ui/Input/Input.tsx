import {
  memo, InputHTMLAttributes, ChangeEvent, FC,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<Props> = memo(({
  className, value, onChange, placeholder, type = 'text', ...props
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={onInputChange}
        {...props}
      />
    </div>

  );
});
