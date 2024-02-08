import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import type { SidebarItemType } from '../../model/types';

import cls from './SidebarItem.module.scss';

interface Props {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<Props> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();
  const { path, text, Icon } = item;

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
