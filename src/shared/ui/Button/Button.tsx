import type {
  ButtonHTMLAttributes,
  FC,
} from 'react';
import {
  memo,
  forwardRef,
} from 'react';

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

const ButtonComponent: FC<Props> = ({
  children,
  className,
  type = 'button',
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
      type={type}
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonForwardedRefComponent = forwardRef<HTMLButtonElement, Props>(({
  children,
  className,
  type = 'button',
  theme = ButtonTheme.OUTLINE,
  size = ButtonSize.MEDIUM,
  square,
  disabled,
  ...props
}: Props, ref) => {
  const mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      ref={ref}
      type={type}
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export const Button = memo(ButtonComponent);
export const ButtonForwardedRef = memo(ButtonForwardedRefComponent);
