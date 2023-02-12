import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',

}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<Props> = ({ children, className, theme, ...props }) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...props}>
      {children}
    </button>
 );
};