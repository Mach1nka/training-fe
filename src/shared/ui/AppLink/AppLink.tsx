import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = ({ 
  children,
  className,
  theme = AppLinkTheme.PRIMARY, 
  ...props }) => {
  return (
    <Link className={classNames(cls.Navbar, {}, [className, cls[theme]])} {...props}>
      {children}
    </Link>
  );
};