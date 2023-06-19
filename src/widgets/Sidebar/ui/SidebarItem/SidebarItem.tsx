import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { getUserAuthData } from '@/entities/User';

import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface Props {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<Props> = memo(({ item, collapsed }) => {
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const { path, text, Icon } = item;

  if (item.authOnly && !authData) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
      to={path}
    >
      <Icon className={cls.icon} />
      <span className={cls.text}>{t(text)}</span>
    </AppLink>
  );
});
