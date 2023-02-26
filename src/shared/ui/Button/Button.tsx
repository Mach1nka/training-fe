import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'XLarge',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean,
  size?: ButtonSize,
}

export const Button: FC<Props> = ({
  children, className, theme, square, size = ButtonSize.MEDIUM, ...props
}) => {
  const mods = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...props}
    >
      {children}
    </button>
  );
};
