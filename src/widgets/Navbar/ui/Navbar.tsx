import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={classNames(cls.links)}>
      <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to="/">Main Page</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About Page</AppLink>
    </div>
  </div>
);
