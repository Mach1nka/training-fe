import type { FC } from 'react';
import { forwardRef, memo } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum AppLinkUnderline {
  ALWAYS = 'always',
  HOVER = 'hover',
  NEVER = 'never',
}

interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  underline?: AppLinkUnderline;
}

export const AppLinkComponent: FC<Props> = ({
  children,
  className,
  theme = AppLinkTheme.PRIMARY,
  underline = AppLinkUnderline.ALWAYS,
  ...props
}) => (
  <Link
    className={classNames(cls.AppLink, {}, [className, cls[theme], cls[underline]])}
    {...props}
  >
    {children}
  </Link>
);

export const AppLinkForwardedRefComponent = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      children,
      className,
      theme = AppLinkTheme.PRIMARY,
      underline = AppLinkUnderline.ALWAYS,
      ...props
    },
    ref,
  ) => (
    <Link
      ref={ref}
      className={classNames(cls.AppLink, {}, [className, cls[theme], cls[underline]])}
      {...props}
    >
      {children}
    </Link>
  ),
);

export const AppLink = memo(AppLinkComponent);
export const AppLinkForwardedRef = memo(AppLinkForwardedRefComponent);
