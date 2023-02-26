import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])} />
  );
};
