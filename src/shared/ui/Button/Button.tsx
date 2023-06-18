import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
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

export const Button: FC<Props> = memo(({
  children,
  className,
  theme = ButtonTheme.OUTLINE,
  size = ButtonSize.MEDIUM,
  square,
  disabled,
  ...props
}) => {
  const mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});
